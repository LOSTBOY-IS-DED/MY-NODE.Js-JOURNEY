// what are modules ?
// when we work in real world codebase we are told to consize our projects and store all the functions in different folder
// we need to divide our codebase in modules

function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
// module.exports = add;
// module.exports = sub; // if we do like this it will overwrite the value of module,export so its not a good practice

//  so to solve this we will use objects

module.exports = {
    add, // we can change the name by addFn : add ,
    sub,
}