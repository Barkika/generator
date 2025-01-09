function generateQuote(event) {
  event.preventDefault();

  new Typewriter("#quote", {
    strings: "“Don't let someone else's opinion of you become your reality.”",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
