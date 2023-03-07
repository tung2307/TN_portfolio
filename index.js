var host = config.HOST;
var username = config.USERNAME;
var password = config.PASSWORD;
var email = document.getElementById("email").value;
var subject = document.getElementById("subject").value;
var message = document.getElementById("message").value;

function sendEmail() {
	Email.send({
	Host: host,
	Username : username,
	Password : password,
	To : 'tung.nguyen23797@gmail.com',
	From : email,
	Subject : subject,
	Body : message,
	}).then(
		message => alert("mail sent successfully")
	);
}