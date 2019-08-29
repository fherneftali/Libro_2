function getFirstName() {
    setTimeout(function(){
        gen.next('fher')
    }, 1000);
}

function getSecondName() {
    setTimeout(function(){
        gen.next('Neft')
    }, 1000)
}

function *sayHello() {
    var a = yield getFirstName();
    var b = yield getSecondName();
    console.log(a, b);
}

var gen = sayHello();
gen.next();