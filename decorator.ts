function StaticMethodDecorator (
    target: Function,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<any>
) {
    console.log("MethodDecorator called on: ", target, propertyKey, descriptor);
}

class StaticMethodDecoratorExample {
    @StaticMethodDecorator
    static staticMethod(){
    }
}

MethodDecorator called on: Function StaticMethodDecoratorExample()
}