import test from'node:test';import assert from'node:assert/strict';import fs from'node:fs';import{createRequire}from'node:module';import ts from'typescript';
const req=createRequire(import.meta.url),old=req.extensions['.ts'];req.extensions['.ts']=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,esModuleInterop:true}}).outputText,f);
const{lectures}=req('../app/jee/classes/lessons.ts'),{sharedLesson}=req('../app/neet/classes/shared-lesson.ts');if(old)req.extensions['.ts']=old;else delete req.extensions['.ts'];
const map=JSON.parse(fs.readFileSync('app/data/neet-physics-chemistry-map.json'));
test('NEET mapping enumerates twenty units per subject and unique shared recordings',()=>{
 for(const subject of['Physics','Chemistry'])assert.deepEqual(map.units.filter(u=>u.subject===subject).map(u=>u.unit),Array.from({length:20},(_,i)=>i+1));assert.equal(map.recordings.length,106);assert.equal(new Set(map.recordings.map(r=>r.id)).size,106);assert.equal(map.baseline,'NEET UG 2026');assert.match(map.scope,/not a completed required-subheading audit/);
});
test('every chapter reference resolves to the real unchanged narration and title',()=>{
 for(const r of map.recordings){const l=lectures.find(l=>l.id===r.id);assert.ok(l,r.id);assert.equal(r.subject,l.subject??'Physics');assert.equal(r.chapterCount,l.segments.length);assert.equal(r.duration,l.timings.duration);assert.equal(r.quizCount,l.quiz.length);assert.ok(r.focus.length);assert.equal(new Set(r.focus.map(c=>c.number)).size,r.focus.length);for(const c of r.focus)assert.equal(c.title,l.segments[c.number-1]?.title);assert.ok(map.units.some(u=>u.subject===r.subject&&u.unit===r.unit&&u.ids.includes(r.id)));}
});
test('NEET wrappers preserve diagram IDs, chapter indexes, audio, corrections and quiz content',()=>{
 for(const r of map.recordings){const original=lectures.find(l=>l.id===r.id),shared=sharedLesson(r.id);assert.equal(shared.id,original.id);assert.equal(shared.segments,original.segments);assert.equal(shared.quiz,original.quiz);assert.equal(shared.timings,original.timings);assert.equal(shared.audio,original.audio);assert.equal(shared.subtitles,original.subtitles);assert.ok(fs.statSync('public'+shared.audio).size>10000);assert.match(fs.readFileSync('public'+shared.subtitles,'utf8'),/^WEBVTT/);assert.ok(shared.scope.includes(original.scope));}
 assert.ok(sharedLesson('measurements').segments[2].note.includes('round-to-even'));
});
test('course progress is isolated and invalid or Mathematics IDs are not exposed',()=>{
 const keys=new Set();for(const r of map.recordings){const original=lectures.find(l=>l.id===r.id),shared=sharedLesson(r.id);assert.equal(shared.progressKey,`neet.shared.${r.id}.lecture.v1`);assert.notEqual(shared.progressKey,original.progressKey);assert.ok(!keys.has(shared.progressKey));keys.add(shared.progressKey);assert.match(shared.reuse.mapHref,/^\/neet\/classes\/physics-chemistry\/(physics|chemistry)#unit-\d+$/)}
 for(const id of['coordinate-geometry','vector-algebra','__proto__','does-not-exist'])assert.equal(sharedLesson(id),undefined);
});
test('NEET-specific scope distinguishes experimental and p-block extensions',()=>{
 const r=id=>map.recordings.find(r=>r.id===id),u=(s,n)=>map.units.find(u=>u.subject===s&&u.unit===n);
 assert.deepEqual(r('lab-optics').focus.map(c=>c.number),[1,2,4,5]);assert.deepEqual(r('lab-devices').focus.map(c=>c.number),[1,2,3,4]);assert.ok(u('Physics',20).ids.includes('lab-convex-mirror'));assert.ok(u('Physics',20).ids.includes('lab-liquid-mixtures'));assert.equal(r('p-block').focus.length,8);for(let n=42;n<=51;n++)assert.ok(r('practical-chemistry').focus.some(c=>c.number===n));assert.match(u('Chemistry',10).extra,/not extra NEET 2026/);assert.match(u('Chemistry',20).review,/mentioned test is not proof/);
});
test('map pages remain server-rendered and source routes are statically allowlisted',()=>{
 for(const p of['app/neet/classes/physics-chemistry/page.tsx','app/neet/classes/physics-chemistry/[subject]/page.tsx','app/neet/classes/shared/[slug]/page.tsx'])assert.doesNotMatch(fs.readFileSync(p,'utf8'),/['"]use client['"]/);const route=fs.readFileSync('app/neet/classes/shared/[slug]/page.tsx','utf8');assert.match(route,/dynamicParams=false/);assert.match(route,/generateStaticParams/);assert.match(route,/notFound\(\)/);
});
