const fs=require('node:fs');const path=require('node:path');
const root=path.resolve(__dirname,'..');const out=path.join(root,'dist');fs.rmSync(out,{recursive:true,force:true});fs.mkdirSync(out);
for(const name of ['index.html','robots.txt','css','js','assets'])fs.cpSync(path.join(root,name),path.join(out,name),{recursive:true});
console.log('Static site built in dist/');
