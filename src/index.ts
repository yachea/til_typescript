let numA: number = 5;
let numB: number = 8;

const resultPlus: number = numA + numB;
const resultMinus: number = numA - numB;
const resultDevide: number = numA / numB;
const resultNulti: number = numA * numB;

/**
 * 사칙연산 함수
 * - 숫자 2개를 입력하시면 결과가 나옵니다.
 * - 기호는 4가지(+,-,*,/)를 사용하실 수 있습니다.
 *
 * 사용예시
 * ```javascript
 * const result = calc(5, 4, "+");
 * ```
 * @param {number} a
 * @param {number} b
 * @param {string} sign
 * @returns {number}
 */

function calc(a: number, b: number, sign: string): number {
  let result;

  switch (sign) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "/":
      // result = (b !-- 0 && a !== 0) ? a / b : 0; 제 3항으로도 해봄
      if (a === 0) {
        console.log("a 는 절대로 0이면 안됩니다.");
        result = 0;
      } else if (b === 0) {
        console.log("b 는 절대로 0이면 안됩니다.");
        result = 0;
      } else {
        result = a / b;
      }

      result = a / b;
      break;
    case "*":
      result = a * b;
      break;
  }
  return result;
}

const result: number = calc(7, 10, "*");
