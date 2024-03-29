class CreateComment {
  constructor(name, comment) {
    this.name = name;
    this.comment = comment;
  }
}

//Get the api key from url
let apiKey = "5cfcdaca-f241-4691-bdaf-5161ace5de59"; //Fixed the API key to render same user
let commentArray = [];
axios
  .get("https://project-1-api.herokuapp.com/register")
  .then(() => {
    axios
      .get(`https://project-1-api.herokuapp.com/comments/?api_key=<${apiKey}>`)
      .then((response) => {
        commentArray = response.data;
        displayComment();
      });
  })
  .catch((err) => {});

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
  axios
    .post(
      `https://project-1-api.herokuapp.com/comments/?api_key=<${apiKey}>`,
      username && usercomment ? newComment : ""
    )
    .then((response) => {
      commentArray.unshift(response.data);
      displayComment();
      form.reset();
    })
    .catch((error) => {
      userNameInput.classList.add("comment-section__input--error");
      usertextArea.classList.add("comment-section__input--error");
    });
});

function displayComment() {
  commentList.innerHTML = "";
  //Sort it in descending order (most recent comment should be at top), then display it
  commentArray.sort((a, b) => {
    return b.timestamp - a.timestamp;
  });
  commentArray.forEach((person) => {
    //Creating Elements and adding classList to it
    //Comment Item
    const commentItem = document.createElement("div");
    commentItem.setAttribute("id", person.id);
    commentItem.classList.add("comment-section__item");

    //Image Element
    const userImgDiv = document.createElement("div");
    const userImg = document.createElement("img");
    userImg.classList.add("comment-section__image");
    userImgDiv.appendChild(userImg);

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

    //Create delete button and Icon, append icon into Delete Button
    const deleteIcon = document.createElement("img");
    deleteIcon.setAttribute("src", "../assets/icons/SVG/icon-delete.svg");
    deleteIcon.setAttribute("alt", "Comment Delete Icon");

    const deleteButton = document.createElement("Button");
    deleteButton.id = "comment-section__delete";
    deleteButton.appendChild(deleteIcon);
    deleteButton.addEventListener("click", () => handleDelete(person.id));

    //Create like button, p and Icon, append icon into like Button Icon
    const likeIcon = document.createElement("img");
    likeIcon.setAttribute("src", "../assets/icons/SVG/icon-like.svg");
    likeIcon.setAttribute("alt", "Comment Like Icon");
    const likeCount = document.createElement("p");
    likeCount.classList.add("comment-section__likecount");
    const likeButton = document.createElement("Button");
    likeButton.id = "comment-section__like";
    likeButton.appendChild(likeIcon);
    likeButton.appendChild(likeCount);
    likeButton.addEventListener("click", () =>
      handleLike(person.id, likeButton, likeCount)
    );

    //Appending like button and Delete button into a div
    const emojiSection = document.createElement("div");
    emojiSection.classList.add("comment-section__emoji-panel");
    emojiSection.appendChild(likeButton);
    emojiSection.appendChild(deleteButton);

    //append Name and Date into UserDetail
    userDetail.appendChild(userName);
    userDetail.appendChild(userDate);

    //Append User Detail, Comment and delete into CommentPanel
    commentPanel.appendChild(userDetail);
    commentPanel.appendChild(commentText);
    commentPanel.appendChild(emojiSection);

    //append image and Comment Panel into comment item
    commentItem.appendChild(userImgDiv);
    commentItem.appendChild(commentPanel);

    //append each comment into List
    commentList.appendChild(commentItem);

    //Passing values from Comment Array into innerHTML tag
    userName.innerHTML = person.name;
    userDate.innerHTML = getDate(person.timestamp);
    commentText.innerHTML = person.comment;
    likeCount.innerHTML = person.likes == 0 ? "" : person.likes;
  });
}

function getDate(timestamp) {
  let date = new Date(timestamp);
  let fulldate =
    date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
  return fulldate;
}

function handleDelete(personId) {
  document.getElementById(personId).remove();
  axios
    .delete(
      `https://project-1-api.herokuapp.com/comments/${personId}?api_key=<${apiKey}>`
    )
    .then((response) => {
      commentArray = commentArray.filter(function (person) {
        return !(person.id === response.data.id);
      });
    })
    .catch((error) => {});
}

function handleLike(personId, button, count) {
  axios
    .put(
      `https://project-1-api.herokuapp.com/comments/${personId}/like/?api_key=<${apiKey}>`
    )
    .then((response) => {
      count.innerHTML = response.data.likes;
    })
    .catch((error) => {});
}
