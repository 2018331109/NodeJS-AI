console.log("hi");
const fs=require('fs');

fs.appendFile('file1.txt', ". I am 24", (err)=>{
    if(err) console.log(err);
    else console.log("successfull");
})