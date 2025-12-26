//set  timeout
console.log("my name is krishna gharti")
setTimeout(()=>{
    console.log("this is first")
},2000)
console.log("this is seacond")

//callback
function aa(abc){
    console.log('123')
    abc()
    
}
function bb(){
    console.log('abc')
}
aa(bb);

//promise

let mypromise=new Promise((resolve,reject)=>{
    let a=1
    if(a==2){
        resolve("im happy")
    }else{
        reject("i am so sad")
    }
})
mypromise.then(()=>{
    console.log("qq")
})
.catch(()=>{
    console.log('erroe')
})
.finally(()=>{
    console.log("this is run bydefault")
})

