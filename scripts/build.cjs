const fs=require('node:fs');const path=require('node:path');
const root=path.resolve(__dirname,'..');const out=path.join(root,'dist');fs.rmSync(out,{recursive:true,force:true});fs.mkdirSync(out);
for(const name of ['index.html','robots.txt','css','js','assets'])fs.cpSync(path.join(root,name),path.join(out,name),{recursive:true});
// Content versions prevent phones from reusing an older stylesheet or room script.
const {createHash}=require('node:crypto');
let html=fs.readFileSync(path.join(out,'index.html'),'utf8');
for(const asset of ['css/styles.css','js/data.js','js/app.js']){
 const version=createHash('sha256').update(fs.readFileSync(path.join(out,asset))).digest('hex').slice(0,12);
 html=html.replace(`"./${asset}"`,`"./${asset}?v=${version}"`);
}
fs.writeFileSync(path.join(out,'index.html'),html);
console.log('Static site built in dist/');
