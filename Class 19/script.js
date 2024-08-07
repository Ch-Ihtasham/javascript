// const promiseOne = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Async task is complete")
//         resolve()
//     }, 1000)
// })


// promiseOne.then(() => {
//     console.log('promise comsumed')
// })
// console.log('hello world')

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('prmoise two')
//         resolve()
//     }, 2000);
// }).then(() => {
//     console.log("promise two consumed")
// })

// const promiseThree = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('promise three')
//         resolve({
//             username: 'ihtasham',
//             mail: 'ihtasham@gamil.com'
//         })
//     }, 1000)
// })
// promiseThree.then((user) => {
//     console.log(user)
// })

// const promiseFour = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = false
//         if (!error) {
//             resolve({
//                 username: 'shami',
//                 class: 10
//             })
//         }
//         else {
//             reject('error:something went wrong')
//         }
//     }, 1000);
// })
// promiseFour.then((users) => {
//     // console.log(users.username)
//     return users.username
// }).then((username) => {
//     console.log(username)
// }).catch((error) => {
//     console.log(error)
// }).finally(() => console.log('the promise can be resolve or rejected'))

// const promiseFive = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const error = true
//         if (!error) {
//             resolve({
//                 name: 'ihtasham',
//                 class: 12
//             })
//         }
//         else {
//             reject('something went wrong in five promise')
//         }
//     }, 1000);
// })
// promiseFive.then(info => console.log(info.name)).catch(error => console.log(error))

// async function consumePromiseFive() {

//     try { 
//         const respone = await promiseFive
//         console.log(respone)

//     } catch (error) {
//         console.log(error)
//     }
// }
// consumePromiseFive()

// async function f() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         let data = await response.json()
//         console.log(data)
//     }
//     catch (error) {
//         console.log('error')
//     }
// }
// f();
// console.log('hello ')

fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
    return response.json()
}).then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error)
})

