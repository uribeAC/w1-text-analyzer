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
  const words = text.split(" ");

  const filteredWords = words.filter((word) => word !== "" && word !== "\n");
  return filteredWords.length;
};
