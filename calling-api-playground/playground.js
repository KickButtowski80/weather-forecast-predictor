// function mulitiplier(factor)  {
//     return function(num) {
//         return num * factor
//     }
// }

// let outerVal = mulitiplier(2)
// console.log(outerVal)


// order pizza sample
// const orderPizza = () => {
//     let pizza;
//     const promise = new Promise((resolve) => {
//         setTimeout(() => {
//             pizza = 'pizza'
//             resolve(pizza)
//         }, 2000)
//     })
//     return promise

// }
// const pizzaReady = (pizza) => {
//     console.log(`Eat the ${pizza}`)
// }

// (async() => {
//     const pizzaStatus = await orderPizza()
//     pizzaReady(pizzaStatus)
// })()
// console.log(`call qoli`)

// callback hell
// function thing1(callback) {
//     console.log('thing 1')
//     callback()
// }
// function thing2(callback) {
//     console.log('thing 2')
//     callback()
// }
// function thing3(callback) {
//     console.log('thing 3')
//     callback()
// }

// function startThing(callback) {
//     return callback
// }

// // startThing(thing3(thing2(thing1())))  

// thing1(() => {
//     thing2(() => {
//         thing3(() => {
//             console.log(`all is done`)
//         }) 
//      })
// })

// console.log('first')

// let promise = new Promise(resolve => {
//     let result
//     setTimeout(() => {
//         result = 'second'
//         resolve(result)
//     }, 0)
//     return result
// })

// promise.then(res => console.res)

// console.log('third')


// const delay = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('pizza')
//         }, 0)
//     })
// }

const delay = new Promise((resolve, reject) => {
    let d; 
    setTimeout(() => {
        d = resolve('pizza')
    }, 0)
    return d;
})
    (async () => {
        const result = await delay()
        console.log(result)
    })()

    //         delay.then((r) => console.log(r))