let services = document.getElementById('services');
let modalContent = document.getElementById('modal-content');
let trainingClasses = document.getElementsByClassName('training-classes');

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
