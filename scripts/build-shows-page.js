const showsInfo = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
];
const showList = document.querySelector(".show-section");

showsInfo.forEach((item) => {
  //   console.log(item);
  displayShows(item);
});

function displayShows(item) {
  //Show Card
  const showCard = document.createElement("div");
  showCard.classList.add("show-section__card");
  showList.appendChild(showCard);
  createElement(showCard, "Date", item.date);
  createElement(showCard, "venue", item.venue);
  createElement(showCard, "location", item.location);
  console.log(item);

  //Button
  const buyTicketButton = document.createElement("button");
  buyTicketButton.classList.add("show-section__btn");
  showCard.appendChild(buyTicketButton);
  buyTicketButton.innerHTML = "buy tickets";
}

function createElement(showCard, title, value) {
  console.log(title);
  //Show detail
  const showDetail = document.createElement("div");
  showDetail.classList.add("show-section__detail");
  showCard.appendChild(showDetail);
  //show deading
  const showTitle = document.createElement("p");
  showTitle.classList.add("show-section__heading");
  showDetail.appendChild(showTitle);
  showTitle.innerHTML = title;

  //show Information
  const showInfo = document.createElement("p");
  showInfo.classList.add("show-section__info");
  showDetail.appendChild(showInfo);
  showInfo.innerHTML = value;

  console.log(showCard);
  return showCard;
}
{
  /* <div cla>
  <div>
    <p>date</p>
    <p>Mon Sept 06 2021</p>
  </div>
  <div>
    <p>venue</p>
    <p>Ronald Lane</p>
  </div>
  <div>
    <p>location</p>
    <p>San Francisco, CA</p>
  </div>
  <button>Buy tickets</button>
</div> */
}
