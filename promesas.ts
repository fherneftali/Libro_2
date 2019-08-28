 function iReturnPromiseAfter1Second():Promise<string> {
     return new Promise((resolve)=>{
         setTimeout(()=>resolve("Hello World!"),1000);
     });
 }
 Promise.resolve(123)
    .then((res) => {
        return iReturnPromiseAfter1Second();
    })
    .then((res) => {
        console.log(res);
    });