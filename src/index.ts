type MemberType = {
  username: string;
  age: number;
  group: string;
};

const member: MemberType = { username: "뷔", age: 30, group: "BTS" };
// const { username, age, group } = member;

const { ...rest }: MemberType = member;
console.log(rest);

const { username, ...who }: MemberType = member;
console.log(username);
console.log(who);
