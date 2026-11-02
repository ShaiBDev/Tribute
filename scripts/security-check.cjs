const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),dist=path.join(root,'dist');
const files=fs.readdirSync(dist);assert.deepEqual(files.sort(),['app.js','engine.js','index.html','style.css']);
const html=fs.readFileSync(path.join(dist,'index.html'),'utf8');
for(const rule of ["default-src 'none'","script-src 'self'","connect-src 'none'","object-src 'none'","base-uri 'none'","form-action 'none'"])assert(html.includes(rule),`Missing CSP: ${rule}`);
assert(!/<script\b(?![^>]*\bsrc=)[^>]*>/i.test(html),'Inline scripts forbidden');assert(!/\son[a-z]+\s*=/i.test(html),'Inline handlers forbidden');
for(const name of ['app.js','engine.js']){const js=fs.readFileSync(path.join(dist,name),'utf8');assert(!/\b(innerHTML|outerHTML|insertAdjacentHTML|eval)\b|new\s+Function\b|\b(fetch|XMLHttpRequest|WebSocket)\s*\(/.test(js),`Unsafe sink or network call in ${name}`);}
// Heuristic credential check, not a substitute for GitHub secret scanning.
function scan(dir){for(const entry of fs.readdirSync(dir,{withFileTypes:true})){if(['.git','node_modules'].includes(entry.name))continue;const p=path.join(dir,entry.name);assert(!/^\.env(?:\.|$)/.test(entry.name),'Environment file must not be committed');if(entry.isDirectory()){scan(p);continue;}const text=fs.readFileSync(p,'utf8');for(const re of [/gh[pousr]_[A-Za-z0-9]{30,}/,/github_pat_[A-Za-z0-9_]{30,}/,/sk-(?:proj-)?[A-Za-z0-9_-]{24,}/,/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/])assert(!re.test(text),`Possible credential in ${p}`);}}
scan(root);console.log('Passed: publish allowlist, CSP, safe rendering, network prohibition, credential heuristics.');
