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
    user: "Saloni Jindal",
    date: "6/14/22",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way,everything that makes up this majestic work deserves reverence. Letus appreciate this for what it is and what it contains.",
  },
  {
    user: "Saloni Jindal",
    date: "6/14/22",
    comment:
      " This is art.everything that makes up this majestic work deserves reverence. Letus appreciate this for what it is and what it contains.",
  },
  {
    user: "Saloni Jindal",
    date: "6/14/22",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way,",
  },
];

//Loading array into the UI

//Form for Comment section
const form = document.getElementById("comment-section");

const commentList = document.querySelector(".comment-section__list");
form.addEventListener("submit", (e) => {
  //Orevent default reloads
  e.preventDefault();

  //Getting username and comment from user through DOM
  const username = e.target.name.value;
  const usercomment = e.target.comment.value;

  //validation
  if (!username) {
  }

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
  let commentItem = document.createElement("div");
  commentItem.classList.add("comment-section__item");

  //Image Element
  let userImg = document.createElement("img");
  userImg.classList.add("comment-section__image");

  //Comment Panel
  let commentPanel = document.createElement("div");
  commentPanel.classList.add("comment-section__panel");

  //User Detail
  let userDetail = document.createElement("div");
  userDetail.classList.add("comment-section__detail");

  //UserName
  let userName = document.createElement("p");
  userName.classList.add("comment-section__name");

  //User Date
  let userDate = document.createElement("p");
  userDate.classList.add("comment-section__date");

  //Comment Text
  let commentText = document.createElement("p");
  commentText.classList.add("comment-section__text");

  //append Name and Date into UserDetail
  userDetail.appendChild(userName);
  userDetail.appendChild(userDate);

  //Append User Detail and Comment into CommentPanel
  commentPanel.appendChild(userDetail);
  commentPanel.appendChild(commentText);

  //append image and Comment Panel into comment item
  commentItem.appendChild(userImg);
  commentItem.appendChild(commentPanel);

  //append each comment into List

  commentList.append(commentItem);

  //Passing values from Comment Array into innerHTML tag
  userName.innerHTML = person.user;
  userDate.innerHTML = person.date;
  commentText.innerHTML = person.comment;
}
comment();
