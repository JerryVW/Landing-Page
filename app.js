let services = document.getElementById('services');
let modalContent = document.getElementById('modal-content');
let getStarted = document.getElementById('get-started');
let classesInfo = document.getElementById('classes-info');
let submit = document.getElementById('submition');
let actionContainer = document.getElementById('action-container');
let rotateArrow = document.getElementById('rotate-arrow');
let confirmationMessage = document.getElementById('confirmation-message');
let close = document.getElementById('close');
let infoForm = document.getElementById('info-form');
let mobileDropdown = document.getElementById('mobile-dropdown');
let navBar = document.getElementById('nav-bar');

services.onclick = function () {
	if (modalContent.style.display !== 'block') {
		modalContent.style.display = 'block';
		rotateArrow.classList.add('rotate-arrow');
	} else {
		modalContent.classList.add('fadeout');
		rotateArrow.classList.remove('rotate-arrow');

		modalContent.style.opacity = 0;
		setTimeout(function () {
			modalContent.style.display = 'none';
			modalContent.classList.remove('fadeout');
			modalContent.style.opacity = 1;
		}, 500);
	}
};

modalContent.addEventListener('mouseleave', function () {
	modalContent.classList.add('fadeout');
	rotateArrow.classList.remove('rotate-arrow');

	modalContent.style.opacity = 0;
	setTimeout(function () {
		modalContent.style.display = 'none';
		modalContent.classList.remove('fadeout');
		modalContent.style.opacity = 1;
	}, 500);
});

getStarted.onclick = function () {
	classesInfo.style.display = 'block';
	actionContainer.style.display = 'none';
};

submit.onclick = function () {
	confirmationMessage.style.display = 'block';
	classesInfo.classList.add('fadeout');

	classesInfo.style.opacity = 0;
	setTimeout(function () {
		classesInfo.style.display = 'none';
		classesInfo.classList.remove('fadeout');
		classesInfo.style.opacity = 1;
	}, 500);
};

close.onclick = function () {
	confirmationMessage.style.display = 'none';
	infoForm.submit();
};

mobileDropdown.onclick = function () {
	navBar.style.display = 'block';
};
