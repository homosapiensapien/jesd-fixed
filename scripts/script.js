const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('nav-links')[0];

const bodyContent = document.getElementById('bodyWrapper');

toggleButton.addEventListener('click', () => {
	navbarLinks.classList.toggle('active');

	if (navbarLinks.classList.contains('active')) {
		bodyContent.style.display = 'none';
	}

  if (!navbarLinks.classList.contains('active')) {
    bodyContent.style.display = 'block';
  }
});

// carousel

const slides = document.querySelectorAll('.slides img');
let slideIndex = 0;
let intervalID = null;

document.addEventListener('DOMContentLoaded', initializeSlider);

function initializeSlider() {
	slides[slideIndex].classList.add('display-slide');
	intervalID = setInterval(nextSlide, 5000);
}

function showSlide(index) {
	if (index >= slides.length) {
		slideIndex = 0;
	}
	else if (index < 0) {
		slideIndex = slides.length - 1;
	}

	slides.forEach(slide => {
		slide.classList.remove('display-slide');
	});
	slides[slideIndex].classList.add('display-slide');
}

function prevSlide() {
	// clearInterval(intervalID);
	slideIndex--;
	showSlide(slideIndex);
}

function nextSlide() {
	slideIndex++;
	showSlide(slideIndex);
}