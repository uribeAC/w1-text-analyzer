import { getForbiddenWordsText } from "../index.js";

export const getForbiddenWordsTextTests = (): void => {
  console.log("\n\n➡️  Test: getForbiddenWordsText\n");
  test1();
  test2();
  test3();
  test4();
};

export const test1 = (): void => {
  const text = "hola buenos dias";
  const forbiddenWords: string[] = ["hola", "dias"];
  const expectedForbiddenWordsText = "* buenos *";
  const actualForbiddenWordsText = getForbiddenWordsText(text, forbiddenWords);

  console.log(`Test 1: Text Input: "${text}"
    Forbidden Words Input: "${forbiddenWords}"`);
  console.log(
    `Expected Forbidden Words Text: "${expectedForbiddenWordsText}" | Result: "${actualForbiddenWordsText}"`
  );

  if (actualForbiddenWordsText === expectedForbiddenWordsText) {
    console.log("Test ✅\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test2 = (): void => {
  const text = "HoLa buenos dIAs";
  const forbiddenWords: string[] = ["hola", "dias"];
  const expectedForbiddenWordsText = "* buenos *";
  const actualForbiddenWordsText = getForbiddenWordsText(text, forbiddenWords);

  console.log(`Test 2: Text Input: "${text}"
    Forbidden Words Input: "${forbiddenWords}"`);
  console.log(
    `Expected Forbidden Words Text: "${expectedForbiddenWordsText}" | Result: "${actualForbiddenWordsText}"`
  );

  if (actualForbiddenWordsText === expectedForbiddenWordsText) {
    console.log("Test ✅\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test3 = (): void => {
  const text = "Buenas Noches";
  const forbiddenWords: string[] = ["hola", "dias"];
  const expectedForbiddenWordsText = "Buenas Noches";
  const actualForbiddenWordsText = getForbiddenWordsText(text, forbiddenWords);

  console.log(`Test 3: Text Input: "${text}"
    Forbidden Words Input: "${forbiddenWords}"`);
  console.log(
    `Expected Forbidden Words Text: "${expectedForbiddenWordsText}" | Result: "${actualForbiddenWordsText}"`
  );

  if (actualForbiddenWordsText === expectedForbiddenWordsText) {
    console.log("Test ✅\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test4 = (): void => {
  const text = " ";
  const forbiddenWords: string[] = ["hola", "dias"];
  const expectedForbiddenWordsText = "";
  const actualForbiddenWordsText = getForbiddenWordsText(text, forbiddenWords);

  console.log(`Test 4: Text Input: "${text}"
    Forbidden Words Input: "${forbiddenWords}"`);
  console.log(
    `Expected Forbidden Words Text: "${expectedForbiddenWordsText}" | Result: "${actualForbiddenWordsText}"`
  );

  if (actualForbiddenWordsText === expectedForbiddenWordsText) {
    console.log("Test ✅\n");
  } else {
    console.log("Text ❌\n");
  }
};
