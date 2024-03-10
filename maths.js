// so how can we use that function ?
// we can use require like we use import in python and #include in c++ 

const func = require('./2')

// ./ is necessary it means current directory 
// if you don't func this if will try looking for its own built in packages 
// even after this it wont run lets console.log this 
console.log(func);  //{} it gave an empty object 
// if we export now the value of func will be a func function

console.log(func.sub(2,4));
console.log(func.func(2,4));
//This is because whenever we import from any other file we need to export that too 


// console.log(func(2,5));

// if we run this we will get error that the function is not defined because our function is defined in 2.js 
