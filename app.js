let services = document.getElementById('services');
let modalContent = document.getElementById('modal-content');
let getStarted = document.getElementById('get-started');
let classesInfo = document.getElementById('classes-info');
let submit = document.getElementById('submit-form');
let actionContainer = document.getElementById('action-container');
let rotateArrow = document.getElementById('rotate-arrow');
let confirmationMessage = document.getElementById('confirmation-message');
let close = document.getElementById('close');
let infoForm = document.getElementById('info-form');
let mobileDropdown = document.getElementById('mobile-dropdown');
let navBar = document.getElementById('nav-bar');
let screenWidth = window.matchMedia('(max-width: 992px)');

services.onclick = () => {
	if (modalContent.style.display === 'block') {
		rotateArrow.classList.remove('rotate-arrow');
		modalContent.classList.add('fadeout');

		setTimeout(function () {
			modalContent.style.display = 'none';
			modalContent.classList.remove('fadeout');
			modalContent.style.opacity = 1;
		}, 300);
	} else {
		modalContent.style.display = 'block';
		rotateArrow.classList.add('rotate-arrow');
	}

	if (screenWidth.matches) {
		actionContainer.style.transform = 'translateY(120px)';
		actionContainer.style.transition = 'all ease 0.5s';
	} else if (actionContainer.style.transform === 'translateY(120px)') {
		actionContainer.style.transform = 'translateY(0px)';
		actionContainer.style.transition = 'all ease 0.5s';
	}
};

modalContent.addEventListener('mouseleave', () => {
	modalContent.classList.add('fadeout');
	rotateArrow.classList.remove('rotate-arrow');

	setTimeout(function () {
		modalContent.style.display = 'none';
		modalContent.classList.remove('fadeout');
		modalContent.style.opacity = 1;
	}, 300);

	if (screenWidth.matches) {
		actionContainer.style.transform = 'translateY(0px)';
		actionContainer.style.transition = 'all ease 0.5s';
	}
});

getStarted.onclick = function () {
	classesInfo.style.display = 'block';
	actionContainer.style.display = 'none';
};

submit.onclick = () => {
	confirmationMessage.style.display = 'block';
	classesInfo.classList.add('fadeout');

	setTimeout(function () {
		classesInfo.style.display = 'none';
		classesInfo.classList.remove('fadeout');
		classesInfo.style.opacity = 1;
	}, 300);
};

close.onclick = () => {
	confirmationMessage.style.display = 'none';
	infoForm.submit();
};

mobileDropdown.onclick = () => {
	navBar.classList.toggle('show');
	if (screenWidth.matches) {
		actionContainer.style.transform = 'translateY(0px)';
		actionContainer.style.transition = 'all ease 0.5s';
	} else {
		actionContainer.style.transform = 'translateY(120px)';
		actionContainer.style.transition = 'all ease 0.5s';
	}
};
