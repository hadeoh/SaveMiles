function depositFunds() {
    $('.enrol').submit(function (e) {
        e.preventDefault();
        const amount = $('#amount').val();
        const cardNumber = $('#card-number').val();
        const expiryDate = $('#expiry-date').val();
        const type = 'Credit'
        const date = new Date();
        const cvc = $('#cvc').val();
        const gottenUser = JSON.parse(localStorage.getItem('user'));
        console.log(gottenUser)
        const userId = gottenUser.id;
        const userEmail = gottenUser.email;
        const fundValues = { amount, cardNumber, expiryDate, date, cvc, type, userId, userEmail }
        const url = $(this).attr('action');

        if (amount === 0) {
            alert("Please enter the amount to be deposited");
          } else if (!(/\w{16,}/g).test(cardNumber)) {
            alert("Please enter a valid card number");
          } else if (expiryDate.length < 1) {
            alert("Please enter the expiry date of your card");
          } else if (cvc.length !== 3) {
            alert("CVC must be 3 characters long");
          } else {
              $.ajax({
                  url: url,
                  type: 'POST',
                  data: fundValues,
                  success: function (data) {
                    $('.panel').html(`
                    <h2>You have successfully deposited your funds</h2>
                    <h3>Your transaction details are </h3>
                    <b>Transaction ID: </b>${data.id}<br>
                    <b>Amount: </b>${data.amount} <br>
                     `);
                     window.location.replace('../html/transactions.html');
                   }
              })
          }
          return false;
    })
}