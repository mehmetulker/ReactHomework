// //1. Adım

// setTimeout(()=>{
//     console.log("Merhaba Ben 5 saniye sonra çalışacağım ")
// },5000)

// //2. Adım
// setInterval(()=>{
//     console.log("Merhaba ben her saniye çalışacağım")
// },1000)

// 3. Adım

// Parametre  göndereceğiz o parameter bir fonksiyon olacak fonksiyon gönderip ilgili fonksiyon içerisinde çalıştıracak
// const sayHi=(cb)=>{
//    cb();
// }

// sayHi(()=>{
//     console.log("Hello Teacher")
// });

//Native fonsksiyon fech herhangi bir veri kaynağına bağlanıyor. Oradan veriyi alıp bize gösteriyor. 

import fetch from "node-fetch";


//  fetch("https://jsonplaceholder.typicode.com/users")
//  .then((data)=>data.json())
//  .then((users)=>console.log(users));

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((data) => data.json())
// .then((users) => {
//   console.log("Users Yüklendi",users)
//         fetch("https://jsonplaceholder.typicode.com/posts/1")
//         .then((data) => data.json())
//         .then((post) => {
//          console.log("Post 1 Yüklendi",post) 
//                   fetch("https://jsonplaceholder.typicode.com/posts/2")
//                   .then((data) => data.json())
//                   .then((post2) => {
//                    console.log("Post 2 Yüklendi",post2)
//               });
//       });
// });


// async function getData() {
//   const users = await( 
//     await fetch("https://jsonplaceholder.typicode.com/users")
//    ).json();

//    const post1 = await( 
//     await fetch("https://jsonplaceholder.typicode.com/posts/1")
//    ).json();

//    const post2 = await( 
//     await fetch("https://jsonplaceholder.typicode.com/posts/2")
//    ).json();



//   console.log("users", users)
//   console.log("post1", post1)
//   console.log("post2", post2)
// }

// getData();

//Anonim fonksiyon

// (async()=>{
//   const users = await( 
//     await fetch("https://jsonplaceholder.typicode.com/users")
//    ).json();

//    const post1 = await( 
//     await fetch("https://jsonplaceholder.typicode.com/posts/1")
//    ).json();

//    const post2 = await( 
//     await fetch("https://jsonplaceholder.typicode.com/posts/2")
//    ).json();



//   console.log("users", users)
//   console.log("post1", post1)
//   console.log("post2", post2)


// })();

//Promises
import axios from "axios";

// (async () => {
//   const { data: users } = await axios("https://jsonplaceholder.typicode.com/users");

//   const { data: post1 } = await axios("https://jsonplaceholder.typicode.com/posts/1");

//   const { data: post2 } = await axios("https://jsonplaceholder.typicode.com/posts/2");

//   console.log("users", users)
//   console.log("post1", post1)
//   console.log("post2", post2)


// })();



// fetch("https://jsonplaceholder.typicode.com/users")  Bize promise dönüyor. 
// .then((data)=>data.json())
// .then((users)=>console.log(users));


// Adım.1
// const getComments = () => {
//   return new Promise((resolve,reject) => {
//    resolve("Gelen data Comments")// String,number, object
//   });
// };


// getComments()
// .then((data)=> console.log(data))
// .catch((e)=>console.log(e))



// // Adım.2
// const getComments = (number) => {
//   return new Promise((resolve, reject) => {
//     if (number == 1) {
//       resolve({ text: "selam" })// String,number, object
//     }
//     reject("Bir Problem oluştu")// String,number, object
//   });
// };


// getComments(2)
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e))


//Adım.2
const getUsers = () => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios("https://jsonplaceholder.typicode.com/users");
    resolve(data)// String,number, object
   // reject("Bir sorun daha oluştu")


  });
};


const getPost = (post_id) => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios("https://jsonplaceholder.typicode.com/posts/" + post_id);
    resolve(data)// String,number, object
    //reject("Bir sorun daha oluştu")


  });
};


// getUsers()
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e))




// getPost(44)
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e))




// Senkron çalışması için 

// (async () => {

//  await getUsers()
//     .then((data) => console.log(data))
//     .catch((e) => console.log(e))

// await getPost(44)
//     .then((data) => console.log(data))
//     .catch((e) => console.log(e))

// })();

// (async () => {

//   try {
    
//   const users =await getUsers(); 
//   const post =await getPost(44);
//   console.log(users);
//   console.log(post);    
//   } catch (e) {

//     console.log(e)
    
//   }
  
//  })();

Promise.all([getUsers(),getPost(1)])
.then(console.log)
.catch(console.log);
