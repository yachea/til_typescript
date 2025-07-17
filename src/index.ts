interface Human {
  name: string;
  age: number;
}

interface contacts {
  phone: string;
  address: string;
}

type HumanContacts = Human & contacts;
// 반드시 모든 속성이 존재해야 한다.
let iu: HumanContacts = {
  address: " 서울",
  age: 20,
  name: "아이유",
  phone: "000-333-3333",
};
