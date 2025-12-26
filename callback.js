//call back meaning passing function through the arguments

console.log("buy food")
function cook(abc){  //arguments callback
    setTimeout(()=>{
        console.log("cook food")
        abc()  //printing

    },4000)
}
function eat(){
    console.log("eat foosd")
}

cook(eat) //calling through function eat function is pass as the argument 



console.log("this is krishna ")
function abc(callback){
    setTimeout(()=>{
        console.log("i am 8")
        callback();
    },2000)

}
function aaa(){
    console.log("i willbe")
}
abc(aaa)

//create a function that takes two number  add a call back



function aa(num1,num2,callback){
    const sum=num1+num2
    callback(sum)
}
function bb(sum ){
    console.log(sum*2)

}
aa(10,20,bb)

//create a functionn that takes string  add a callback function the function should convert the string to upper case and then the res
//the call back ,which will print the lenth of upper cadse string


function fu(a, callback) {
    let text = a;
    let ut = text.toUpperCase();
    callback(ut);
}

function na(ut) {
    let l = ut.length;
    console.log(ut,l);
}

fu("krishna", na);





