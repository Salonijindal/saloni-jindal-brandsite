class CreateComment {
  constructor(name, comment) {
    this.name = name;
    this.comment = comment;
  }
}

//Get the api key from url
let apiKey;
let commentArray = [];
axios
  .get("https://project-1-api.herokuapp.com/register")
  .then((response) => {
    apiKey = response.data.api_key;
    console.log(apiKey);
    return apiKey;
  })
  .then((key) => {
    axios
      .get(`https://project-1-api.herokuapp.com/comments/?api_key=<${key}>`)
      .then((response) => {
        commentArray = response.data;
        displayComment();
      });
  })
  .catch((err) => {
    console.log("Error in fetching Comment data from API!");
  });

//Generate Date
var today = new Date().getTime();
console.log(today);

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

  //New Object  for comment, using constructor
  const newComment = new CreateComment(username, usercomment);

  console.log("I entered thi:", newComment);
  axios
    .post(
      `https://project-1-api.herokuapp.com/comments/?api_key=<${apiKey}>`,
      username && usercomment ? newComment : ""
    )
    .then((response) => {
      commentArray.splice(0, 0, response.data);
      console.log(commentArray);
      displayComment();
      form.reset();
    })
    .catch((error) => {
      userNameInput.classList.add("comment-section__input--error");
      usertextArea.classList.add("comment-section__input--error");
    });

  console.log(commentArray);
  //Clear the form
});

function displayComment() {
  commentList.innerHTML = "";
  commentArray.forEach((person) => {
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
    userName.innerHTML = person.name;
    userDate.innerHTML = getDate(person.timestamp);
    commentText.innerHTML = person.comment;
  });
}

function getDate(timestamp) {
  let date = new Date(timestamp);

  let fulldate =
    date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

  console.log(fulldate);
  return fulldate;
}
