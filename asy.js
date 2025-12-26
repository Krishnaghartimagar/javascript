//synchroous meaning line by line
console.log("one")
console.log("two")
console.log('three')


//asynchronous

console.log('one asynchronous');
setTimeout(()=>{
    console.log("two asynchronous")


},4000)//ms



console.log("three")


console.log('buy food');
setTimeout(()=>{
    console.log("cook food")


},4000)//ms

console.log("eat food")

setTimeout(()=>{
    console.log("this is me ")
},3000) 

//online ticketing of movie is asynchronou 
//lining in offline ickting is synchronous

