import { getCamelCaseText } from "../index.js";

export const getCamelCaseTextTests = (): void => {
  console.log("\n\n➡️  Test: getCamelCaseText\n");
  test1();
  test2();
  test3();
};

export const test1 = (): void => {
  const text = "Hola Buenos Dias";
  const expectedCamelCaseText = "holaBuenosDias";
  const actualCamelCaseText = getCamelCaseText(text);

  console.log(`Test 1: Input: "${text}"`);
  console.log(
    `Expected camelCase Text: "${expectedCamelCaseText}" | Result: "${actualCamelCaseText}"`
  );

  if (actualCamelCaseText === expectedCamelCaseText) {
    console.log("Test ✅\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test2 = (): void => {
  const text = "Hola";
  const expectedCamelCaseText = "hola";
  const actualCamelCaseText = getCamelCaseText(text);

  console.log(`Test 2: Input: "${text}"`);
  console.log(
    `Expected camelCase Text: "${expectedCamelCaseText}" | Result: "${actualCamelCaseText}"`
  );

  if (actualCamelCaseText === expectedCamelCaseText) {
    console.log("Test ✅\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test3 = (): void => {
  const text = `Hola buenos   dias 
  Me llamo ALEX`;
  const expectedCamelCaseText = "holaBuenosDiasMeLlamoAlex";
  const actualCamelCaseText = getCamelCaseText(text);

  console.log(`Test 3: Input: "${text}"`);
  console.log(
    `Expected camelCase Text: "${expectedCamelCaseText}" | Result: "${actualCamelCaseText}"`
  );

  if (actualCamelCaseText === expectedCamelCaseText) {
    console.log("Test ✅\n");
  } else {
    console.log("Text ❌\n");
  }
};
