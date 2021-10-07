export const stateHandle = () => {
  const btn = document.querySelector("#submitBtn");
  const input = document.querySelector("#inputVal");

  if (input.value !== "") {
    btn.disabled = false;
    btn.innerHTML = "Start analysis";
    btn.style.background = "#008cba";
  } else {
    btn.disabled = true;
  }
};
