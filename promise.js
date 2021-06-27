function fnPromise(num) {
    return new Promise(function(resolve,reject){
    if (num%2 == 0){
        resolve('number is even')
    }
    else{
        reject('number is odd')
    }
    })
}

fnPromise(45).then(function (message) {
    console.log(message)
}, function (message) {
    console.log(message)
})

async function fn() {
    var response=await fnPromise(41)
    console.log(response)
}
fn()