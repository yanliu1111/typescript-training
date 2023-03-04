# 📚 Notebook using Vitejs and TypeScript

This is my first project using vitejs + typescript, some functions and typescript usages are not clear when I coding, so I write my quesitons and answers here. I didn't include all the questions, just some important ones. Check the code for more details.

## 🎯 Create a new project

```bash
npm init vite@latest vite-ts-project -- --template vue-ts
cd vite-ts-project
npm install
npm run dev
```

## 💡 Some learning notes

## 1. getters and setters

Getters and setters are a way of accessing and modifying the private properties of a class in TypeScript. Getters are used to retrieve the value of a private property, while setters are used to modify the value of a private property.

In TypeScript, we can define getters and setters using the 'get' and 'set' keywords respectively, followed by the property name. The 'get' keyword is followed by the getter function definition, while the 'set' keyword is followed by the setter function definition.

For example:

```ts

class MyClass {
private \_myProperty: string;

get myProperty(): string {
return this.\_myProperty;
}

set myProperty(value: string) {
this.\_myProperty = value;
}
}

const myObject = new MyClass();
myObject.myProperty = "Hello World!";
console.log(myObject.myProperty); // Output: "Hello World!"

```

In the example above, we have defined a private property `_myProperty` and two methods `myProperty` and `myProperty=`. The `get myProperty()` method retrieves the value of the private property, while the `set myProperty(value: string)` method sets the value of the private property.

We can then create an object of the `MyClass` class and set the value of the `myProperty` property using the setter method `myProperty=`. We can then retrieve the value of the `myProperty` property using the getter method `myProperty`.

## 2 what does the `{}` at the end of the constructor mean or do?

```ts
constructor(
    private _id: string = "",
    private _item: string = "",
    private _checked: boolean = false
  ) {}
```

The `{}` at the end of a constructor in a class definition is used to denote an empty code block.

In TypeScript or JavaScript, a constructor is a special method that is automatically called when an object is created from a class. The constructor can be used to initialize the class's properties and perform any other setup tasks.

If the constructor does not have any code to execute, it can be defined with an empty code block denoted by `{}`. For example:

```js
class MyClass {
  constructor() {}
}
```

In the example above, the `MyClass` constructor is defined with an empty code block. This means that when an object of `MyClass` is created, no code will be executed in the constructor.

It's worth noting that if the constructor does not contain any properties or setup tasks, it can be omitted altogether.
e.g.:

```kotlin
class MyClass {
    // no constructor needed
}
```

In the example above, the `MyClass` constructor is omitted because it does not contain any properties or setup tasks. When an object of `MyClass` is created, the default constructor will be used instead.
