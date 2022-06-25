let showsInfo = [];
let apiKey;
axios
  .get("https://project-1-api.herokuapp.com/register")
  .then((response) => {
    apiKey = response.data.api_key;
    return apiKey;
  })
  .then((key) => {
    axios
      .get(`https://project-1-api.herokuapp.com/showdates/?api_key=<${key}>`)
      .then((response) => {
        showsInfo = response.data;

        showsInfo.forEach((item) => {
          displayShows(item);
        });
      });
  })
  .catch((err) => {});

const showSection = document.querySelector(".show-section");
//Create a div
const title = document.createElement("div");
title.classList.add("show-section__header");

//Titles Date
const date = document.createElement("p");
date.classList.add("show-section__detail");
date.innerHTML = "date";
title.appendChild(date);

//Titles Venue
const venue = document.createElement("p");
venue.classList.add("show-section__detail");
venue.innerHTML = "venue";
title.appendChild(venue);

//Titles location
const place = document.createElement("p");
place.classList.add("show-section__detail");
place.innerHTML = "location";
title.appendChild(place);

//invisible button
const btn = document.createElement("button");
btn.classList.add("show-section__btn");
btn.classList.add("show-section__btn--special");
title.appendChild(btn);

//Create Div for list and header to go into single container
const commentContainer = document.createElement("div");
commentContainer.classList.add("show-section__container");
showSection.appendChild(commentContainer);

//Show List
const showList = document.querySelector(".show-section__list");

//insert a header first then Comment List
commentContainer.appendChild(title);
commentContainer.appendChild(showList);

//display elements for mobile view
function displayShows(item) {
  //Show Card
  const showCard = document.createElement("li");
  showCard.classList.add("show-section__card");
  showList.appendChild(showCard);

  createElement(showCard, "Date", getDate(parseInt(item.date)));
  createElement(showCard, "venue", item.place);
  createElement(showCard, "location", item.location);

  //Button
  const buyTicketButton = document.createElement("button");
  buyTicketButton.classList.add("show-section__btn");
  showCard.appendChild(buyTicketButton);
  buyTicketButton.innerHTML = "buy tickets";
}
//create element Funtion for mobile view
function createElement(showCard, title, value) {
  //Show detail
  const showDetail = document.createElement("div");
  showDetail.classList.add("show-section__detail");
  showCard.appendChild(showDetail);

  //show heading
  const showTitle = document.createElement("p");
  showTitle.classList.add("show-section__heading");
  showDetail.appendChild(showTitle);
  showTitle.innerHTML = title;

  //show Information
  const showInfo = document.createElement("p");
  showInfo.classList.add("show-section__info");
  showDetail.appendChild(showInfo);
  showInfo.innerHTML = value;
  return showCard;
}

const cardSelected = document.querySelectorAll(".show-section__card");
cardSelected.forEach((element) => {
  element.addEventListener("click", function onClick(event) {
    cardSelected.forEach((el) => {
      el.classList.remove("show-section__card--selected");
    });
    if (event.target.className === "show-section__info") {
      event.target.parentElement.parentElement.classList.add(
        "show-section__card--selected"
      );
    } else if (event.target.className === "show-section__card") {
      element.classList.add("show-section__card--selected");
    }
  });
});

function getDate(timestamp) {
  let date = new Date(timestamp);

  let fulldate =
    date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
  return fulldate;
}
