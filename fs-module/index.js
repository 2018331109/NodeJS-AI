console.log("hi");
const fs=require('fs');

fs.writeFileSync('file2.txt', 'This is a file', (err)=>{
    if(err) console.log("error");
    else console.log("successful");
})

fs.exists('file2.txt', (res)=>{
    if(res) console.log("exists");
    else console.log("don't exists");
})