import { count } from "console";

export const getParagraphCount = (text: string): number => {
  const trimmedParagraph = text.replaceAll(" ", "");

  const paragraphs = trimmedParagraph.split("\n\n");

  const filteredParagraphs = paragraphs.filter(
    (paragraph) => paragraph !== "" && paragraph !== "\n"
  );

  return filteredParagraphs.length;
};
