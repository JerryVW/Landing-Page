let services = document.getElementById('services');
let modalContent = document.getElementById('modal-content');
let trainingClasses = document.getElementsByClassName('training-classes');
let getStarted = document.getElementById('get-started');
let classesInfo = document.getElementById('classes-info');
let submit = document.getElementById('submit');
let actionContainer = document.getElementById('action-container');

services.addEventListener('mouseover', function () {
	modalContent.style.display = 'block';
});

modalContent.addEventListener('mouseleave', function () {
	modalContent.classList.add('fadeout');

	modalContent.style.opacity = 0;
	setTimeout(function () {
		modalContent.style.display = 'none';
		modalContent.classList.remove('fadeout');
		modalContent.style.opacity = 1;
	}, 500);
});

getStarted.addEventListener('click', function () {
	classesInfo.style.display = 'block';
	actionContainer.style.display = 'none';
});

submit.addEventListener('click', function () {
	classesInfo.classList.add('fadeout');

	classesInfo.style.opacity = 0;
	setTimeout(function () {
		classesInfo.style.display = 'none';
		classesInfo.classList.remove('fadeout');
		classesInfo.style.opacity = 1;
	}, 500);
});
