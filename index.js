function sendEmail() {
	Email.send({
	SecureToken: "936d8007-9806-4dda-953d-fef15f828fe9",
	From : 'tung.nguyen23797@gmail.com',
	To : "n13a10tt31.ngtung@gmail.com",
	Subject : "New Contact Form Enquiry",
	Body : "Subject: " + document.getElementById("subject").value
		  + "<br> Name: " + document.getElementById("name").value
		  + "<br> Email: " + document.getElementById("email").value
		  + "<br> Email: " + document.getElementById("message").value
	}).then(
	  message => alert("Message Sent Succesfully")
	);
  }