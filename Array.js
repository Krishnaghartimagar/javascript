// //array single ar multi dta storage 
// let fruits=['licthi','apple','banana','mango']
// console.log(fruits[1])

// let animal=new Array('lino','tiger','bufalo')
// console.log(animal[2])

// fruits.push('G bananacd ')
// console.log(fruits)
// fruits.unshift('R banana')
// console.log(fruits)

// fruits.pop()
// console.log(fruits)
// fruits.shift()
// console.log(fruits)

// console.log(fruits.concat(animal))
// console.log(fruits.reverse())
// console.log(fruits.join())
// console.log(fruits.sort())
// // console.log(fruits.indexOf(apple))
// // console.log(fruits.includes(apple))


// // //slice and splice concept
// // let frinds=['a','b','c','d']
// // console.log(frinds.slice(0,2))

// frinds.splice(1,0,"krishna ","gharti")
// console.log(frinds)

// frinds.splice(1,1,"ram","kumar");

// console.log(frinds)

// console.log(frinds.length)
// console.log(frinds.indexOf('gharti'))
// console.log(frinds.lastIndexOf('gharti'))


//map find filter
let age=[2,10,40,6,100,120]
let newage=age.map((a)=>a+10)
console.log(newage)


let a1=[3,4,5,8,9]
let newa1=a1.map((a)=>a+10)
console.log(newa1)


//displaying
newage.map((a)=>console.log(a))
let filter=age.filter((a)=>a>20)

console.log(filter)


let find=age.find((a)=>a>20)
console.log(find)

//makek an array number and assign
let number=[2,4,6,7,11,15];

//even number print
let a=number.filter((a)=>a%2==0)

console.log(a)
//suppoidata ma/2 and display
let newnumber=number.map((a)=>a/2)
console.log(newnumber)

//Array withobject JSON data
let productlist=[
    {
        id:1,title:"p1",price:22
    },

    {
        id:2,title:"p2",price:11
    },

    {
        id:3,title:"p3",price:42
    }
]


productlist.map((a)=>console.log(a.title))

let aa=productlist.filter((a)=>a.price>20)
aa.map((a)=>console.log(a.title))

