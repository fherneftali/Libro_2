const promise = new Promise((resolve, reject) => {
    reject(new Error("Algo malo ha pasasdo"));
});
promise.then((res) => {
    
});
promise.catch((err) => {
    console.log('Tengo una llamada: ', err.message);
})