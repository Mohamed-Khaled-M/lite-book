const tabsContainer = document.querySelector('.tabs');
const tabButtons = document.querySelectorAll('.tabs__buttons--btn');
const tabsContent = document.querySelectorAll('.tabs__tab-content');

tabsContainer.addEventListener('click', e => {
  const clicked = e.target.closest('.tabs__buttons--btn');
  if (!clicked) return;

  tabButtons.forEach(btn => btn.classList.remove('active'));
  clicked.classList.add('active');

  tabsContent.forEach(content => content.classList.remove('active'));
  // eslint-disable-next-line prettier/prettier
    const showTabContent = tabsContainer.querySelector(`.tab-content--${clicked.dataset.tab}`);
  showTabContent.classList.add('active');
});

// here
const reviewContainer = document.querySelector('.review-section');
const form = document.querySelector('.leave-replay-section .form');
const reviewNumber = document.querySelector('.review-number');
const userName = form.name;
const userMessage = form.message;
const userRate = form.number;

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

let divNumber = 1; // id for unique div
// creat stars element
function createStars(starsNumber) {
  const starsParent = document.querySelector(`[data-id="${divNumber}"] .stars`);

  for (let i = 0; i < starsNumber; i += 1) {
    const star = document.createElement('i');
    star.className = 'fa fa-star';
    starsParent.appendChild(star);
  }
}

const updateDom = (name, message, divId) => {
  const result = `
      <div class="review" data-id="${divId}">
        <div class="review__image">
          <img src="resources/images/user.jpeg" alt="review">
        </div>
        <div class="review__content">
          <h5 class="mb-3">${name}</h5>
          <div class="review__content--rate mb-3">
            -
            <div class="stars mx-2"></div>
            ${month} ${date.getDate()}, ${date.getFullYear()}
          </div>
          <p class="paragraph">${message}</p>
        </div>
      </div>
  `;
  return result;
};

let currentReviewNum = 1;
form.addEventListener('submit', e => {
  e.preventDefault();
  const nameValue = userName.value.trim();
  const messageValue = userMessage.value.trim();
  const rateValue = +userRate.value;

  if (nameValue && messageValue && rateValue) {
    divNumber += 1; // increase the id for unique
    currentReviewNum += 1; // update the header
    reviewContainer.innerHTML += updateDom(nameValue, messageValue, divNumber);
    reviewNumber.textContent = `${currentReviewNum} Reviews`;
    createStars(rateValue);
  }

  // reset form values
  userName.value = '';
  userMessage.value = '';
  userRate.value = '';
});
