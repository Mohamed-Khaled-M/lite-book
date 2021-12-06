$(document).ready(function() {
  $('.owl-testimonials').owlCarousel({
    items: 1,
    autoplay: true,
    loop: true,
  });

  $('.owl-logos').owlCarousel({
    items: 4,
    autoplay: true,
    loop: true,
  });

  $('.owl-courses').owlCarousel({
    autoplay: true,
    autoplayTimeout: 3000,
    loop: true,
    margin: 30,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      991: {
        items: 3,
      },
    },
  });
});

const headerFormSubmit = document.querySelector('.header form');
const subjectsCard = document.querySelectorAll('.subjects-section__card');
const SubjectsCardOpen = document.querySelectorAll(
  '.subjects-section__card .open'
);
const SubjectsCardClose = document.querySelectorAll(
  '.subjects-section__card .close'
);
const cardCollapsed = document.querySelectorAll('.card-collapsed');
const faqSection = document.querySelector('.faq-section');

// prevent default on submit for header form
headerFormSubmit.addEventListener('submit', e => e.preventDefault());

// subjects section accordion
for (let i = 0; i <= subjectsCard.length - 1; i += 1) {
  SubjectsCardOpen[i].addEventListener('click', () => {
    SubjectsCardOpen[i].innerHTML = 'Show less <i class="fas fa-angle-up"></i>';
    subjectsCard[i].classList.add('opened');
    cardCollapsed[i].style.maxHeight = `${cardCollapsed[i].scrollHeight}px`;
  });

  SubjectsCardClose[i].addEventListener('click', () => {
    SubjectsCardOpen[i].innerHTML =
      'Show more <i class="fas fa-angle-down"></i>';
    subjectsCard[i].classList.remove('opened');
    cardCollapsed[i].style.maxHeight = 0;
  });
}

// FAQ SECTION
faqSection.addEventListener('click', e => {
  const question = e.target.closest('.faq-section__content--question');
  if (question) {
    question.parentElement.classList.toggle('active');

    if (question.parentElement.classList.contains('active')) {
      // eslint-disable-next-line prettier/prettier
      question.nextElementSibling.style.maxHeight = `${question.nextElementSibling.scrollHeight}px`;
    } else {
      question.nextElementSibling.style.maxHeight = `0`;
    }
  }
});
