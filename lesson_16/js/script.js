document.addEventListener('click', documentActions)

function documentActions(e) {
	const targetElement = e.target
	//----------------------------------------------
	// (код який додає датаатрибут для тега html по якому стилізується відображення меню бургер
	if (targetElement.closest('.icon-menu')) {
		document.documentElement.toggleAttribute('data-menu-open')
	}

}