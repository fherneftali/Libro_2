var Generic = /** @class */ (function () {
    function Generic() {
    }
    return Generic;
}());
var myGeneric = new Generic();
console.log(myGeneric.add = function (x, y) { return x + y; });
console.log(myGeneric.add(3, 4));
function echo(arg) {
    console.log(arg.length);
    return arg;
}
var a = echo("aaa");
var t = echo({ length: 2, name: "aa" });
//let b = echo(1);
function copyFields(source, target) {
    for (var id in source) {
        if (target[id] != undefined) {
            source[id] = target[id];
        }
        else {
            target[id] = source[id];
        }
    }
    return target;
}
var a = { a: 1, b: 2, c: 3 };
var b = copyFields(a, { b: 10, c: 20 });
var c = copyFields(a, { Q: 20 });
console.log(b);
console.log(c);
