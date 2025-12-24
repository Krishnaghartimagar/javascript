//promises is to solve the callback in large code .promiese  solve call back hell
//.then() ,.finally() , .catch().promise is asynchronous it works as object

let meropromis=new Promise((resolve,reject)=>{//Promise is case sensetive  if true resolve  and if false rejct
    let a=1;
    if(a==2){
        resolve("happy")
    }else{
        reject('sad');
    }

})
// console.log(meropromis)

meropromis.then(()=>{
    console.log('win')
})
.catch(()=>{
    console.log('loss')
})
.finally(()=>{
    console.log("by default printed")
})

