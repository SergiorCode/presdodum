import assert from 'node:assert/strict';
import fs from 'node:fs';
import {execFileSync} from 'node:child_process';
import {screens,masters,docs} from '../dist/data.js';
import {permittedDocuments,permittedRequest} from '../dist/model.js';
assert.equal(screens.length,55);
assert.equal(masters.length,25);
assert.equal(new Set(screens.map(s=>s.id)).size,55);
assert.equal(new Set(screens.map(s=>s.path)).size,55);
for(const s of screens){assert.ok(screens.some(t=>t.id===s.to),s.id+' has a missing target');assert.ok(masters.some(m=>m.id===s.m));for(const k of ['name','role','module','goal','info','cta','to','kind'])assert.ok(s[k],s.id+': '+k)}
assert.equal(screens.filter(s=>s.kind==='Vista maestra').length,25);
for(const m of masters)assert.equal(m.states.filter(s=>s.kind==='Vista maestra').length,1);
const allowed=permittedDocuments(docs,'company',{consent:true},{medicalAuthorized:true});
assert.ok(allowed.some(d=>d.id==='constancia'));
assert.ok(!allowed.some(d=>d.id==='receta'||d.id==='resultado'));
assert.ok(!permittedDocuments(docs,'company',{consent:false},{medicalAuthorized:true}).some(d=>d.id==='constancia'));
assert.ok(!permittedDocuments(docs,'company',{consent:true},{medicalAuthorized:false}).some(d=>d.id==='constancia'));
assert.equal(permittedDocuments(docs,'employee',{consent:false},{}).length,docs.length);
const requests=[{id:'A',person:'PR-00271'},{id:'B',person:'PR-00999'}];
assert.equal(permittedRequest(requests,'B','employee').id,'A');
assert.equal(permittedRequest(requests,'B','company').id,'B');
for(const name of [...docs.map(d=>d.id),'cupon']){const pdf=fs.readFileSync('dist/archivos/'+name+'.pdf');assert.ok(pdf.subarray(0,5).toString()==='%PDF-');assert.ok(pdf.length>1000)}
for(const name of ['app','data','ui','model'])execFileSync(process.execPath,['--check','dist/'+name+'.js']);
assert.ok(!/Servicios Legales|S\.A\. de C\.V\./i.test(fs.readFileSync('dist/index.html','utf8')));
console.log('PASS: 55 estados, 25 maestras, destinos válidos, permisos y aislamiento por rol, 7 PDF y sintaxis.');
