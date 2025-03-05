import { getWordsTotal } from "../index.js";

export const getWorldsTotalTests = (): void => {
  test1();
  test2();
  test3();
  test4();
  test5();
};
export const test1 = (): void => {
  const text = "Hola buenos dias";
  const expectedResult = 3;

  console.log(`Input: "${text}"`);
  console.log(`Expected Result: "${expectedResult}"`);

  if (getWordsTotal(text) === expectedResult) {
    console.log("Test 🆗\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test2 = (): void => {
  const text = `Hola buenos
  dias
  `;
  const expectedResult = 3;

  console.log(`Input: "${text}"`);
  console.log(`Expected Result: "${expectedResult}"`);

  if (getWordsTotal(text) === expectedResult) {
    console.log("Test 🆗\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test3 = (): void => {
  const text = `Hola
    
    Buenos    Dias,     `;
  const expectedResult = 3;

  console.log(`Input: "${text}"`);
  console.log(`Expected Result: "${expectedResult}"`);

  if (getWordsTotal(text) === expectedResult) {
    console.log("Test 🆗\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test4 = (): void => {
  const text = "";
  const expectedResult = 0;

  console.log(`Input: "${text}"`);
  console.log(`Expected Result: "${expectedResult}"`);

  if (getWordsTotal(text) === expectedResult) {
    console.log("Test 🆗\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test5 = (): void => {
  const text = " ";
  const expectedResult = 0;

  console.log(`Input: "${text}"`);
  console.log(`Expected Result: "${expectedResult}"`);

  if (getWordsTotal(text) === expectedResult) {
    console.log("Test 🆗\n");
  } else {
    console.log("Text ❌\n");
  }
};
