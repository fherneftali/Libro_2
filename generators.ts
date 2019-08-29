//function* infiniteSquence() {
  //  var i = 0;
    //while(true) {
      //  yield i++;
    //}
//}
//var iterator = infiniteSquence();
//while (true){
  //  console.log(iterator.next());
//}

function* idMaker() {
    let index = 0;
    while (index < 3)
        yield index++;
}
let gen = idMaker();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());