import { getCharactersTotal } from "../index.js";

export const getCharactersTotalTests = (): void => {
  test1();
  test2();
  test3();
  test4();
  test5();
  test6();
};

export const test1 = (): void => {
  const text = "Hola";
  const expectedResult = 4;

  console.log(`Input: "${text}"`);
  console.log(`Expected Result: "${expectedResult}"`);

  if (getCharactersTotal(text) === expectedResult) {
    console.log("Test 🆗\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test2 = (): void => {
  const text = "Buenos dias !";
  const expectedResult = 11;

  console.log(`Input: "${text}"`);
  console.log(`Expected Result: "${expectedResult}"`);

  if (getCharactersTotal(text) === expectedResult) {
    console.log("Test 🆗\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test3 = (): void => {
  const text = "Buenos\nDias";
  const expectedResult = 10;

  console.log(`Input: "${text}"`);
  console.log(`Expected Result: "${expectedResult}"`);

  if (getCharactersTotal(text) === expectedResult) {
    console.log("Test 🆗\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test4 = (): void => {
  const text = "Buenos   \ndias!";
  const expectedResult = 11;

  console.log(`Input: "${text}"`);
  console.log(`Expected Result: "${expectedResult}"`);

  if (getCharactersTotal(text) === expectedResult) {
    console.log("Test 🆗\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test5 = (): void => {
  const text = "";
  const expectedResult = 0;

  console.log(`Input: "${text}"`);
  console.log(`Expected Result: "${expectedResult}"`);

  if (getCharactersTotal(text) === expectedResult) {
    console.log("Test 🆗\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test6 = (): void => {
  const text = " ";
  const expectedResult = 0;

  console.log(`Input: "${text}"`);
  console.log(`Expected Result: "${expectedResult}"`);

  if (getCharactersTotal(text) === expectedResult) {
    console.log("Test 🆗\n");
  } else {
    console.log("Text ❌\n");
  }
};
