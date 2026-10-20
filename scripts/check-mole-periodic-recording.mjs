import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
const { chromium } = await import(pathToFileURL(`${process.env.PLAYWRIGHT_MODULE}/index.mjs`).href);
const base=process.env.TEST_URL || 'http://localhost:3178';
const id=process.argv[2];
if(!['mole-concept','periodic-trends'].includes(id))throw Error('Choose an mole concept or periodic trends recording');
const data=JSON.parse(await fs.readFile(`app/data/jee-${id}-lecture.json`,'utf8'));
const timings=JSON.parse(await fs.readFile(`app/data/jee-${id}-timings.json`,'utf8'));
const browser=await chromium.launch({channel:'msedge',headless:true});
try {
 const page=await browser.newPage({serviceWorkers:'block'}); const errors=[];
 page.on('pageerror',e=>errors.push(e.message));
 assert.equal((await page.goto(`${base}/jee/classes`)).status(),200);
 assert.equal(await page.locator(`a[href="/jee/classes/${id}"]`).count(),0,'Chemistry must not appear under Physics');
 await page.getByRole('button',{name:'Chemistry',exact:true}).click();
 await page.locator(`a[href="/jee/classes/${id}"]`).filter({hasText:'Watch recorded class'}).click();
 await page.waitForURL(`**/jee/classes/${id}`);
 assert.equal(await page.locator('h1').textContent(),data.title);
 assert.match(await page.locator('main').textContent(),/CHEMISTRY/);
 await page.waitForFunction(()=>document.querySelector('audio')?.readyState >= 1);
 const audio=page.locator('audio');
 assert.ok(Math.abs(await audio.evaluate(a=>a.duration)-timings.duration)<.2);
 await audio.evaluate(a=>a.play());
 await page.waitForFunction(()=>document.querySelector('audio').currentTime>1);
 await audio.evaluate(a=>a.pause());
 assert.equal((await page.request.get(`${base}/lectures/${id}/english.vtt`)).status(),200);
 const chapters=page.getByRole('complementary',{name:'Class chapters'}).getByRole('button');
 assert.equal(await chapters.count(),data.chapters.length);
 for(let i=0;i<data.chapters.length;i++) {
   await chapters.nth(i).click();
   await page.waitForFunction(i=>document.querySelector('[aria-label="Class chapters"] button[aria-current="step"]')?.textContent.includes(i), data.chapters[i].title);
   await audio.evaluate(a=>a.pause());
   assert.ok(Math.abs(await audio.evaluate(a=>a.currentTime)-timings.chapters[i].start)<2);
   for(const width of [1440,390,320]) {
     await page.setViewportSize({width,height:900});
     assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`chapter ${i} width ${width}`);
   }
   await page.locator('svg[role="img"]').first().screenshot({path:`tmp/${id}-board-${i}.png`});
 }
 await audio.evaluate(a=>{a.currentTime=130;a.dispatchEvent(new Event('timeupdate'));});
 await page.reload(); await page.waitForFunction(()=>document.querySelector('audio')?.currentTime>=129);
 assert.equal(await page.locator('fieldset').count(),data.quiz.length);
 for(const [i,q] of data.quiz.entries())await page.locator('fieldset').nth(i).getByRole('radio').nth(q.answer).check();
 assert.equal(await page.getByRole('status').filter({hasText:/^Correct\./}).count(),data.quiz.length);
 const downloadEvent=page.waitForEvent('download');
 await page.getByRole('button',{name:/Download notes/}).click();
 const download=await downloadEvent; const notes=await fs.readFile(await download.path(),'utf8');
 assert.ok(notes.includes(data.chapters.at(-1).script));
 await page.goto(`${base}/jee/classes/study/${id}`);
 await page.getByRole('link',{name:'Watch the Marin class'}).waitFor();
 assert.equal(await page.locator('fieldset').count(),id==='mole-concept'?5:6);
 await page.goto(`${base}/jee/classes`);await page.getByRole('button',{name:'Chemistry',exact:true}).click();
 const unit=page.getByRole('region',{name:'Chemistry course map'}).locator('li').filter({has:page.locator(`a[href="/jee/classes/${id}"]`)});
 assert.match(await unit.textContent(),/Recorded/);
 await page.getByRole('button',{name:'Physics',exact:true}).click();
 assert.equal(await page.locator(`a[href="/jee/classes/${id}"]`).count(),0);
 assert.match(await page.locator('main').textContent(),/86 recorded Physics classes/);
 await page.goto(base+'/jee/classes/units');
 await page.waitForFunction(()=>document.querySelector('audio')?.readyState>=1);
 assert.match(await page.locator('main').textContent(),/PHYSICS/);
 await page.locator('audio').evaluate(a=>a.play());
 await page.waitForFunction(()=>document.querySelector('audio').currentTime>.3);
 await page.locator('audio').evaluate(a=>a.pause());
 assert.deepEqual(errors,[]);console.log('PASS: Chemistry entry, all chapter boards, playback, captions, resume, all quiz answers, notes, course map and responsive layouts.');
} finally {await browser.close();}
