class Base {
    log = () => { console.log('hello world'); }
}
class Child extends Base {
    logWold() { this.log() };
}