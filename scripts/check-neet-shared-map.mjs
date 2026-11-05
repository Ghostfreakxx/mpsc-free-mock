import assert from'node:assert/strict';import fs from'node:fs';import{createRequire}from'node:module';import ts from'typescript';import{chromium}from'playwright';
const req=createRequire(import.meta.url),old=req.extensions['.ts'];req.extensions['.ts']=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,esModuleInterop:true}}).outputText,f);
const{lectures}=req('../app/jee/classes/lessons.ts'),{sharedLesson}=req('../app/neet/classes/shared-lesson.ts');if(old)req.extensions['.ts']=old;else delete req.extensions['.ts'];
const map=JSON.parse(fs.readFileSync('app/data/neet-physics-chemistry-map.json')),base=process.env.TEST_URL||'http://localhost:3000';
const browser=await chromium.launch({channel:process.env.PLAYWRIGHT_CHANNEL||'msedge',headless:true,args:['--disable-http2']});
try{
 const page=await browser.newPage({viewport:{width:390,height:900},serviceWorkers:'block'}),errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto(base+'/neet',{waitUntil:'domcontentloaded'});await page.getByRole('link',{name:'Recorded NEET classes',exact:true}).click();await page.waitForURL('**/neet/classes');await page.getByRole('link',{name:'Open Physics and Chemistry study map',exact:false}).click();await page.waitForURL('**/physics-chemistry');assert.equal(await page.locator('h1').innerText(),'Physics and Chemistry study map');
 for(const subject of['Physics','Chemistry']){await page.goto(base+'/neet/classes/physics-chemistry/'+subject.toLowerCase(),{waitUntil:'domcontentloaded'});assert.equal(await page.locator('section[id^="unit-"]').count(),20);assert.equal(await page.locator('a[href^="/neet/classes/shared/"]').count(),map.recordings.filter(r=>r.subject===subject).length);}
 for(const[i,r]of map.recordings.entries()){
  const shared=sharedLesson(r.id),original=lectures.find(l=>l.id===r.id),route='/neet/classes/shared/'+r.id;
  assert.equal((await page.goto(base+route,{waitUntil:'domcontentloaded',timeout:90000})).status(),200);
  assert.equal(await page.locator('h1').innerText(),r.title);assert.match(await page.locator('main').innerText(),new RegExp('NEET · '+r.subject.toUpperCase()));assert.equal(await page.getByRole('link',{name:'NEET classes',exact:true}).getAttribute('href'),'/neet/classes');
  const guidance=page.getByRole('region',{name:'NEET shared-class guidance'});assert.equal(await guidance.getByRole('link').getAttribute('href'),shared.reuse.mapHref);await guidance.locator('summary').click();assert.equal(await guidance.getByRole('button').count(),r.focus.length);
  const audio=page.locator('audio');await page.waitForFunction(()=>document.querySelector('audio')?.readyState>=1);assert.ok(Math.abs(await audio.evaluate(a=>a.duration)-r.duration)<.3);assert.equal(await audio.getAttribute('src'),original.audio);
  const source=await browser.newPage();await source.goto(base+'/jee/classes/'+r.id,{waitUntil:'domcontentloaded'});await source.waitForFunction(()=>document.querySelector('audio')?.readyState>=1);
  for(const n of[0,r.focus.length-1]){await guidance.getByRole('button').nth(n).click();await audio.evaluate(a=>a.pause());const index=r.focus[n].number-1;await page.waitForFunction(t=>document.querySelector('audio').currentTime>=t-.2,shared.timings.chapters?.[index]?.start??shared.timings.cues.find(c=>c.chapter===index).start);
   assert.equal(await page.locator('div[class*="formula"]').innerText(),original.segments[index].formula);assert.deepEqual(await page.locator('ol[class*="steps"] > li').allTextContents(),original.segments[index].steps);
   // Compare actual original boards, including legacy chapters that use formula/steps alone.
   await source.getByRole('complementary',{name:'Class chapters'}).getByRole('button').nth(index).click();await source.locator('audio').evaluate(a=>a.pause());assert.equal(await page.locator('div[class*="formula"]').innerText(),await source.locator('div[class*="formula"]').innerText());assert.deepEqual(await page.locator('svg[role="img"]').evaluateAll(nodes=>nodes.map(n=>n.outerHTML)),await source.locator('svg[role="img"]').evaluateAll(nodes=>nodes.map(n=>n.outerHTML)),`source diagram parity ${r.id} chapter ${index+1}`);
  }
  await source.close();
  assert.equal(await page.locator('fieldset').count(),r.quizCount);await page.locator('fieldset').first().getByRole('radio').nth(shared.quiz[0].answer).check();assert.match(await page.locator('fieldset').first().innerText(),/Correct\./);
  for(const width of[320,390,1440]){await page.setViewportSize({width,height:900});assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),r.id+' width '+width)}
  if(['measurements','practical-chemistry'].includes(r.id)){
   await audio.evaluate(a=>{a.currentTime=20;a.dispatchEvent(new Event('timeupdate'))});await page.evaluate(k=>{localStorage.setItem(k,'7');localStorage.setItem(k+'.answers','sentinel')},original.progressKey);
   await page.reload({waitUntil:'domcontentloaded'});await page.waitForFunction(()=>document.querySelector('audio')?.currentTime>=19);assert.match(await page.locator('fieldset').first().innerText(),/Correct\./);assert.deepEqual(await page.evaluate(k=>[localStorage.getItem(k),localStorage.getItem(k+'.answers')],original.progressKey),['7','sentinel']);
   await audio.evaluate(a=>a.play());await page.waitForFunction(()=>document.querySelector('audio').currentTime>20.5);await audio.evaluate(a=>a.pause());
   const event=page.waitForEvent('download');await page.getByRole('button',{name:'Download notes',exact:true}).click();const dl=await event;assert.equal(dl.suggestedFilename(),'neet-'+r.id+'-notes.txt');const notes=fs.readFileSync(await dl.path(),'utf8');assert.ok(notes.includes('NEET UG 2026')&&notes.includes(shared.segments[0].english));
   const vtt=await page.request.get(base+shared.subtitles);assert.equal(vtt.status(),200);assert.match(await vtt.text(),/^WEBVTT/);
  }
  if((i+1)%20===0)console.log('Verified shared classes:',i+1);
 }
 await page.evaluate(()=>{localStorage.setItem('neet.shared.units.lecture.v1','4');localStorage.setItem('neet.shared.measurements.lecture.v1','25')});await page.goto(base+'/neet/classes/shared/units',{waitUntil:'domcontentloaded'});await page.waitForFunction(()=>document.querySelector('audio')?.currentTime>=3);await page.getByRole('link',{name:'Open the measurement class',exact:false}).click();await page.waitForURL('**/shared/measurements');await page.waitForFunction(()=>document.querySelector('audio')?.currentTime>=24);assert.equal(await page.locator('h1').innerText(),map.recordings.find(r=>r.id==='measurements').title);
 for(const theme of['dark','light'])for(const route of['/neet/classes/physics-chemistry','/neet/classes/physics-chemistry/physics','/neet/classes/physics-chemistry/chemistry','/neet/classes/shared/measurements','/neet/classes/shared/practical-chemistry']){
  await page.evaluate(t=>localStorage.setItem('mpsc-theme',t),theme);await page.goto(base+route,{waitUntil:'domcontentloaded'});await page.setViewportSize({width:360,height:900});assert.equal(await page.locator('html').getAttribute('data-theme'),theme);assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));if(route.includes('/shared/'))await page.getByRole('region',{name:'NEET shared-class guidance'}).locator('summary').click();assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));await page.screenshot({path:'tmp/neet-shared-'+route.split('/').at(-1)+'-'+theme+'-360.png'});
 }
 for(const route of['/neet/classes/shared/vector-algebra','/neet/classes/shared/does-not-exist','/neet/classes/physics-chemistry/mathematics'])assert.equal((await page.goto(base+route)).status(),404);
 assert.deepEqual(errors,[]);console.log(`PASS: ${map.units.length} NEET units, ${map.recordings.length} shared classes, focus diagrams/audio, quizzes, progress isolation, notes, discovery and both mobile themes.`);
}finally{await browser.close()}
