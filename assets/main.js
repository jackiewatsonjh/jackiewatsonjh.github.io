const $navMenu = document.getElementById('navMenu');
const $closeMenuButton = document.getElementById('closeMenuButton');
const $openMenuButton = document.getElementById('openMenuButton');

function toggleMenu() {
	// if the menu is hidden
	if ($navMenu.classList.contains('mobile-hidden')) { // TODO - Change to 'mobile-hidden' to be more specific.
		// make it visible
		$navMenu.classList.remove('mobile-hidden');
	} else { // otherwise
		// make it hidden
		$navMenu.classList.add('mobile-hidden');
	}
}

// when I click the "X", the menu should hide.
$closeMenuButton.addEventListener('click', toggleMenu);
// when I click the hamburger menu button, the menu should open.
$openMenuButton.addEventListener('click', toggleMenu);
