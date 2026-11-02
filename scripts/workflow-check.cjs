const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
// Run the actual UI event handlers with a minimal DOM, without network access.
class Element{constructor(){this.children=[];this.value='';this.disabled=false;this.textContent='';this.classList={toggle(){}};}append(...es){this.children.push(...es);}prepend(e){this.children.unshift(e);}replaceChildren(...es){this.children=es;}setAttribute(){}createTHead(){const e=new Element();this.append(e);return e;}createTBody(){return this.createTHead();}insertRow(){return this.createTHead();}insertCell(){return this.createTHead();}}
const ids=new Map();const get=id=>{if(!ids.has(id))ids.set(id,new Element());return ids.get(id);};get('team').value='All teams';get('period').value='4';
const context={document:{getElementById:get,createElement:()=>new Element(),createElementNS:()=>new Element(),createTextNode:s=>({textContent:s}),querySelectorAll:()=>[]},DemoEngine:require('../dist/engine.js'),Date,console,setTimeout};vm.runInNewContext(fs.readFileSync('dist/app.js','utf8'),context);
const request='Please approve access for a fictional employee in the demo.';
get('request').value=request;get('analyze').onclick();assert.equal(get('approve').disabled,false);
get('request').value=request+' Changed.';get('request').oninput();assert.equal(get('approve').disabled,true);get('approve').onclick();assert(!get('validation').textContent.includes('simulation complete'));
get('analyze').onclick();get('approve').onclick();assert.equal(get('approve').disabled,true);const count=get('log').children.length;get('approve').onclick();assert.equal(get('log').children.length,count,'Approval cannot be replayed');
get('analyze').onclick();get('reject').onclick();assert.equal(get('approve').disabled,true);
get('request').value='short';get('analyze').onclick();assert.equal(get('approve').disabled,true);
get('request').value='<img src=x onerror=alert(1)> please help with a demo request';get('analyze').onclick();assert.equal(get('approve').disabled,false);assert(get('result').children.length>0);
console.log('Passed: edit invalidates approval, stale approval blocked, replay blocked, rejection, invalid input, markup treated as text.');
