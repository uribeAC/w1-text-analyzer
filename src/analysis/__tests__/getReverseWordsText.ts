import exp from "constants";
import { getReverseWordsText } from "../index.js";

export const getReverseWordsTextTests = (): void => {
  console.log("\n\n➡️  Test: getReverseWordsText\n");
  test1();
  test2();
  test3();
  test4();
};

export const test1 = (): void => {
  const text = "Hola Alex";
  const expectedReverseWordsText = "aloH xelA";
  const actualReverseWordsText = getReverseWordsText(text);

  console.log(`Test 1: Input: "${text}"`);
  console.log(
    `Expected Reverse Words Text: "${expectedReverseWordsText}" | Result: "${actualReverseWordsText}"`
  );

  if (actualReverseWordsText === expectedReverseWordsText) {
    console.log("Test ✅\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test2 = (): void => {
  const text = `Hola
  Alex`;
  const expectedReverseWordsText = `aloH
  xelA`;
  const actualReverseWordsText = getReverseWordsText(text);

  console.log(`Test 2: Input: "${text}"`);
  console.log(
    `Expected Reverse Words Text: "${expectedReverseWordsText}" | Result: "${actualReverseWordsText}"`
  );

  if (actualReverseWordsText === expectedReverseWordsText) {
    console.log("Test ✅\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test3 = (): void => {
  const text = `Hola
    Alex
  
  `;
  const expectedReverseWordsText = `aloH
    xelA
  
  `;
  const actualReverseWordsText = getReverseWordsText(text);

  console.log(`Test 3: Input: "${text}"`);
  console.log(
    `Expected Reverse Words Text: "${expectedReverseWordsText}" | Result: "${actualReverseWordsText}"`
  );

  if (actualReverseWordsText === expectedReverseWordsText) {
    console.log("Test ✅\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test4 = (): void => {
  const text = " ";
  const expectedReverseWordsText = "";
  const actualReverseWordsText = getReverseWordsText(text);

  console.log(`Test 4: Input: "${text}"`);
  console.log(
    `Expected Reverse Words Text: "${expectedReverseWordsText}" | Result: "${actualReverseWordsText}"`
  );

  if (actualReverseWordsText === expectedReverseWordsText) {
    console.log("Test ✅\n");
  } else {
    console.log("Text ❌\n");
  }
};
