import { getWordsTotal } from "../index.js";

export const getWorldsTotalTests = (): void => {
  test1();
  test2();
  test3();
  test4();
  test5();
};
export const test1 = (): void => {
  const paragraphs = "Hola buenos dias";
  const expectedResult = 3;

  console.log(`Input: "${paragraphs}"`);
  console.log(`Expected Result: "${expectedResult}"`);

  if (getWordsTotal(paragraphs) === expectedResult) {
    console.log("Test 🆗\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test2 = (): void => {
  const paragraphs = `Hola buenos
  dias
  `;
  const expectedResult = 3;

  console.log(`Input: "${paragraphs}"`);
  console.log(`Expected Result: "${expectedResult}"`);

  if (getWordsTotal(paragraphs) === expectedResult) {
    console.log("Test 🆗\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test3 = (): void => {
  const paragraphs = `Hola
    
    Buenos    Dias     `;
  const expectedResult = 3;

  console.log(`Input: "${paragraphs}"`);
  console.log(`Expected Result: "${expectedResult}"`);

  if (getWordsTotal(paragraphs) === expectedResult) {
    console.log("Test 🆗\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test4 = (): void => {
  const paragraphs = "";
  const expectedResult = 0;

  console.log(`Input: "${paragraphs}"`);
  console.log(`Expected Result: "${expectedResult}"`);

  if (getWordsTotal(paragraphs) === expectedResult) {
    console.log("Test 🆗\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test5 = (): void => {
  const paragraphs = " ";
  const expectedResult = 0;

  console.log(`Input: "${paragraphs}"`);
  console.log(`Expected Result: "${expectedResult}"`);

  if (getWordsTotal(paragraphs) === expectedResult) {
    console.log("Test 🆗\n");
  } else {
    console.log("Text ❌\n");
  }
};
