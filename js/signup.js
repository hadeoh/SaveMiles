function addUser() {
    $('.enrol').submit(function (e) {
      e.preventDefault();
      const firstName = $('#firstName').val();
      const lastName = $('#lastName').val();
      const email = $('#emailAddress').val();
      const phoneNumber = $('#pNumber').val();
      const password = $('#password').val();
      const cPassword = $('#password2').val();
      const url = $(this).attr('action');
      const user = { firstName, lastName, email, password, phoneNumber };
      const emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 
      if (firstName.trim().length < 1) {
        alert("Please enter your first name");
      } else if (lastName.trim().length < 1) {
        alert("Please enter your last name");
      } else if (email.trim().length < 1) {
        alert("Please enter your email address");
      } else if (!emailPattern.test(email.trim())) {
          alert("Please enter a valid email address")
        } else if (password.trim().length < 8) {
        alert("Password must be at least 8 characters long");
      }else if (password.trim() !== cPassword.trim()) {
        alert("Passwords do not match");
      } else {
      $.ajax({
        url: url,
        type: 'POST',
        data: user,
        success: function (data) {
          $('.right-panel').html(`
          <h2>You have successfully registered on SaveMiles</h2>
          <h3>Your details are </h3>
          <b>Name: </b>${data.firstName} ${data.lastName} <br>
          <b>Email Address: </b>${data.email} <br>
           `);
           window.location.replace('../html/transactions.html');
         }
       });
     }
     return false;
   });
}
