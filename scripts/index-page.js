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
window.addEventListener("click", function (event) {
  event.preventDefault();
});
let button = document.getElementById("submit");
button.addEventListener("click", (e) => {
  //Getting username and comment from user through DOM
  let username = document.getElementById("name").value;
  let usercomment = document.getElementById("comment-text").value;
  console.log(usercomment);
  //appending values receiving user info from user into our object
  commentArray.push({
    user: username,
    date: "6/14/22",
    comment: usercomment,
  });
  console.log(commentArray);
  //populating comment secting through our object
  appendChild({
    user: username,
    date: today,
    comment: usercomment,
  });
  //Clear the form
  document.getElementById("comment-section").reset();
});

comment();
function comment() {
  for (i = 0; i < commentArray.length; i++) {
    appendChild(commentArray[i]);
  }
}
function appendChild(person) {
  //Creating Elements and adding classList to it
  //Comment Item
  let commentItem = document.createElement("div");
  commentItem.classList.add("comment-section__item");
  console.log(commentItem);

  //Image Element
  let userImg = document.createElement("img");
  userImg.classList.add("comment-section__image");
  console.log(userImg);

  //Comment Panel
  let commentPanel = document.createElement("div");
  commentPanel.classList.add("comment-section__panel");
  console.log(commentPanel);

  //User Detail
  let userDetail = document.createElement("div");
  userDetail.classList.add("comment-section__detail");
  console.log(userDetail);

  //UserName
  let userName = document.createElement("p");
  userName.classList.add("comment-section__name");
  console.log(userName);

  //User Date
  let userDate = document.createElement("p");
  userDate.classList.add("comment-section__date");
  console.log(userDate);

  //Comment Text
  let commentText = document.createElement("p");
  commentText.classList.add("comment-section__text");
  console.log(commentText);

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
  let commentList = document.querySelector(".comment-section__list");
  commentList.append(commentItem);

  //Passing values from Comment Array into innerHTML tag
  userName.innerHTML = person.user;
  userDate.innerHTML = person.date;
  commentText.innerHTML = person.comment;
}
