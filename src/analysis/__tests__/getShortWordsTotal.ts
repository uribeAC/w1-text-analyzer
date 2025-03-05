import { getShortWordsTotal } from "../index.js";

export const getShortWordsTotalTests = (): void => {
  test1();
  test2();
  test3();
  test4();
  test5();
  test6();
};

export const test1 = (): void => {
  const text = "Hola";
  const expectedResult = 1;

  console.log(`Input: "${text}"`);
  console.log(`Expected Result: "${expectedResult}"`);

  if (getShortWordsTotal(text) === expectedResult) {
    console.log("Test ✅\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test2 = (): void => {
  const text = "Hola H Buenos Dias, Jacinto";
  const expectedResult = 2;

  console.log(`Input: "${text}"`);
  console.log(`Expected Result: "${expectedResult}"`);

  if (getShortWordsTotal(text) === expectedResult) {
    console.log("Test ✅\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test3 = (): void => {
  const text = "    Hola   Alex Adios";
  const expectedResult = 2;

  console.log(`Input: "${text}"`);
  console.log(`Expected Result: "${expectedResult}"`);

  if (getShortWordsTotal(text) === expectedResult) {
    console.log("Test ✅\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test4 = (): void => {
  const text = `    Hola Adios
     Alex`;
  const expectedResult = 2;

  console.log(`Input: "${text}"`);
  console.log(`Expected Result: "${expectedResult}"`);

  if (getShortWordsTotal(text) === expectedResult) {
    console.log("Test ✅\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test5 = (): void => {
  const text = "";
  const expectedResult = 0;

  console.log(`Input: "${text}"`);
  console.log(`Expected Result: "${expectedResult}"`);

  if (getShortWordsTotal(text) === expectedResult) {
    console.log("Test ✅\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test6 = (): void => {
  const text = " ";
  const expectedResult = 0;

  console.log(`Input: "${text}"`);
  console.log(`Expected Result: "${expectedResult}"`);

  if (getShortWordsTotal(text) === expectedResult) {
    console.log("Test ✅\n");
  } else {
    console.log("Text ❌\n");
  }
};
