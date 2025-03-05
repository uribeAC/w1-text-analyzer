import { getShortWordsList } from "../index.js";

export const getShortWordsListTests = (): void => {
  console.log("\n\n➡️  Test: getShortWordsList\n");
  test1();
  test2();
  test3();
  test4();
};

export const test1 = (): void => {
  const text: string[] = ["Hola"];
  const expectedShortWordsList = "Hola";
  const actualShortWordsList = getShortWordsList(text);

  console.log(`Test 1: Input: [${text}]`);
  console.log(
    `Expected Short Words List: "${expectedShortWordsList}" | Result: "${actualShortWordsList}"`
  );

  if (actualShortWordsList === expectedShortWordsList) {
    console.log("Test ✅\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test2 = (): void => {
  const text: string[] = ["Hola", "Adios", "Bonjourno"];
  const expectedShortWordsList = "Hola, Adios, Bonjourno";
  const actualShortWordsList = getShortWordsList(text);

  console.log(`Test 2: Input: [${text}]`);
  console.log(
    `Expected Short Words List: "${expectedShortWordsList}" | Result: "${actualShortWordsList}"`
  );

  if (actualShortWordsList === expectedShortWordsList) {
    console.log("Test ✅\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test3 = (): void => {
  const text: string[] = [];
  const expectedShortWordsList = "";
  const actualShortWordsList = getShortWordsList(text);

  console.log(`Test 3: Input: [${text}]`);
  console.log(
    `Expected Short Words List: "${expectedShortWordsList}" | Result: "${actualShortWordsList}"`
  );

  if (actualShortWordsList === expectedShortWordsList) {
    console.log("Test ✅\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test4 = (): void => {
  const text: string[] = [""];
  const expectedShortWordsList = "";
  const actualShortWordsList = getShortWordsList(text);

  console.log(`Test 4: Input: [${text}]`);
  console.log(
    `Expected Short Words List: "${expectedShortWordsList}" | Result: "${actualShortWordsList}"`
  );

  if (actualShortWordsList === expectedShortWordsList) {
    console.log("Test ✅\n");
  } else {
    console.log("Text ❌\n");
  }
};
