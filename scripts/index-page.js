//Generate Date
var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

today = mm + "/" + dd + "/" + yyyy;
console.log(today);

//Comment Array
let commentArray = [
  {
    user: "Connor Walton",
    date: "02/17/2021",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    user: "Emilie Beach",
    date: "01/09/2021",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    user: "Miles Acosta",
    date: "12/20/2020",
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

//Loading array into the UI

//Form for Comment section
const form = document.getElementById("comment-section__form");

const commentList = document.querySelector(".comment-section__list");
form.addEventListener("submit", (e) => {
  //Orevent default reloads
  e.preventDefault();

  const userNameInput = document.querySelector(".comment-section__input");
  const usertextArea = document.querySelector(".comment-section__textarea");
  userNameInput.classList.remove("comment-section__input--error");
  usertextArea.classList.remove("comment-section__input--error");

  //Getting username and comment from user through DOM
  const username = e.target.name.value;
  const usercomment = e.target.comment.value;

  //validation
  if (username || usercomment) {
    //appending values receiving user info from user into our object
    commentArray.push({
      user: username,
      date: "6/14/22",
      comment: usercomment,
    });
    console.log(commentArray);

    //Render the Comment Object
    comment();

    //Clear the form
    form.reset();
  } else {
    userNameInput.classList.add("comment-section__input--error");
    usertextArea.classList.add("comment-section__input--error");
    console.log("Error");
  }
});

function comment() {
  commentList.innerHTML = "";
  for (i = 0; i < commentArray.length; i++) {
    appendChild(commentArray[i]);
  }
}
function appendChild(person) {
  //Creating Elements and adding classList to it
  //Comment Item
  const commentItem = document.createElement("div");
  commentItem.classList.add("comment-section__item");

  //Image Element
  const userImgDiv = document.createElement("div");
  console.log(userImgDiv);
  const userImg = document.createElement("img");
  userImg.classList.add("comment-section__image");
  userImgDiv.appendChild(userImg);
  console.log(userImgDiv);

  //Comment Panel
  const commentPanel = document.createElement("article");
  commentPanel.classList.add("comment-section__section");

  //User Detail
  const userDetail = document.createElement("div");
  userDetail.classList.add("comment-section__detail");

  //UserName
  const userName = document.createElement("p");
  userName.classList.add("comment-section__name");

  //User Date
  const userDate = document.createElement("p");
  userDate.classList.add("comment-section__date");

  //Comment Text
  const commentText = document.createElement("p");
  commentText.classList.add("comment-section__text");

  //append Name and Date into UserDetail
  userDetail.appendChild(userName);
  userDetail.appendChild(userDate);

  //Append User Detail and Comment into CommentPanel
  commentPanel.appendChild(userDetail);
  commentPanel.appendChild(commentText);

  //append image and Comment Panel into comment item
  commentItem.appendChild(userImgDiv);
  commentItem.appendChild(commentPanel);

  //append each comment into List

  commentList.appendChild(commentItem);

  //Passing values from Comment Array into innerHTML tag
  userName.innerHTML = person.user;
  userDate.innerHTML = person.date;
  commentText.innerHTML = person.comment;
}
comment();
