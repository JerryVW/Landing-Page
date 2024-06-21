let services = document.getElementById('services');
let modalContent = document.getElementById('modal-content');
let getStarted = document.getElementById('get-started');
let classesInfo = document.getElementById('classes-info');
let submit = document.getElementById('submit');
let actionContainer = document.getElementById('action-container');

services.addEventListener('mouseover', function () {
	modalContent.style.display = 'block';
});

// services.addEventListener('mouseleave', function () {
// 	modalContent.classList.add('fadeout');
// 	modalContent.style.opacity = 0;
// 	setTimeout(function () {
// 		modalContent.style.display = 'none';
// 		modalContent.classList.remove('fadeout');
// 		modalContent.style.opacity = 1;
// 	}, 500);
// });

modalContent.addEventListener('mouseleave', function () {
	modalContent.classList.add('fadeout');

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

// submit.onclick = function () {
// 	classesInfo.classList.add('fadeout');

// 	classesInfo.style.opacity = 0;
// 	setTimeout(function () {
// 		classesInfo.style.display = 'none';
// 		modalContent.classList.remove('fadeout');
// 		classesInfo.style.opacity = 1;
// 	}, 500);
// };
