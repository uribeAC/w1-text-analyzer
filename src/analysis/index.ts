import { count } from "console";

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
  return "a";
};
