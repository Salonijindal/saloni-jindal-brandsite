const showsInfo = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 21 2021 ",
    venue: "Pier 3 East ",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency ",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center ",
    location: "San Francisco, CA",
  },
  ,
  {
    date: "Wed Dec 15 2021",
    venue: "Press Club ",
    location: "San Francisco, CA",
  },
];
const showList = document.querySelector(".show-section__list");
showsInfo.forEach((item) => {
  //   console.log(item);
  displayShows(item);
});
//display elements for mobile view
function displayShows(item) {
  //Show Card
  const showCard = document.createElement("li");
  showCard.classList.add("show-section__card");
  showList.appendChild(showCard);
  createElement(showCard, "Date", item.date);
  createElement(showCard, "venue", item.venue);
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
