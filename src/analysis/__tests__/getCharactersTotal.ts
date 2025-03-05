import { getCharactersTotal } from "../index.js";

export const getCharactersTotalTests = (): void => {
  console.log("\n\n➡️  Test: getCharactersTotal\n");
  test1();
  test2();
  test3();
  test4();
  test5();
  test6();
};

export const test1 = (): void => {
  const text = "Hola";
  const expectedCharactersTotal = 4;
  const actualCharactersTotal = getCharactersTotal(text);

  console.log(`Test 1: Input: "${text}"`);
  console.log(
    `Expected Characters Total: "${expectedCharactersTotal}" | Result: "${actualCharactersTotal}"`
  );

  if (actualCharactersTotal === expectedCharactersTotal) {
    console.log("Test ✅\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test2 = (): void => {
  const text = "Buenos dias !";
  const expectedCharactersTotal = 11;
  const actualCharactersTotal = getCharactersTotal(text);

  console.log(`Test 2: Input: "${text}"`);
  console.log(
    `Expected Characters Total: "${expectedCharactersTotal}" | Result: "${actualCharactersTotal}"`
  );

  if (actualCharactersTotal === expectedCharactersTotal) {
    console.log("Test ✅\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test3 = (): void => {
  const text = "Buenos\nDias";
  const expectedCharactersTotal = 10;
  const actualCharactersTotal = getCharactersTotal(text);

  console.log(`Test 3: Input: "${text}"`);
  console.log(
    `Expected Characters Total: "${expectedCharactersTotal}" | Result: "${actualCharactersTotal}"`
  );

  if (actualCharactersTotal === expectedCharactersTotal) {
    console.log("Test ✅\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test4 = (): void => {
  const text = "Buenos   \ndias!";
  const expectedCharactersTotal = 11;
  const actualCharactersTotal = getCharactersTotal(text);

  console.log(`Test 4: Input: "${text}"`);
  console.log(
    `Expected Characters Total: "${expectedCharactersTotal}" | Result: "${actualCharactersTotal}"`
  );

  if (actualCharactersTotal === expectedCharactersTotal) {
    console.log("Test ✅\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test5 = (): void => {
  const text = "";
  const expectedCharactersTotal = 0;
  const actualCharactersTotal = getCharactersTotal(text);

  console.log(`Test 5: Input: "${text}"`);
  console.log(
    `Expected Characters Total: "${expectedCharactersTotal}" | Result: "${actualCharactersTotal}"`
  );

  if (actualCharactersTotal === expectedCharactersTotal) {
    console.log("Test ✅\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test6 = (): void => {
  const text = " ";
  const expectedCharactersTotal = 0;
  const actualCharactersTotal = getCharactersTotal(text);

  console.log(`Test 6: Input: "${text}"`);
  console.log(
    `Expected Characters Total: "${expectedCharactersTotal}" | Result: "${actualCharactersTotal}"`
  );

  if (actualCharactersTotal === expectedCharactersTotal) {
    console.log("Test ✅\n");
  } else {
    console.log("Text ❌\n");
  }
};
