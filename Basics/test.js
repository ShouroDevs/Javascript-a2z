// console.log("Hi")
// let mydate = new Date()
// console.log(mydate.toLocaleTimeString())
// console.log(mydate.toDateString())
// console.log(mydate.getFullYear())
// console.log(mydate.getMonth()+1)


//=============Array===========

// const myarray = [0,1,2,3,4,5,6,7]
// console.log(myarray)
// myarray.push(19)
// console.log(myarray)
// const marvel_heros = ["thor", "Ironman", "spiderman"]
// const dc_heros = ["superman", "flash", "batman"]
// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);


//=============Object============
// const mysym= symbol("key1")

// const obja = {
//     name: "shourove",
//     age: 24,
//     email: "shourove@gmail.com",
//     [mysym] : "Mymy1"

// }
// console.log(obja.name)

// const myobj=new Object()
// console.log(myobj)
// const oj={

// }
// oj.id="123"
// oj.name="sam"
// console.log(oj)

// =====================Map  & loop==========================================

// const map = new Map()
// map.set("dhaka", "bangladesh")
// map.set("delhi", "India")
// map.set ("Kararachi", "Pakisthan")

// console.log(map);

// for (const [key, value] of map) {
//     console.log(`${key} is the capital of ${value}`)
    
// }

// ====================Object & loop ===============

// const myobj= {
//     game1: "tripple stike",
//     game2: "spiderman",
//     game3: "Batman"
// }
// console.log(myobj)


// for (const element of myobj) {
//     console.log(element)          can not be done this way
// }

// forof loop can not  work with object data type, we need forin loop

// for (const key in myobj) {
//     console.log(`The ${key} is ${myobj[key]}`)
    
// }

// notice:
// const arr= ["js","cpp","py"]

// for (const key in arr) {
//    console.log(key)
    
// }

// for (const value of arr) {
//     console.log(value )
    
// }


// ========================foreach loop==========

// const arr= ["js","cpp","py","ruby", "switch"]

// arr.forEach(function(val){
//     console.log(val)
// })
// arr.forEach((val) => {
//     console.log(val)
// })

// function printme(val){
//     console.log(val)
// }
// arr.forEach(printme)

// arr.forEach((val,index,array)=>{
//     console.log(val,index,array)

// })

// arrObj= [
//     {
//         lang:"python",
//         langfile:"py"
//     },
//     {
//         lang:"javascript",
//         langfile:"js"
//     },
//     {
//         lang:"java",
//         langfile:"java"
//     },
// ]
// arrObj.forEach((item) => {
//     console.log(item.lang);
// })

// But But forEach can not return  any  value so we use filter()

arr=[1,2,3,4,5,6,7,8]
// const val= arr.filter((num)=>num>4)
// console.log(val)

// const val= arr.filter((num)=>{
//     return num>4})
// console.log(val)

// const val= arr.map((num)=> num+10)

// console.log(val)

const total= arr.reduce((acc,item)=>acc+item  ,0)
console.log(total)
