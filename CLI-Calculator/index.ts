import { question } from "readline-sync";

console.log("I am writing TypeScript");
type operator = "+" | "-" | "*" | "/";
function main(): void {
  const firstStr: string = question("Enter the first number: ");
  const operator: string = question("Enter the operator: ");
  const secondStr: string = question("Enter the second number: ");

  const validInput: boolean =
    isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
  console.log(validInput);
  if (validInput) {
    const firstNum: number = parseInt(firstStr);
    const secondNum: number = parseInt(firstStr);
    const result = calculate(firstNum, operator as operator, secondNum);
    console.log(result);

    console.log("isvalid");
  } else {
    console.log("INVALID INPUT");
    main();
  }
}
function calculate(firstNum: number, operator: string, secondNum: number) {
  switch (operator) {
    case "+":
      return firstNum + secondNum;
    case "-":
      return firstNum - secondNum;
    case "*":
      return firstNum * secondNum;
    case "/":
      return firstNum / secondNum;
  }
}
function isOperator(operator: string): boolean {
  switch (operator) {
    case "+":
    case "-":
    case "*":
    case "/":
      return true;
    default:
      return false;
  }
}

function isNumber(str: string): boolean {
  const maybeNum = parseInt(str);
  const isNum: boolean = !isNaN(maybeNum);
  return isNum;
}

main();
