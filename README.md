# ts 심화 - 클래스 정의하기

- `new` 해서 새로운 `인스턴스 변수 타입 정의`

```ts
// 클래스 만들기
class SampleClass {}
// 클래스로 인스턴스 변수 만들기(타입추론 잘됨)
const ins = new SampleClass();
// 클래스는 속성과 메서드 존재함.
class Game {
  name: string;
  country: string;
  download: number;
}
/**
 * name: string;
  country: string;
  download: number;
 */
const game = new Game();
// 사용자가 직접 값을 담아줌.
game.name = "포트리스";
game.country = "한국";
game.download = 100;
```

- constructor

```ts
// 클래스 만들기
class SampleClass {}
// 클래스로 인스턴스 변수 만들기(타입추론 잘됨)
const ins = new SampleClass();
// 클래스는 속성과 메서드 존재함.
class Game {
  name: string;
  country: string;
  download: number;
  // new 붙여서 실행하면 인스턴스 생성자
  constructor(name: string, country: string, download: number) {
    this.name = name;
    this.country = country;
    this.download = download;
  }
}
/**
 * name: string;
  country: string;
  download: number;
 */
const game = new Game("포트리스", "한국", 100);
```

```ts
// 클래스 만들기
class SampleClass {}
// 클래스로 인스턴스 변수 만들기(타입추론 잘됨)
const ins = new SampleClass();
// 클래스는 속성과 메서드 존재함.
class Game {
  // 속성
  name: string;
  country: string;
  download: number;
  // new 붙여서 실행하면 인스턴스 생성자
  constructor(name: string, country: string, download: number) {
    this.name = name;
    this.country = country;
    this.download = download;
  }
  // 메서드
  introduce() {
    return `${this.name} 게임은 ${this.country}에서 개발, ${this.download} 인기가 있습니다.`;
  }
}
/**
 * name: string;
  country: string;
  download: number;
  introduce(): void
 */
const game = new Game("포트리스", "한국", 100);
console.log(game.name);
console.log(game.country);
console.log(game.download);
```

## 클래스 요소 `readonly` 적용하기

- 읽기전용 속성 생성시
- 초기화 이후 업데이트 불가

```ts
// 클래스 만들기
class SampleClass {}
// 클래스로 인스턴스 변수 만들기(타입추론 잘됨)
const ins = new SampleClass();
// 클래스는 속성과 메서드 존재함.
class Game {
  // 속성
  readonly name: string;
  readonly country: string;
  readonly download: number;
  // new 붙여서 실행하면 인스턴스 생성자
  constructor(name: string, country: string, download: number) {
    this.name = name;
    this.country = country;
    this.download = download;
  }
  // 메서드
  introduce() {
    return `${this.name} 게임은 ${this.country}에서 개발, ${this.download} 인기가 있습니다.`;
  }
}
/**
 *readonly name: string;
  readonly country: string;
  readonly download: number;
  introduce(): void
 */
const game = new Game("포트리스", "한국", 100);
console.log(game.name); // 읽을 수 있다.
console.log(game.country); // 읽을 수 있다.
console.log(game.download); // 읽을 수 있다.
game.name = "김길동"; // 값의 변경 불가
```

## 클래스 속성의 `초기값 셋팅`

```ts
class Person {
  // 필수값이다.
  name: string;
  // 직접 초기화 설정
  age: number = 29;
  // 속성이 있을 수도 있고 없을 수도 있다.
  pet?: string;
  // 속성에 추기값이 없을리가 없어.
  // 초기값은 무조건 셋팅할게.
  dog!: string;

  // new 하면 실행되는 인스턴스 생성자
  constructor(name: string) {
    this.name = name;
    // 초기값 무조건 있다면 보장해줌
    this.initalize();
  }
  initalize() {
    this.dog = "멍멍이";
  }
}
// 타입추론이 성공적이다.
/**
 * {
 * name: "아이유"
 * age: 29
 * pet: undefined
 * dog: "멍멍이"
 * }
 */
const p = new Person("아이유");
```

## 클래스는 타입도 가능, 값도 가능

```ts
class Dog {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  // 메서드 정의
  bark() {
    return `${this.name}이 이름입니다.`;
  }
}

let d = new Dog("멍멍이");
console.log(d.name);
d.bark();
// 코드 중에 값을 변경하겠다.
// d = "고양이"; // Error 타입오류 발생
// 아래는 가능합니다.
d = { name: "고양이", bark: () => "고양이 야옹~" };
```

## Interface 활용

- 일반적으로 js 에는 없는 문법
- 오로지 ts 에서만 가능(C++, C#, Java 가능...)

```ts
// interface : 클래스에서는 약속을 지켜라.
interface Animal {
  name: string;
  age: number;
  jamp(): string;
}

class Dog implements Animal {
  name: string;
  age: number;
  constructor() {}
  jamp() {
    return `${this.name}이 ${this.age}살 입니다.`;
  }
}
```

- 추가도 가능하다.

```ts
// interface : 클래스에서는 약속을 지켜라.
interface Animal {
  name: string;
  age: number;
  jamp(): string;
}

class Dog implements Animal {
  name: string;
  age: number;
  // 추가도 가능하다.
  breez: string;
  constructor(name: string, age: number, breez: string) {
    this.name = name;
    this.age = age;
    this.breez = breez;
  }
  jamp() {
    return `${this.name}이 ${this.age}살 입니다.`;
  }
  // 추가한다.
  dance() {}
}

const d = new Dog("댕댕이", 10, "발발이");
```

## Class 타입 추론

```ts
// interface : 클래스에서는 약속을 지켜라.
interface Animal {
  name: string;
  age: number;
  jamp(): string;
}

class Dog implements Animal {
  name: string;
  age: number;
  // 추가도 가능하다.
  breez: string;
  constructor(name: string, age: number, breez: string) {
    this.name = name;
    this.age = age;
    this.breez = breez;
  }
  jamp() {
    return `${this.name}이 ${this.age}살 입니다.`;
  }
  // 추가한다.
  dance() {}
}

const d = new Dog("댕댕이", 10, "발발이");

// 타입을 체크해주는 함수 만들기.
const ori: any = new Dog("오리", 5, "청둥오리");
// 타입을 체크해서 맞다면 실행하자.
function instanceOfDog(who: any): who is Dog {
  return "dance" in who;
}
if (ori) {
  ori; // const ori: any
}

if (instanceOfDog(ori)) {
  ori; // const ori: Dog
  // 타입 좁히기, Narrowing
  ori.dance();
}
function instanceOfAnimal(who: any): who is Animal {
  return "jump" in who;
}
if (instanceOfAnimal(ori)) {
  ori; // const ori: Animal
  // 타입좁히기, Narrowing
  ori.jamp();
}
```

## interface 여러개를 활용한 타입추론

```ts
interface Pet {
  legs: number;
  bark(): void;
}
interface Animal {
  name: string;
  age: number;
}
class Cat implements Pet, Animal {
  name: string;
  age: number;
  legs: number;
  constructor(name: string, age: number, legs: number) {
    this.age = age;
    this.name = name;
    this.legs = legs;
  }
  bark(): void {}
}

type AnimalPet = Animal & Pet;
const d: AnimalPet = {
  age: 20,
  legs: 4,
  name: "댕댕이",
  bark() {
    console.log("안녕");
  },
};
class Cat2 implements AnimalPet {
  name: string;
  age: number;
  legs: number;
  constructor(name: string, age: number, legs: number) {
    this.age = age;
    this.name = name;
    this.legs = legs;
  }
  bark(): void {}
}
```
