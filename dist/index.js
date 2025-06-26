class Animal {
  constructor() {
    this.eye = 2;
  }
  cry() {}
  eat() {}
}
class Cat extends Animal {
  constructor() {
    this.종류 = "샴";
    super(); // 안적어도 디폴트로 들어가있음.
  } // 안적어도 디폴트로 들어가있음.
  꾹꾹이() {}
}
new cat();
new Animal();

class Dog extends Animal {
  constructor() {}
  달짖기() {}
}
