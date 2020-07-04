// Call five .txt write "Hello Node.js" in sync form using  fs.writeFileSync
const fs = require('fs');

for (let i = 1; i <= 5; i++){
    const file = `sync-txt${i}.txt`
    const out = fs.writeFileSync(file,'Hello Node.js!')
    console.log(out);
}
//================================================

//And now, i write .txt with assync form! All in same time! using fs.writeFile

const fs = require('fs');

for (let i=1; i <= 5; i++){
    const file = `async-txt${i}.txt`;
    fs.writeFile(file,'Hello Node.js!', (err,out) =>{
        console.log(out);
    })
}

