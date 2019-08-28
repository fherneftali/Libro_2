var promise = new Promise(function (resolve, reject) {
    reject(new Error("Algo malo ha pasasdo"));
});
promise.then(function (res) {
});
promise["catch"](function (err) {
    console.log('Tengo una llamada: ', err.message);
});
