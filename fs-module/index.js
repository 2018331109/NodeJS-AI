console.log("hi");
const fs=require('fs');

fs.writeFile('file1.txt', "This is file 1", function(err){
    if(err) console.log(err);
    else console.log("successfull");
})