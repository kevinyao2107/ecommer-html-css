document.querySelector('body').addEventListener('mouseover', () => {
  //   document.querySelector('body').style.background = '#fff';
});

document.querySelector('body').addEventListener('mouseleave', () => {
  //   document.querySelector('body').style.background = 'red';
});

const navmenu = document.getElementsByClassName('nav__items-list');

for (let i = 0; i < navmenu.length; i++) {
  navmenu[i].addEventListener('mouseover', () => {
    const angleIcon = navmenu[i].querySelector('.las');
    angleIcon.classList.replace('la-angle-down', 'la-angle-up');
  });

  navmenu[i].addEventListener('mouseleave', () => {
    const angleIcon = navmenu[i].getElementsByClassName('las')[0];
    angleIcon.classList.replace('la-angle-up', 'la-angle-down');
  });
}

// slider
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const slideWidth = slides[0].offsetWidth;
let currentIndex = 0;

// Fonction pour faire défiler vers le slide suivant
function nextSlide() {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  updateSlider();
}

// Fonction pour faire défiler vers le slide précédent
function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  updateSlider();
}

// Fonction pour mettre à jour le slider en fonction de l'index actuel
function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  console.log(slideWidth);
  // Mettre à jour l'indicateur actif
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
}

// Ajoutez des indicateurs (points) pour les slides
const sliderDots = document.querySelector('.slider-dots');
for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  dot.addEventListener('click', () => {
    currentIndex = i;
    updateSlider();
  });
  sliderDots.appendChild(dot);
}

setInterval(nextSlide, 3000);

// Mettez à jour le slider au chargement de la page
updateSlider();
