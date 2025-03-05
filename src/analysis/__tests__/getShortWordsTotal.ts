import { getShortWordsTotal } from "../index.js";

export const getShortWordsTotalTests = (): void => {
  console.log("\n\n➡️  Test: getShortWordsTotal\n");
  test1();
  test2();
  test3();
  test4();
  test5();
  test6();
};

export const test1 = (): void => {
  const text = "Hola";
  const expectedShortWordsTotal = 1;
  const actualShortWordsTotal = getShortWordsTotal(text);

  console.log(`Test 1: Input: "${text}"`);
  console.log(
    `Expected Short Words Total: "${expectedShortWordsTotal}" | Result: "${actualShortWordsTotal}"`
  );

  if (actualShortWordsTotal === expectedShortWordsTotal) {
    console.log("Test ✅\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test2 = (): void => {
  const text = "Hola H Buenos Dias, Jacinto";
  const expectedShortWordsTotal = 2;
  const actualShortWordsTotal = getShortWordsTotal(text);

  console.log(`Test 2: Input: "${text}"`);
  console.log(
    `Expected Short Words Total: "${expectedShortWordsTotal}" | Result: "${actualShortWordsTotal}"`
  );

  if (actualShortWordsTotal === expectedShortWordsTotal) {
    console.log("Test ✅\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test3 = (): void => {
  const text = "    Hola   Alex Adios";
  const expectedShortWordsTotal = 2;
  const actualShortWordsTotal = getShortWordsTotal(text);

  console.log(`Test 3: Input: "${text}"`);
  console.log(
    `Expected Short Words Total: "${expectedShortWordsTotal}" | Result: "${actualShortWordsTotal}"`
  );

  if (actualShortWordsTotal === expectedShortWordsTotal) {
    console.log("Test ✅\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test4 = (): void => {
  const text = `    Hola Adios
     Alex`;
  const expectedShortWordsTotal = 2;
  const actualShortWordsTotal = getShortWordsTotal(text);

  console.log(`Test 4: Input: "${text}"`);
  console.log(
    `Expected Short Words Total: "${expectedShortWordsTotal}" | Result: "${actualShortWordsTotal}"`
  );

  if (actualShortWordsTotal === expectedShortWordsTotal) {
    console.log("Test ✅\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test5 = (): void => {
  const text = "";
  const expectedShortWordsTotal = 0;
  const actualShortWordsTotal = getShortWordsTotal(text);

  console.log(`Test 5: Input: "${text}"`);
  console.log(
    `Expected Short Words Total: "${expectedShortWordsTotal}" | Result: "${actualShortWordsTotal}"`
  );

  if (actualShortWordsTotal === expectedShortWordsTotal) {
    console.log("Test ✅\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test6 = (): void => {
  const text = " ";
  const expectedShortWordsTotal = 0;
  const actualShortWordsTotal = getShortWordsTotal(text);

  console.log(`Test 6: Input: "${text}"`);
  console.log(
    `Expected Short Words Total: "${expectedShortWordsTotal}" | Result: "${actualShortWordsTotal}"`
  );

  if (actualShortWordsTotal === expectedShortWordsTotal) {
    console.log("Test ✅\n");
  } else {
    console.log("Text ❌\n");
  }
};
