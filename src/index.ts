let neverVar: never = 100;
let neverVar2: never = true;
let neverVar3: never = undefined;
let neverVar3: never = null;

// 전달시 오류발생
let testNum: number = neverVar;
