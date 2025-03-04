import { getParagraphsTotal } from "../index.js";

export const test1 = (): void => {
  const paragraph = "Hola buenos dias me llamo Alex";
  const expectedResult = 1;

  console.log(`Input: "${paragraph}"`);
  console.log(`Expected Result: "${expectedResult}"`);

  if (getParagraphsTotal(paragraph) === expectedResult) {
    console.log("Test 🆗\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test2 = (): void => {
  const paragraph = `Hola buenos dias me llamo Alex.
  Encantado de venir`;
  const expectedResult = 1;

  console.log(`Input: "${paragraph}"`);
  console.log(`Expected Result: "${expectedResult}"`);

  if (getParagraphsTotal(paragraph) === expectedResult) {
    console.log("Test 🆗\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test3 = (): void => {
  const paragraph = `Hola buenos dias me llamo Alex.
       
      Encantado de venir`;
  const expectedResult = 2;

  console.log(`Input: "${paragraph}"`);
  console.log(`Expected Result: "${expectedResult}"`);

  if (getParagraphsTotal(paragraph) === expectedResult) {
    console.log("Test 🆗\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test4 = (): void => {
  const paragraph = "";
  const expectedResult = 0;

  console.log(`Input: "${paragraph}"`);
  console.log(`Expected Result: "${expectedResult}"`);

  if (getParagraphsTotal(paragraph) === expectedResult) {
    console.log("Test 🆗\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test5 = (): void => {
  const paragraph = " ";
  const expectedResult = 0;

  console.log(`Input: "${paragraph}"`);
  console.log(`Expected Result: "${expectedResult}"`);

  if (getParagraphsTotal(paragraph) === expectedResult) {
    console.log("Test 🆗\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test6 = (): void => {
  const paragraph = `
  `;
  const expectedResult = 0;

  console.log(`Input: "${paragraph}"`);
  console.log(`Expected Result: "${expectedResult}"`);

  if (getParagraphsTotal(paragraph) === expectedResult) {
    console.log("Test 🆗\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test7 = (): void => {
  const paragraph = `Hola
  `;
  const expectedResult = 1;

  console.log(`Input: "${paragraph}"`);
  console.log(`Expected Result: "${expectedResult}"`);

  if (getParagraphsTotal(paragraph) === expectedResult) {
    console.log("Test 🆗\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test8 = (): void => {
  const paragraph = `Hola
  
  `;
  const expectedResult = 1;

  console.log(`Input: "${paragraph}"`);
  console.log(`Expected Result: "${expectedResult}"`);

  if (getParagraphsTotal(paragraph) === expectedResult) {
    console.log("Test 🆗\n");
  } else {
    console.log("Text ❌\n");
  }
};
