function loginUser() {
    $('.enrol').submit(function (e) {
        e.preventDefault();
        const email = $('#emailAddress').val();
        const password = $('#password').val();
        const url = $(this).attr('action');
        if (email.trim().length < 1) {
            alert("Please enter your email address");
        } else if (password.trim().length < 1) {
            alert("Please enter your password");
        } else {
            $.ajax({
                url: url+`?email=${email}&&password=${password}`,
                type: 'GET',
                dataType: 'json'
               }).done((data)=>{
                   const { id, email, firstName } = data[0]
                   const userDetails = JSON.stringify({id, email, firstName})
                   localStorage.setItem("user",  userDetails);
                   if(data.length === 0){
                       alert('User login credentials incorrect')
                   } else {
                       window.location.replace('../html/transactions.html')
                   }
               })
             }
             return false;
        })
}
