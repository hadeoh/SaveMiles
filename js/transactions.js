$(document).ready(function () {
    const gottenUser = JSON.parse(localStorage.getItem('user'));
    const email = gottenUser.email;
    const name = gottenUser.firstName
    $.ajax({
        type: 'GET',
        url: `http://localhost:3000/Transactions/?userEmail=${email}`,
        dataType: 'json'
    }).done(function (data) {
        $('#welcome').html(`<h2>Welcome, ${name}</h2>`)
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            if (data.length === 0){
                $('#transaction-table').html('<h2>You do not have any transaction</h2>')
            } else {
                $('.tbody').append(`
                <tr>
                  <td>${data[i].id}</td>
                  <td>${data[i].userEmail}</td>
                  <td>${data[i].date}</td>
                  <td>${data[i].type}</td>
                  <td>${data[i].amount}</td>
                </tr>`);}
        }
        // $.map(data, function (transaction, i) {
          
        // });
      });
})