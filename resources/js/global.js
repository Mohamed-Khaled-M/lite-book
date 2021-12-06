const loader = document.querySelector('.loading');
const navigation = document.querySelector('.navigation');
const navigationListContainer = navigation.querySelector(
  '.navigation__list-container'
);
const navigationList = navigation.querySelector('.navigation__list');
const navigationMenuIcon = navigation.querySelector('.navigation__menu-icon');
const dropdownToggle = document.querySelectorAll('.dropdown-toggle');
const secondaryHeader = document.querySelector('.secondary-header');

// loader
window.addEventListener('load', function() {
  loader.classList.add('hidden');
});

// nav responsive menu
navigationMenuIcon.addEventListener('click', function() {
  this.classList.toggle('fa-times');
  navigation.classList.toggle('bg');
  navigationListContainer.classList.toggle('show');
  // eslint-disable-next-line prettier/prettier
  navigationListContainer.style.height = navigationListContainer.classList.contains('show') ? `${navigationList.clientHeight}px` : null;
});

// style nav bg on scroll
function navStyleOnScroll() {
  if (window.scrollY) {
    navigation.style.backgroundColor = '#181a2af5';
  } else {
    navigation.style.backgroundColor = 'transparent';
  }
}
navStyleOnScroll();
window.addEventListener('scroll', navStyleOnScroll);

// dropdown-toggle
for (const dropdown of dropdownToggle) {
  dropdown.addEventListener('click', function() {
    if (this.classList.contains('active')) {
      this.classList.remove('active');
    } else {
      dropdownToggle[0].classList.remove('active');
      dropdownToggle[1].classList.remove('active');
      this.classList.add('active');
    }
    // eslint-disable-next-line prettier/prettier
    navigationListContainer.style.height = navigationListContainer.classList.contains('show') ? `${navigationList.clientHeight}px` : null;
  });
}

secondaryHeader.style.height = `${navigation.clientHeight}px`;
