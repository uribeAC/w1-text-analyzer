const trimmedLineFeedText = (text: string): string => {
  return text.replaceAll("\n", " ");
};

const filteredTexts = (texts: string[]): string[] => {
  return texts.filter((word) => word !== " " && word !== "\n" && word !== "");
};

export const getParagraphsTotal = (text: string): number => {
  const trimmedParagraph = text.replaceAll(" ", "");

  const paragraphs = trimmedParagraph.split("\n\n");

  const filteredParagraphs = filteredTexts(paragraphs);
  return filteredParagraphs.length;
};

export const getWordsTotal = (text: string): number => {
  const trimmedWords = trimmedLineFeedText(text);

  const words = trimmedWords.split(" ");

  const filteredWords = filteredTexts(words);

  return filteredWords.length;
};

export const getCharactersTotal = (text: string): number => {
  const characters = text.split("");

  const filteredCharacters = filteredTexts(characters);

  return filteredCharacters.length;
};

const shortWordMaxLength = 4;

export const getShortWords = (
  text: string,
  maxLength = shortWordMaxLength
): string[] => {
  const trimmedWords = trimmedLineFeedText(text);

  const words = trimmedWords.split(" ");

  const filteredWords = filteredTexts(words);

  const shortWords = filteredWords.filter((word) => word.length <= maxLength);

  return shortWords;
};

export const getShortWordsTotal = (
  text: string,
  maxLength = shortWordMaxLength
): number => {
  const shortWords = getShortWords(text, maxLength);

  return shortWords.length;
};

export const getWordsList = (words: string[]): string => {
  const trimmedWords = filteredTexts(words);
  const wordsList = trimmedWords.join(", ");
  return wordsList;
};

export const getWordFrequency = (text: string, word: string): number => {
  const lowerCaseText = text.toLowerCase();
  const lowerCaseWord = word.toLowerCase();

  const trimmedWords = trimmedLineFeedText(lowerCaseText);

  const textWords = trimmedWords.split(" ");

  const filteredWords = textWords.filter(
    (textWord) =>
      textWord.includes(lowerCaseWord) && textWord.length <= word.length + 1
  );

  return filteredWords.length;
};

export const getReverseWordsText = (text: string): string => {
  if (text.replaceAll(" ", "") === "") {
    return "";
  }

  const paragraphs = text.split("\n");

  const paragraphsWords = paragraphs.map((paragraph) => {
    const words = paragraph.split(" ");

    const reversedWords = words.map((word) =>
      word.split("").reverse().join("")
    );

    const reversedText = reversedWords.join(" ");

    return reversedText;
  });

  const joinedParagraphs = paragraphsWords.join("\n");

  return joinedParagraphs;
};

export const getForbiddenWordsText = (
  text: string,
  forbiddenWords: string[]
): string => {
  if (text.replaceAll(" ", "") === "") {
    return "";
  }

  const lowerCaseForbiddenWords = forbiddenWords.map((word) =>
    word.toLowerCase()
  );

  const words = trimmedLineFeedText(text).split(" ");

  const asteriskText: string[] = words.map((word) => {
    if (
      lowerCaseForbiddenWords.some(
        (forbiddenWord) => forbiddenWord === word.toLowerCase()
      )
    ) {
      const asteriskWord = "*";
      return asteriskWord;
    } else {
      return word;
    }
  });

  return asteriskText.join(" ");
};

export const getCamelCaseText = (text: string): string => {
  if (text.replaceAll(" ", "") === "") {
    return "";
  }

  const words = trimmedLineFeedText(text).split(" ");
  const filteredWords = words.filter((word) => word !== " ");

  const firstWord = filteredWords[0].toLowerCase();
  const upperCaseWords = filteredWords
    .splice(1)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());

  const joinedUpperCaseWords = upperCaseWords.join("");

  return firstWord + joinedUpperCaseWords;
};
