import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import ts from 'typescript';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
require.extensions['.ts']=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.CommonJS,esModuleInterop:true}}).outputText,f);
const {selectOpenAIApiKey,sanitizedOpenAIApiErrorCode}=require('../app/lib/openai-auth.ts');
test('rotated alias wins; standard local name remains a fallback',()=>{
 assert.equal(selectOpenAIApiKey({OPENAI_API_KEY1:' new ',OPENAI_API_KEY:'old'}),'new');
 assert.equal(selectOpenAIApiKey({OPENAI_API_KEY1:'  ',OPENAI_API_KEY:' local '}),'local');
 assert.equal(selectOpenAIApiKey({}),undefined);
});
test('upstream error logs accept only a short sanitized code',()=>{
 assert.equal(sanitizedOpenAIApiErrorCode({error:{code:'expired_secret_key'}}),'expired_secret_key');
 assert.equal(sanitizedOpenAIApiErrorCode({error:{code:'bad\nkey'}}),'unknown');
 assert.equal(sanitizedOpenAIApiErrorCode({error:{message:'secret-bearing body'}}),'unknown');
 assert.equal(sanitizedOpenAIApiErrorCode(null),'unknown');
});
