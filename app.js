let services = document.getElementById('services');
let modalContent = document.getElementById('modal-content');

services.addEventListener('mouseover', function () {
	modalContent.style.display = 'block';
});

services.addEventListener('mouseout', function () {
	modalContent.style.display = 'none';
});
