function withdrawFunds() {
    $('.enrol').submit(function (e) {
        e.preventDefault();
        const amount = $('#amount').val();
        const accountNumber = $('#acct-number').val();
        const bankName = $('#bank').val();
        const type = 'Debit';
        const date = new Date();
        const gottenUser = JSON.parse(localStorage.getItem('user'));
        const userId = gottenUser.id;
        const userEmail = gottenUser.email;
        const fundValues = { amount, accountNumber, bankName, date, type, userId, userEmail }
        const url = $(this).attr('action');

        if (amount === '' || amount === 0) {
            alert("Please enter the amount to be withdrawn");
          } else if (accountNumber === '') {
            alert("Please enter your account number");
          } else if (bankName === '') {
            alert("Please enter the destination bank");
          }else {
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
                  <b>Destination bank: </b>${data.bankName} <br>
                   `);
                   window.location.replace('../html/transactions.html');
                 }
            })
          }
          return false;
    })
}