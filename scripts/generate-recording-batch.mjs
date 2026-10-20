import fs from 'node:fs';
import {spawn} from 'node:child_process';
const ids=process.argv.slice(2);
const concurrency=Number(process.env.RECORDING_BATCH_CONCURRENCY ?? 3);
if(!Number.isInteger(concurrency) || concurrency<1 || concurrency>3)throw Error('Recording concurrency must be 1, 2 or 3');
if(!ids.length || ids.some(id=>!/^[a-z0-9-]+$/.test(id)) || new Set(ids).size!==ids.length)throw Error('Provide unique lesson slugs');
const jobs=ids.flatMap(id=>JSON.parse(fs.readFileSync(`app/data/jee-${id}-lecture.json`)).chapters.map((_,i)=>[id,String(i+1)]));
function run(script,args){return new Promise((resolve,reject)=>{
 const child=spawn(process.execPath,[`scripts/${script}`, ...args],{stdio:['ignore','pipe','pipe']});let output='';
 child.stdout.on('data',d=>{output+=d;process.stdout.write(d);});child.stderr.on('data',d=>{output+=d;process.stderr.write(d);});
 child.on('error',reject);child.on('exit',code=>code===0?resolve():reject(Error(output || `Exit ${code}`)));
});}
async function worker(delay){await new Promise(r=>setTimeout(r,delay));while(jobs.length){const args=jobs.shift();
 let locks=0,failures=0;
 for(;;)try{await run('generate-newtons-laws.mjs',args);break;}catch(e){
  if(/budget is locked/.test(e.message)){if(++locks>10)throw e;}
  else if(++failures>2 || !/TimeoutError|fetch failed|TypeError: terminated|UND_ERR_SOCKET|TTS HTTP 429|TTS HTTP 5\d\d/.test(e.message))throw e;
  await new Promise(r=>setTimeout(r,1000));
 }
}}
const results=await Promise.allSettled(Array.from({length:concurrency},(_,i)=>worker(i*300)));
const failed=results.find(r=>r.status==='rejected');if(failed)throw failed.reason;
// Assemble only after all chapter files are complete; captions then run per lesson.
await Promise.all(ids.map(async id=>{
 await run('generate-newtons-laws.mjs',[id]);
 for(let attempt=0;;attempt++)try{await run('align-straight-line.mjs',[id]);break;}catch(e){
  if(attempt>=2 || !/budget is locked|fetch failed|Alignment failed: HTTP (429|5\d\d)/.test(e.message))throw e;
  await new Promise(r=>setTimeout(r,1000*(attempt+1)));
 }
}));
