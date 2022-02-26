const card = document.querySelector(".card");
const adviceId = document.querySelector(".advice__id");
const adviceTitle = document.querySelector(".advice-title");
const button = document.querySelector(".generate-advice");

const randomAdviceURL = "https://api.adviceslip.com/advice";
card.style.display = "none";

async function getAdvice(fetchURL) {
  const response = await fetch(fetchURL);
  if (response.status === 200) {
    const adviceObj = await response.json();
    setHTML(adviceObj);
  } else {
    alert("Cannot load resources");
  }
}

getAdvice(randomAdviceURL);

function setHTML(adviceObj) {
  const {
    slip: { id, advice },
  } = adviceObj;

  adviceId.innerText = id;
  adviceTitle.innerHTML = `<q>${advice}</q>`;

  card.style.display = "block";
}

button.addEventListener("click", () => {
  getAdvice(randomAdviceURL);
});