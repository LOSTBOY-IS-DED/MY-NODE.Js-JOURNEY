const fs = require("fs");
// its a built in module 
// this is used to interact with file 

// if i don't learn this properly my whole server can crash 

fs.writeFileSync('./test.txt', 'Hey there');
// sync means this was a synchronous call
// if we write this program again it will overwrite the file 


// async ---> not synchronous
fs.writeFile('./test.txt',"hello word async" , err => {});

// so now we learn how to write in the file

// Lets learn how to read any file 
// how can i read file contact.txt

const result = fs.readFileSync("./contact.txt","utf-8");
console.log(result);
// these synchronous file returns something but the asynchronous don't instead it takes the callback \

fs.readFile("./contact.txt","utf-8",(err, result)=>{
    if(err){
        console.log("Error", err);
    }else{
        console.log(result);
    }
});



