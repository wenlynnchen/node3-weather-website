const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const MessageOne = document.querySelector("#message-1");
const MessageTwo = document.querySelector("#message-2");

weatherForm.addEventListener("submit", e => {
  e.preventDefault();
  const location = search.value;
  console.log(location);

  fetch("/weather?address=" + location).then(response => {
    response.json().then(data => {
      if (data.error) {
        MessageOne.textContent = data.error;
        MessageTwo.textContent = "";
      } else {
        MessageOne.textContent = data.location;
        MessageTwo.textContent = data.forecast;
      }
    });
  });
});
