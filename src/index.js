function displayQuote(response) {
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateQuote(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "b84306dfa4e854abf13actc00831o2ff";
  let context = `Generate a motivational quote about ${instructionsInput.value}`;
  let prompt =
    "You are a motivational life guru and love to inspire people. Your life-goal is to generate quote about life to make a better day for someone. Add a emoji after every qyoute you generate in the theme of quote.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt='${prompt}&context=${context}&key=${apiKey}`;

  let quoteElement = document.querySelector("#quote");
  quoteElement.classList.remove("hidden");
  quoteElement.innerHTML = `<div class="generating">⏳Generating quote for you about ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayQuote);
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
