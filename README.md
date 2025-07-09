# interface 키워드

- 오로지 `객체` 만을 위한 타입 정의 문법

## 1. 의미

- 객체에 반드시 있어야 하는 속성을 정의함.
- 개발자가 코드 진행 중 실수를 방지해 줌.
- 가독성을 위한 문법

## 2. 작성법

- 무조건 객체 형태를 정의한다.
- 기본형 타입 정의는 못한다.

```ts
interface Person {
  name: string;
  age: number;
}

const iu: Person = {
  name: "아이유",
  age: 28,
};
```

## 3. 인터페이스의 문법

### 3.1. 선택적 속성(Optional Property)

- `속성명?: 종류`

```ts
interface Person {
  name: string;
  age: number;
  // 선택적 속성
  city?: string;
}

const iu: Person = {
  name: "아이유",
  age: 28,
};
```

### 3.2. 읽기전용 속성(Readonly)

- `readonly 속성명: 종류`

```ts
interface Person {
  readonly name: string;
  age: number;
  // 선택적 속성
  city?: string;
}

const iu: Person = {
  name: "아이유",
  age: 28,
};
iu.age = 30;
iu.name = "홍길동"; // 오류(읽기전용이라서)
```

### 3.3. 함수 타입 정의

```ts
const add: (x: number, y: number) => number = (x: number, y: number): number =>
  x + y;
const add2: (x: number, y: number) => number = (x, y) => x + y;

interface Add {
  // 키명               : 리턴종류
  (x: number, y: number): number;
}
const add3: Add = (x, y) => x + y;
```

### 3.4. 클래스에서 활용함.

```ts
// class 로 만들어진 객체는 반드시 속성이 있어야 해!
// 약속을 지켜라를 정의할 때 사용
interface Person {
  name: string;
  hi(): string;
  cr?(): string;
}
class Student implements Person {
  name: string;
  // new 하면 자동으로 실행되어서 {} 를 만듬.
  // 자동 객체 생성자 함수로서 결과물을 instance 라고 함.
  constructor() {}
  hi() {
    return "안녕";
  }
}

const iu: Student = new Student();

class Teacger implements Person {
  name: string;
  hi(): string {
    return "수업합니다.";
  }
}

class singer implements Person {
  name: string;
  hi() {
    return "노래합니다.";
  }
}
```

### 3.5. 클래스 상속에 의한 확장
- 유명한 라이브러리 소스에서 자주 보여 짐.