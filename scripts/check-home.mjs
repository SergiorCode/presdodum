import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
import {screens} from '../webapp-demo/data.js';

const root=path.resolve(import.meta.dirname,'..');
const html=fs.readFileSync(path.join(root,'home/index.html'),'utf8');
const script=fs.readFileSync(path.join(root,'home/site.js'),'utf8');
const ids=new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(match=>match[1]));
const routes=new Set(screens.map(screen=>screen.path));
let localLinks=0;
for(const [,value] of html.matchAll(/(?:href|src)="([^"]+)"/g)){
  if(value.startsWith('#')){
    assert.ok(ids.has(value.slice(1)),`Destino interno inexistente: ${value}`);
    continue;
  }
  const url=new URL(value,'http://presdodum.local/home/');
  if(url.origin!=='http://presdodum.local')continue;
  const file=path.join(root,decodeURIComponent(url.pathname));
  assert.ok(fs.existsSync(file),`Recurso inexistente: ${value}`);
  if(fs.statSync(file).isDirectory())assert.ok(fs.existsSync(path.join(file,'index.html')),`Directorio sin entrada: ${value}`);
  if(url.pathname.startsWith('/webapp-demo/')&&url.hash.startsWith('#/'))assert.ok(routes.has(url.hash.slice(1)),`Ruta de demo inexistente: ${value}`);
  localLinks++;
}
for(const [,value] of script.matchAll(/['"](\/[^'"]+)['"]/g)){
  if(value.startsWith('/empleado/')||value.startsWith('/empresa/')||['/documentos','/ayuda/asistente'].includes(value))assert.ok(routes.has(value),`Ruta dinámica inexistente: ${value}`);
}
for(const [,value] of script.matchAll(/['"](assets\/[^'"]+)['"]/g))assert.ok(fs.existsSync(path.join(root,'home',value)),`Imagen dinámica inexistente: ${value}`);
execFileSync(process.execPath,['--check',path.join(root,'home/site.js')]);
console.log(`PASS: sitio comercial, ${localLinks} enlaces y recursos locales, rutas de demo y sintaxis.`);
