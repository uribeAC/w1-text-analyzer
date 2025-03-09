const totalsCheckbox = document.querySelector(
  "#totals-checkbox input"
) as HTMLInputElement;

const shortCheckbox = document.querySelector(
  "#short-checkbox input"
) as HTMLInputElement;

const reversedCheckbox = document.querySelector(
  "#reversed-words-checkbox input"
) as HTMLInputElement;

const forbiddenCheckbox = document.querySelector(
  "#forbidden-words-checkbox input"
) as HTMLInputElement;

const frequenciesCheckbox = document.querySelector(
  "#frequencies-checkbox input"
) as HTMLInputElement;

const camelCaseCheckbox = document.querySelector(
  "#camel-case-checkbox input"
) as HTMLInputElement;

totalsCheckbox.addEventListener("change", () => {
  if (totalsCheckbox.checked) {
    document.querySelector("#analysis-totals")?.classList.remove("hide");
  } else {
    document.querySelector("#analysis-totals")?.classList.add("hide");
  }
});

shortCheckbox.addEventListener("change", () => {
  if (shortCheckbox.checked) {
    document.querySelector("#analysis-short")?.classList.remove("hide");
  } else {
    document.querySelector("#analysis-short")?.classList.add("hide");
  }
});

frequenciesCheckbox.addEventListener("change", () => {
  if (frequenciesCheckbox.checked) {
    document.querySelector("#analysis-frequencies")?.classList.remove("hide");
  } else {
    document.querySelector("#analysis-frequencies")?.classList.add("hide");
  }
});

reversedCheckbox.addEventListener("change", () => {
  if (reversedCheckbox.checked) {
    document
      .querySelector("#analysis-reversed-words")
      ?.classList.remove("hide");
  } else {
    document.querySelector("#analysis-reversed-words")?.classList.add("hide");
  }
});

forbiddenCheckbox.addEventListener("change", () => {
  if (forbiddenCheckbox.checked) {
    document.querySelector("#analysis-forbidden")?.classList.remove("hide");
  } else {
    document.querySelector("#analysis-forbidden")?.classList.add("hide");
  }
});

camelCaseCheckbox.addEventListener("change", () => {
  if (camelCaseCheckbox.checked) {
    document.querySelector("#analysis-camel-case")?.classList.remove("hide");
  } else {
    document.querySelector("#analysis-camel-case")?.classList.add("hide");
  }
});
