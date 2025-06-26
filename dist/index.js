const member = { username: "뷔", age: 30, group: "BTS" };
// const { username, age, group } = member;

// 사용하지 않은 속성만 모으는 연산자
const { ...rest } = member;
console.log(rest);

const { username, ...who } = member;
console.log(username);
console.log(who);
