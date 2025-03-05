import { getWordsTotal } from "../index.js";

export const getWordsTotalTests = (): void => {
  console.log("\n\n➡️  Test: getWordsTotal\n");
  test1();
  test2();
  test3();
  test4();
  test5();
};
export const test1 = (): void => {
  const text = "Hola buenos dias";
  const expectedWordsTotal = 3;
  const actualWordsTotal = getWordsTotal(text);

  console.log(`Test 1: Input: "${text}"`);
  console.log(
    `Expected Words Total: "${expectedWordsTotal}" | Result: "${actualWordsTotal}"`
  );

  if (actualWordsTotal === expectedWordsTotal) {
    console.log("Test ✅\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test2 = (): void => {
  const text = `Hola buenos
  dias
  `;
  const expectedWordsTotal = 3;
  const actualWordsTotal = getWordsTotal(text);

  console.log(`Test 2: Input: "${text}"`);
  console.log(
    `Expected Words Total: "${expectedWordsTotal}" | Result: "${actualWordsTotal}"`
  );

  if (actualWordsTotal === expectedWordsTotal) {
    console.log("Test ✅\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test3 = (): void => {
  const text = `Hola
    
    Buenos    Dias,     `;
  const expectedWordsTotal = 3;
  const actualWordsTotal = getWordsTotal(text);

  console.log(`Test 3: Input: "${text}"`);
  console.log(
    `Expected Words Total: "${expectedWordsTotal}" | Result: "${actualWordsTotal}"`
  );

  if (actualWordsTotal === expectedWordsTotal) {
    console.log("Test ✅\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test4 = (): void => {
  const text = "";
  const expectedWordsTotal = 0;
  const actualWordsTotal = getWordsTotal(text);

  console.log(`Test 4: Input: "${text}"`);
  console.log(
    `Expected Words Total: "${expectedWordsTotal}" | Result: "${actualWordsTotal}"`
  );

  if (actualWordsTotal === expectedWordsTotal) {
    console.log("Test ✅\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test5 = (): void => {
  const text = " ";
  const expectedWordsTotal = 0;
  const actualWordsTotal = getWordsTotal(text);

  console.log(`Test 5: Input: "${text}"`);
  console.log(
    `Expected Words Total: "${expectedWordsTotal}" | Result: "${actualWordsTotal}"`
  );

  if (actualWordsTotal === expectedWordsTotal) {
    console.log("Test ✅\n");
  } else {
    console.log("Text ❌\n");
  }
};
