console.log("hi");
const fs=require('fs');

fs.unlink('file2.txt', (err, data)=>{
    if(err) console.log(err);
    else console.log(data);
})