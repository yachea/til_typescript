interface 약속 {
  name: string;
}
class Person implements 약속 {
  name: string;
}

type 약속타입 = {
  name: string;
};
class Dog implements 약속타입 {
  name: string;
}
