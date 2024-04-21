class Person {
  public constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }
  public greet(name: string): string {
    return `Hello, ${name}!`;
  }
}
