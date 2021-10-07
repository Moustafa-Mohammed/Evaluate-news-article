import { analyzeArticle } from "./analyzeArticle";

export const handleSubmit = (e) => {
  e.preventDefault();
  const input = document.querySelector("#inputVal");
  const inputVal = input.value;
  document.querySelector(".result").style.opacity = "0";
  document.querySelector("#confidence").innerHTML = "";
  document.querySelector("#scoreTag").innerHTML = "";
  document.querySelector("#subjectivity").innerHTML = "";
  document.querySelector("#text").innerHTML = "";
  document.querySelector("#irony").innerHTML = "";
  document.querySelector("#agreement").innerHTML = "";
  analyzeArticle(inputVal);

  input.value = "";
};
