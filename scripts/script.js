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

