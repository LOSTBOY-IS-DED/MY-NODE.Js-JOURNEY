// lets see what are blocking and non blocking request 
// synchronous task are blocking requests

const fs = require('fs');

// fs.writeFileSync("./test2.txt", ' hello world');
// console.log("1 ");
// // now suppose if i wanna read the file 
// const result = fs.readFileSync('./test2.txt',"utf-8"); // here i blocked my thread 
// console.log(result);

// console.log("2");  // now lets see examples by this console

// lets comment this for now


// asynchronous tasks are non blocking request 

console.log("1");

fs.readFile("./test2.txt","utf-8",(err, result) => {
    console.log(result);
});
console.log("2");  // in this the output came 1 , 2 and hello world becouse this didnt blcoked
// fs.writeFile("./test2.txt","Hello world async",(err)=>{});

//read file accepts callback but read file sync doesn't 

// Default Thread Pool size = 4 

// next go to os.js

