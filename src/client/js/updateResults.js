export const updateResults = (
  confidence,
  scoreTag,
  subjectivity,
  irony,
  text,
  agreement,
  responseObject
) => {
  const header = document.querySelector("th");
  const btn = document.querySelector("#submitBtn");
  const result = document.querySelector(".result");
  const error = document.querySelector("#error");

  header.innerHTML = "Analysis Results";

  if (responseObject.confidence !== undefined) {
    error.innerHTML = "";

    header.style.backgroundColor = "#04AA6D";
    header.style.color = "#fff";

    result.style.opacity = "1";
    confidence.innerHTML = responseObject.confidence;
    scoreTag.innerHTML = responseObject.score_tag;
    subjectivity.innerHTML = responseObject.subjectivity;
    irony.innerHTML = responseObject.irony;
    text.innerHTML = responseObject.sentence_list[0].text;
    agreement.innerHTML = responseObject.agreement;

    btn.innerHTML = "Analysis succeded";
    btn.style.background = "#4caf50";
  } else {
    error.innerHTML = `Error in analyzing this URL. Server responded with code: ${responseObject.status.code}. Error Message: ${responseObject.status.msg}"`;
    header.style.backgroundColor = "red";
    btn.innerHTML = "Analysis failed";
    btn.style.background = "red";
    result.style.opacity = "0";
  }
};
