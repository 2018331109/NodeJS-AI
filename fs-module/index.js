console.log("hi");
const fs=require('fs');

fs.rename('file1.txt', 'file2.txt', (err)=>{
    if(err) console.log(err);
    else console.log("successful");
})