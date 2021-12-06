const forms = document.querySelectorAll('.form');
const loginCard = document.querySelector('.login-section__card');
const loginBtn = loginCard.querySelector('.login-btn');
const forgotPasswordBtn = loginCard.querySelector('.forgot-password-btn');
const backToLoginBtn = loginCard.querySelector('.back-home-btn');
const signupBtn = loginCard.querySelector('.sign-up-btn');
const loginSectionLinks = document.querySelectorAll('.login-section__link');

const loginEmail = loginCard.querySelector('#login-email');
const loginPassword = loginCard.querySelector('#login-password');
const forgotEmail = loginCard.querySelector('#forgot-email');
const signupName = loginCard.querySelector('#signup-name');
const signupEmail = loginCard.querySelector('#signup-email');
const signupPassword = loginCard.querySelector('#signup-password');

loginSectionLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    console.log('a');
  });
});
forgotPasswordBtn.addEventListener('click', function() {
  loginCard.classList.add('rotateX');
});
backToLoginBtn.addEventListener('click', function() {
  loginCard.classList.remove('rotateX');
});

signupBtn.addEventListener('click', function() {
  loginCard.classList.add('rotateY');
});
loginBtn.addEventListener('click', function() {
  loginCard.classList.remove('rotateY');
});

const allFields = [
  loginEmail,
  forgotEmail,
  signupEmail,
  signupName,
  loginPassword,
  signupPassword,
];

function check(field, message) {
  if (field.value === '') {
    const formGroup = field.parentElement;
    formGroup.classList.remove('success');
    formGroup.classList.add('error');
    formGroup.querySelector('small').textContent = message;
  } else {
    const formGroup = field.parentElement;
    formGroup.classList.remove('error');
    formGroup.classList.add('success');
  }
}

function repeatCheck(fields) {
  for (const field of fields) {
    check(field, `This field can't be empty`);
  }
}

for (const form of forms) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    repeatCheck(allFields);
  });
}

for (const field of allFields) {
  field.addEventListener('keyup', function() {
    check(field, `This field can't be empty`);
  });
}
