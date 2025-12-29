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

// meropromis.then(()=>{
//     console.log('win')
// })
// .catch(()=>{
//     console.log('loss')
// })
// .finally(()=>{
//     console.log("by default printed")
// })

// fetch('https://fakestoreapi.com/products/').then(a=>a.json()).then(b=>console.log(b)).catch(()=>console.log("error message"))

// fetch('https://bankingkhabar.com/wp-json/wp/v2/posts').then(a=>a.json()).then(b=>b.map(c=>console.log(c.title.rendered))).catch(()=>console.log("error message"))

//to solve .then and .catch this asysn and await is made
//asysn return the promices 
//await

async function abcd(){
    try{
        let data=await meropromis
        console.log(data)
    }catch(error)
    {
        console.log(error)
    }
}
abcd()


//----------------------------------------------------

async function getprolduct(){
    try{
        let data=await fetch('https://fakestoreapi.com/products/')
        let res=await data.json()
        console.log(res)

    }catch(error){
        console.log(error)

    }
    
}
getprolduct()

//--------------------------------------------
//creating


async function createprolduct(){
    try{
        let data=await fetch('https://dummyjson.com/products/add',{
            method:'POST',
            body:JSON.stringify({ //JSON stringfy conver data in JSON format
            title:"BMW pencil",price:'55'})
            })
            let res=await data.json()
        console.log(res,"product added")
            

    }catch(error){
        console.log(error)

    }
    
}
createprolduct()

