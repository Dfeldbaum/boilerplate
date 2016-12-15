console.log('linked, sir');

var contact = document.getElementById('fix1');
var button = document.getElementById('contact-button')

window.onload = function(){
	contact.style.display = 'none';
	button.addEventListener('click', showContactForm)
}


function showContactForm(){
	button.style.display = 'none';
	document.getElementById('fix1').style.display = "block";
}