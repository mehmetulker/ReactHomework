/**
 push
 map
 find
 filter
 some
 every
 includes 
 
 */

// Arraya yeni elaman ekleriz
const user=[{
  name:"Mehmet",
  age:25
},{
  name:"Mustafa",
  age:20
},{
  name:"Talat",
  age:22
},{
  name:"Kerem",
  age:12
},{
  name:"Mehmet",
  age:24
}
]
 const users=["Mehmet","Ahmet","Murat"]
 users.push("Turan")
 users.push("Fatma")
 console.log(users)

// map Array içinde tek tek array dönüyor. 

for (let index = 0; index < users.length; index++) {
     console.log(users[index])
}
console.log("------------------------------------")
console.log("----------------map-----------------")
// Bunun içine bir callbak fonksiyonu geçiyorum
users.map((item)=>{

  console.log(item)

})
console.log("------------------------------------")
console.log("----------------map-----------------")

user.map((item)=>{

  console.log(item.name)

})

//find Bulduğu ilk kaydı getirir
console.log("-------------------------------------")
console.log("----------------find-----------------")

const result=user.find((user)=>user.name=="Mehmet" && user.age>20)

console.log(result) 
console.log("--------------------------------------")
console.log("----------------filter-----------------")

const result1=user.filter((user)=>user.name=="Mehmet" && user.age>20)
console.log(result1) 

console.log("------------------------------------")
console.log("----------------Some----------------")

//Some  belirtilen değer varsa ture döner 

const result2=user.some((user)=>user.age===11)
console.log(result2) 

console.log("------------------------------------")
console.log("----------------Evrey----------------")

//Every array tüm elemenalarının şarta uymasın bekliyor. 


const result3=user.every((user)=>user.age>22)
console.log(result3) 


console.log("------------------------------------")
console.log("----------------Includes----------------")

//Array içinde var olan ögenin olup olmadığını kontrol ediyor.
const meyveler=["elma","armut","muz"]
const isIncluded=meyveler.includes("muz")
console.log(isIncluded)

