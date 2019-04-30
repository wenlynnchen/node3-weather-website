const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const MessageZero = document.querySelector("#message-0");
const MessageOne = document.querySelector("#message-1");
const MessageTwo = document.querySelector("#message-2");
const MessageThree = document.querySelector("#message-3");
const MessageFour = document.querySelector("#message-4");
const MessageFive = document.querySelector("#message-5");
const MessageSix = document.querySelector("#message-6");
const MessageSeven = document.querySelector("#message-7");
const MessageEight = document.querySelector("#message-8");
const MessageNine = document.querySelector("#message-9");
const MessageTen = document.querySelector("#message-10");
const MessageEleven = document.querySelector("#message-11");

action = () => {
  document.getElementById("button-0").style.visibility = "hidden";
};

weatherForm.addEventListener("submit", e => {
  e.preventDefault();
  const location = search.value;
  console.log(location);
  MessageZero.textContent = "Loading...";
  MessageOne.textContent = "";
  MessageTwo.textContent = "";
  MessageTwo.textContent = "";
  MessageTwo.textContent = "";
  MessageThree.textContent = "";
  MessageFour.textContent = "";
  MessageFive.textContent = "";
  MessageSix.textContent = "";
  MessageSeven.textContent = "";
  MessageEight.textContent = "";
  MessageNine.textContent = "";
  MessageTen.textContent = "";
  MessageEleven.textContent = "";
  fetch("/weather?address=" + location).then(response => {
    response.json().then(data => {
      if (data.error) {
        MessageZero.textContent = data.error;
        MessageOne.textContent = "";
        MessageTwo.textContent = "";
        MessageTwo.textContent = "";
        MessageThree.textContent = "";
        MessageFour.textContent = "";
        MessageFive.textContent = "";
        MessageSix.textContent = "";
        MessageSeven.textContent = "";
        MessageEight.textContent = "";
        MessageNine.textContent = "";
        MessageTen.textContent = "";
        MessageEleven.textContent = "";
      } else {
        MessageZero.textContent = `時間： ${data.time}`;
        MessageOne.textContent = `地點： ${data.location}`;
        MessageTwo.textContent = `目前天氣狀況： ${data.summary}`;
        MessageThree.textContent = `下雨機率： ${data.precipProbability}％`;
        MessageFour.textContent = `目前溫度： ${data.temperature}`;
        MessageFive.textContent = `體感溫度： ${data.apparentTemperature}`;
        MessageSix.textContent = `濕度： ${data.humidity}`;
        MessageSeven.textContent = `風速： ${data.windSpeed} (miles/hour）`;
        MessageEight.textContent = `陣風風速： ${data.windGust} (miles/hour）`;
        MessageNine.textContent = `雲量： ${data.cloudCover}`;
        MessageTen.textContent = `紫外線指數： ${data.uvIndex}`;
        MessageEleven.textContent = `能見度： ${data.visibility} （miles）`;
      }
    });
  });
});
