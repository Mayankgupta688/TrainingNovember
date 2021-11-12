var myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("This is Random Data for failure....")
    }, 5000)
})

myPromise.then((data) => {
    console.log(data);
}, (failure) => {
    console.log(failure)
})

myPromise.then((data) => {
    console.log(data);
})

console.log("Some Output");