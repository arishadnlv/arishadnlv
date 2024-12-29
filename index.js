document.addEventListener('DOMContentLoaded', () => {
   document.querySelectorAll('a[href^="#"]').forEach(link => { 
    link.addEventListener('click', function(e) {
       e.preventDefault(); 
       let href = this.getAttribute('href').substring(1); 
       
       const scrollTarget = document.getElementById(href); 
       const topOffset = document.querySelector('.header-line')?.offsetHeight || 0;  
       
       const elementPosition = scrollTarget.getBoundingClientRect().top; 
       const offsetPosition = elementPosition - topOffset; 
       
       window.scrollBy({ 
        top: offsetPosition, 
        behavior: "smooth" }); }); }); });

//стрелка вверх
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) { // Показать стрелку, если прокручено больше, чем на 300px
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});


backToTopButton.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

//бургер
const burgerMenu = document.querySelector('.burger_menu');
const nav = document.querySelector('.nav');

burgerMenu.addEventListener('click', () => {
  nav.classList.toggle('_active');
  burgerMenu.classList.toggle('_active'); 
  //Optional: Smooth scrolling to the top when opening the menu
  if (nav.classList.contains('_active')) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});

//Optional: Close the menu if a link is clicked
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
  item.addEventListener('click', () => {
    nav.classList.remove('_active');
    burgerMenu.classList.remove('_active');
  });
});

//Optional: Close the menu if clicking outside the menu area
document.addEventListener('click', (e) => {
  if (!nav.contains(e.target) && !burgerMenu.contains(e.target) && nav.classList.contains('_active')) {
    nav.classList.remove('_active');
    burgerMenu.classList.remove('_active');
  }
});

//прокрутка
document.addEventListener('DOMContentLoaded', function() { 
  const galleryWrapper = document.querySelector('.gallery-wrapper'); 
  const prevButton = document.querySelector('.prev-btn'); 
  const nextButton = document.querySelector('.next-btn'); 
  const scrollAmount = 300; // величина прокрутки 
  let scrollDirection = 1; // 1 - вправо, -1 - влево 
prevButton.addEventListener('click', () => { 
  galleryWrapper.scrollLeft -= scrollAmount; }); 
  
  nextButton.addEventListener('click', () => { 
    galleryWrapper.scrollLeft += scrollAmount; }); 
    // Автоматическая прокрутка 
function autoScroll() { 
  if (galleryWrapper.scrollLeft + galleryWrapper.clientWidth >= galleryWrapper.scrollWidth) { scrollDirection = -1; 

  } else if (galleryWrapper.scrollLeft === 0) {
     scrollDirection = 1; 
    }
     galleryWrapper.scrollLeft += scrollAmount * scrollDirection; } // Запуск автоматической прокрутки каждые 2 секунды 
setInterval(autoScroll, 5500); 
});



function toggleDescription(element) { const description = element.querySelector('.gallery-item-description'); if (description.style.opacity === '1') { description.style.opacity = '0'; description.style.pointerEvents = 'none'; } else { description.style.opacity = '1'; description.style.pointerEvents = 'auto'; } }

