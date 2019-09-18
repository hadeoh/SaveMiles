function upgradeAcct() {
    $('.enrol').submit(function (e) {
        e.preventDefault();
        const businessName = $('#bus-name').val();
        const businessCategory = $('#bus-category').val();
        const businessNo = $('#bus-no').val();
        const accountType = 'Business'
        const gottenUser = JSON.parse(localStorage.getItem('user'));
        const userId = gottenUser.id;
        const url = $(this).attr('action');

        if (businessName === '') {
            alert("Please enter the name of your business");
          } else if (businessCategory === '') {
            alert("Please enter the category of your business");
          } else if (businessNo === '') {
            alert("Please enter your CAC identification number");
          } else {
                $.get(url+`?id=${userId}`, (data) => {
                    const gottenId = data[0].id;
                    const fName = data[0].firstName;
                    const lName = data[0].lastName;
                    const pNumber = data[0].phoneNumber;
                    const userEmail = data[0].email;
                    const pWord = data[0].password;
                    const acctType = data[0].accountType;
                    if (acctType === 'Personal') {
                        $.ajax({
                            url: url+`/${gottenId}`,
                            type: 'PUT',
                            data: {
                                firstName: fName,
                                lastName: lName,
                                email: userEmail,
                                phoneNumber: pNumber,
                                password: pWord,
                                accountType: 'Business',
                                businessCategory,
                                businessName,
                                businessNo
                            },
                            success: function(){
                                $('.panel').html(`
                                <h2>You have successfully upgraded your account to a business account</h2>
                                <h3>Your business details are </h3>
                                <b>Business Name: </b>${businessName}<br>
                                <b>Business Category: </b>${businessCategory} <br>
                                <b>CAC No: </b>${businessNo} <br>
                                <b>Account Type: </b>${userAcctType} <br>
                            `);
                        }
                    })
                } else {
                    alert("You already have a business account")
                }
            })
        }
        return false;
    })
}