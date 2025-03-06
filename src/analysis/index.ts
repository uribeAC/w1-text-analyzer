export const getParagraphsTotal = (text: string): number => {
  const trimmedParagraph = text.replaceAll(" ", "");

  const paragraphs = trimmedParagraph.split("\n\n");

  const filteredParagraphs = paragraphs.filter(
    (paragraph) => paragraph !== "" && paragraph !== "\n"
  );

  return filteredParagraphs.length;
};

export const getWordsTotal = (text: string): number => {
  const trimmedWords = text.replaceAll("\n", " ");

  const words = trimmedWords.split(" ");

  const filteredWords = words.filter((word) => word !== "" && word !== "\n");

  return filteredWords.length;
};

export const getCharactersTotal = (text: string): number => {
  const characters = text.split("");

  const filteredCharacters = characters.filter(
    (character) => character !== " " && character !== "\n"
  );

  return filteredCharacters.length;
};

export const getShortWordsTotal = (text: string, maxLength = 4): number => {
  const trimmedWords = text.replaceAll("\n", " ");

  const words = trimmedWords.split(" ");

  const filteredWords = words.filter((word) => word !== "" && word !== "\n");

  const shortWords = filteredWords.filter((word) => word.length <= maxLength);

  return shortWords.length;
};

export const getShortWordsList = (words: string[]): string => {
  const trimmedWords = words.filter((word) => word !== "" && word !== " ");
  const wordsList = trimmedWords.join(", ");
  return wordsList;
};

export const getWordFrequency = (text: string, word: string): number => {
  const lowerCaseText = text.toLowerCase();
  const lowerCaseWord = word.toLowerCase();

  const trimmedWords = lowerCaseText.replaceAll("\n", " ");

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

  const words = text.replaceAll("\n", " ").split(" ");

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

  const words = text.replaceAll("\n", " ").split(" ");
  const filteredWords = words.filter((word) => word !== " ");

  const firstWord = filteredWords[0].toLowerCase();
  const upperCaseWords = filteredWords
    .splice(1)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());

  const joinedUpperCaseWords = upperCaseWords.join("");

  return firstWord + joinedUpperCaseWords;
};
