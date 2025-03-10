// Handle form submission using mailto:
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Gather form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var contactNumber = document.getElementById('contactNumber').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    
    // Construct the email body
    var emailBody = "Name: " + name + "%0D%0A" +
                    "Email: " + email + "%0D%0A" +
                    "Contact Number: " + contactNumber + "%0D%0A" +
                    "Message: " + message;
    
    // Construct the email link
    var mailtoLink = "mailto:lokiakaberlin@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + emailBody;
    
    // Open the default email client
    window.location.href = mailtoLink;
  });
  