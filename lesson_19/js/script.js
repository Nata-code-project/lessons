window.addEventListener("scroll", function () {
  const header = document.querySelector('.header');

  if (window.scrollY > 0) {
    header.classList.add('header--scrolled');
  } else {
    header.classList.remove('header--scrolled');
  }
});

"use strict"

document.addEventListener('click', documentActions)

function documentActions(e) {
	const targetElement = e.target

	if (targetElement.closest('.header__icon-menu')) {
		document.documentElement.toggleAttribute('data-menu-open')
	}

}