import { getParagraphsTotal } from "../index.js";

export const getParagraphsTotalTests = (): void => {
  test1();
  test2();
  test3();
  test4();
  test5();
  test6();
  test7();
  test8();
};

export const test1 = (): void => {
  const paragraphs = "Hola buenos dias me llamo Alex";
  const expectedResult = 1;

  console.log(`Input: "${paragraphs}"`);
  console.log(`Expected Result: "${expectedResult}"`);

  if (getParagraphsTotal(paragraphs) === expectedResult) {
    console.log("Test 🆗\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test2 = (): void => {
  const paragraphs = `Hola buenos dias me llamo Alex.
  Encantado de venir`;
  const expectedResult = 1;

  console.log(`Input: "${paragraphs}"`);
  console.log(`Expected Result: "${expectedResult}"`);

  if (getParagraphsTotal(paragraphs) === expectedResult) {
    console.log("Test 🆗\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test3 = (): void => {
  const paragraphs = `Hola buenos dias me llamo Alex.
       
      Encantado de venir`;
  const expectedResult = 2;

  console.log(`Input: "${paragraphs}"`);
  console.log(`Expected Result: "${expectedResult}"`);

  if (getParagraphsTotal(paragraphs) === expectedResult) {
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

  if (getParagraphsTotal(paragraphs) === expectedResult) {
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

  if (getParagraphsTotal(paragraphs) === expectedResult) {
    console.log("Test 🆗\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test6 = (): void => {
  const paragraphs = `
  `;
  const expectedResult = 0;

  console.log(`Input: "${paragraphs}"`);
  console.log(`Expected Result: "${expectedResult}"`);

  if (getParagraphsTotal(paragraphs) === expectedResult) {
    console.log("Test 🆗\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test7 = (): void => {
  const paragraphs = `Hola
  `;
  const expectedResult = 1;

  console.log(`Input: "${paragraphs}"`);
  console.log(`Expected Result: "${expectedResult}"`);

  if (getParagraphsTotal(paragraphs) === expectedResult) {
    console.log("Test 🆗\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test8 = (): void => {
  const paragraphs = `Hola
  
  `;
  const expectedResult = 1;

  console.log(`Input: "${paragraphs}"`);
  console.log(`Expected Result: "${expectedResult}"`);

  if (getParagraphsTotal(paragraphs) === expectedResult) {
    console.log("Test 🆗\n");
  } else {
    console.log("Text ❌\n");
  }
};
