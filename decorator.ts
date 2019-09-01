function MethodDecorator (
    target: Object,
    propertyKey: string,
    descriptor: TypedPropertyDescriptor<any>
) {
    console.log("MethodDecorator called on: ", target, propertyKey, descriptor);
}

class MethodDecoratorExample {
    @PropertyDecorator
    method(){
    }
}

MethodDecorator called on: { method: [Function] } method { value: [Function], 
    writable: true,
    enumerable: true,
    configurable: true
}