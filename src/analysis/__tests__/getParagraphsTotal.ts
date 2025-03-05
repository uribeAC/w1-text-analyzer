import { getParagraphsTotal } from "../index.js";

export const getParagraphsTotalTests = (): void => {
  console.log("\n\n➡️  Test: getParagraphsTotal\n");
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
  const expectedParagraphsTotal = 1;
  const actualParagraphsTotal = getParagraphsTotal(paragraphs);

  console.log(`Test 1: Input: "${paragraphs}"`);
  console.log(
    `Expected Paragraphs Total: "${expectedParagraphsTotal}" | Result: "${actualParagraphsTotal}"`
  );

  if (actualParagraphsTotal === expectedParagraphsTotal) {
    console.log("Test ✅\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test2 = (): void => {
  const paragraphs = `Hola buenos dias me llamo Alex.
  Encantado de venir`;
  const expectedParagraphsTotal = 1;
  const actualParagraphsTotal = getParagraphsTotal(paragraphs);

  console.log(`Test 2: Input: "${paragraphs}"`);
  console.log(
    `Expected Paragraphs Total: "${expectedParagraphsTotal}" | Result: "${actualParagraphsTotal}"`
  );

  if (actualParagraphsTotal === expectedParagraphsTotal) {
    console.log("Test ✅\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test3 = (): void => {
  const paragraphs = `Hola buenos dias me llamo Alex.
       
      Encantado de venir`;
  const expectedParagraphsTotal = 2;
  const actualParagraphsTotal = getParagraphsTotal(paragraphs);

  console.log(`Test 3: Input: "${paragraphs}"`);
  console.log(
    `Expected Paragraphs Total: "${expectedParagraphsTotal}" | Result: "${actualParagraphsTotal}"`
  );

  if (actualParagraphsTotal === expectedParagraphsTotal) {
    console.log("Test ✅\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test4 = (): void => {
  const paragraphs = "";
  const expectedParagraphsTotal = 0;
  const actualParagraphsTotal = getParagraphsTotal(paragraphs);

  console.log(`Test 4: Input: "${paragraphs}"`);
  console.log(
    `Expected Paragraphs Total: "${expectedParagraphsTotal}" | Result: "${actualParagraphsTotal}"`
  );

  if (actualParagraphsTotal === expectedParagraphsTotal) {
    console.log("Test ✅\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test5 = (): void => {
  const paragraphs = " ";
  const expectedParagraphsTotal = 0;
  const actualParagraphsTotal = getParagraphsTotal(paragraphs);

  console.log(`Test 5: Input: "${paragraphs}"`);
  console.log(
    `Expected Paragraphs Total: "${expectedParagraphsTotal}" | Result: "${actualParagraphsTotal}"`
  );

  if (actualParagraphsTotal === expectedParagraphsTotal) {
    console.log("Test ✅\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test6 = (): void => {
  const paragraphs = `
  `;
  const expectedParagraphsTotal = 0;
  const actualParagraphsTotal = getParagraphsTotal(paragraphs);

  console.log(`Test 6: Input: "${paragraphs}"`);
  console.log(
    `Expected Paragraphs Total: "${expectedParagraphsTotal}" | Result: "${actualParagraphsTotal}"`
  );

  if (actualParagraphsTotal === expectedParagraphsTotal) {
    console.log("Test ✅\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test7 = (): void => {
  const paragraphs = `Hola
  `;
  const expectedParagraphsTotal = 1;
  const actualParagraphsTotal = getParagraphsTotal(paragraphs);

  console.log(`Test 7: Input: "${paragraphs}"`);
  console.log(
    `Expected Paragraphs Total: "${expectedParagraphsTotal}" | Result: "${actualParagraphsTotal}"`
  );

  if (actualParagraphsTotal === expectedParagraphsTotal) {
    console.log("Test ✅\n");
  } else {
    console.log("Text ❌\n");
  }
};

export const test8 = (): void => {
  const paragraphs = `Hola
  
  `;
  const expectedParagraphsTotal = 1;
  const actualParagraphsTotal = getParagraphsTotal(paragraphs);

  console.log(`Test 8: Input: "${paragraphs}"`);
  console.log(
    `Expected Paragraphs Total: "${expectedParagraphsTotal}" | Result: "${actualParagraphsTotal}"`
  );

  if (actualParagraphsTotal === expectedParagraphsTotal) {
    console.log("Test ✅\n");
  } else {
    console.log("Text ❌\n");
  }
};
