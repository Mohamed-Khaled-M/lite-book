const commentsContainer = document.querySelector('.comments-container');
const form = document.querySelector('.leave-replay-section .form');
const userName = form.name;
const userMessage = form.message;

const date = new Date();
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const month = months[date.getMonth()];

const updateDom = (name, message, num) => {
  const result = `
    <div class="comments-container__comment border-style replay" data-num="${num}">
      <div class="comments-container__comment--image">
        <img src="resources/images/user.jpeg" alt="comment">
      </div>
      <div class="comments-container__comment--body">
        <h6 class="comments-container__comment--title mb-4">
          <a href="blog-single.html">${name}</a>
          <span class="date">- ${month} ${date.getDate()}, ${date.getFullYear()}</span>
        </h6>
        <p class="paragraph mb-4">${message}</p>
        <a href="#replay" class="comments-container__comment--replay">Replay</a>
      </div>
    </div>
  `;
  return result;
};

let newComment; // transporter
commentsContainer.addEventListener('click', e => {
  const replayTarget = e.target.closest('.comments-container__comment--replay');
  if (replayTarget) {
    e.preventDefault();
    // const link = replayTarget.hash.slice(1);
    // to scroll into form section
    const messageSection = document.querySelector(replayTarget.hash);
    messageSection.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
    // revalue to the clicked btn to add the new data after it and to scroll there when submit is finish
    newComment = replayTarget;
  }
});

let numberOfDiv = 0; // id for unique
form.addEventListener('submit', e => {
  e.preventDefault();
  const userNameValue = userName.value.trim();
  const userMessageValue = userMessage.value.trim();

  if (userNameValue && userMessageValue && newComment) {
    numberOfDiv += 1;
    // select the parent of the clicked btn
    newComment.parentElement.innerHTML += updateDom(
      userNameValue,
      userMessageValue,
      numberOfDiv
    );
    // select the new div with new id to scroll back when its created
    const div = document.querySelector(`[data-num="${numberOfDiv}"]`);
    div.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
    // reset newComment value
    newComment = null;
  } else if (userNameValue && userMessageValue) {
    commentsContainer.innerHTML += `
      <div class="comments-container__comment border-style">
        <div class="comments-container__comment--image">
          <img src="resources/images/user.jpeg" alt="comment">
        </div>
    
        <div class="comments-container__comment--body">
          <h6 class="comments-container__comment--title mb-4">
            <a href="blog-single.html">${userNameValue}</a>
            <span class="date">- ${month} ${date.getDate()}, ${date.getFullYear()}</span>
          </h6>
          <p class="paragraph mb-4">${userMessageValue}</p>
          <a href="#replay" class="comments-container__comment--replay">Replay</a>
        </div>
      </div>
    `;
  }

  // reset form values
  userName.value = '';
  userMessage.value = '';
});
