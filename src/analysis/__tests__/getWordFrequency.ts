import { getWordFrequency } from "../index.js";

export const getWordFrequencyTests = (): void => {
  console.log("\n\n➡️  Test: getWordFrequency\n");
  test1();
  test2();
  test3();
  test4();
  test5();
};

export const test1 = (): void => {
  const text = "Hola buenos dias";
  const word = "Hola";
  const expectedWordFrequency = 1;
  const actualWordFrequency = getWordFrequency(text, word);

  console.log(`Test 1: Text Input: "${text}" | Word Input: "${word}"`);
  console.log(
    `Expected Word Frequency: "${expectedWordFrequency}" | Result: "${actualWordFrequency}"`
  );

  if (actualWordFrequency === expectedWordFrequency) {
    console.log("Test ✅\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test2 = (): void => {
  const text = "Hola buenos dias. Buenos dias";
  const word = "Buenos";
  const expectedWordFrequency = 2;
  const actualWordFrequency = getWordFrequency(text, word);

  console.log(`Test 2: Text Input: "${text}" | Word Input: "${word}"`);
  console.log(
    `Expected Word Frequency: "${expectedWordFrequency}" | Result: "${actualWordFrequency}"`
  );

  if (actualWordFrequency === expectedWordFrequency) {
    console.log("Test ✅\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test3 = (): void => {
  const text = "Hola buenos dias";
  const word = "Noches";
  const expectedWordFrequency = 0;
  const actualWordFrequency = getWordFrequency(text, word);

  console.log(`Test 3: Text Input: "${text}" | Word Input: "${word}"`);
  console.log(
    `Expected Word Frequency: "${expectedWordFrequency}" | Result: "${actualWordFrequency}"`
  );

  if (actualWordFrequency === expectedWordFrequency) {
    console.log("Test ✅\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test4 = (): void => {
  const text = "Hola hola hola, hola!";
  const word = "Hola";
  const expectedWordFrequency = 4;
  const actualWordFrequency = getWordFrequency(text, word);

  console.log(`Test 4: Text Input: "${text}" | Word Input: "${word}"`);
  console.log(
    `Expected Word Frequency: "${expectedWordFrequency}" | Result: "${actualWordFrequency}"`
  );

  if (actualWordFrequency === expectedWordFrequency) {
    console.log("Test ✅\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test5 = (): void => {
  const text = "Hola buenos dias";
  const word = " ";
  const expectedWordFrequency = 0;
  const actualWordFrequency = getWordFrequency(text, word);

  console.log(`Test 5: Text Input: "${text}" | Word Input: "${word}"`);
  console.log(
    `Expected Word Frequency: "${expectedWordFrequency}" | Result: "${actualWordFrequency}"`
  );

  if (actualWordFrequency === expectedWordFrequency) {
    console.log("Test ✅\n");
  } else {
    console.log("Text ❌\n");
  }
};
