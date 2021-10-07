export const analyzeArticle = (inputVal) => {
  fetch("/userData", {
    method: "POST",
    credentials: "same-origin",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ input: inputVal }),
  })
    .then((res) => res.json())
    .then((res) => {
      const confidence = document.querySelector("#confidence");
      const scoreTag = document.querySelector("#scoreTag");
      const subjectivity = document.querySelector("#subjectivity");
      const text = document.querySelector("#text");
      const irony = document.querySelector("#irony");
      const agreement = document.querySelector("#agreement");
      Client.updateResults(
        confidence,
        scoreTag,
        subjectivity,
        irony,
        agreement,
        text,
        res
      );
    });
};
