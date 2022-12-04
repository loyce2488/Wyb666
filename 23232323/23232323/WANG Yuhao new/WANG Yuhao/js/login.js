$(document).ready( function() { // Wait until document is fully parsed



    const adminButton = $("#adminsignin")
    const userButton = $("#usersignin")
    adminButton.on("click", function(event) {
        event.preventDefault();
        const adminusername = $("#adminusername").val()
        const adminpassword = $("#adminpassword").val()
        $.ajax({
            url: "http://localhost:3002/checkuserinfo",
            method: "POST",
            dataType: 'json',
            data:{
                "username":adminusername,
                "password":adminpassword,
                "admin":1,
            },
            
            complete: (res) => {
                console.log(res)
                if (res.responseText == "ok"){
                    alert('Login Successfully!');
                    location.replace("/")
                }
                else if (res.responseText == "1"){
                    alert('The account has not been created, please go to register!');
                }
                else if (res.responseText == "2"){
                    alert('The password is incorrect!');
                }
                else {
                    alert('The user is not an admin!');
                }
            },
            // error: function (err){ alert(err.responseText)}
        })
    })

    userButton.on("click", function(event) {
        event.preventDefault();
        const username = $("#username").val()
        const password = $("#userpassword").val()
        $.ajax({
            url: "http://localhost:3002/checkuserinfo",
            method: "POST",
            dataType: 'json',
            data:{
                "username":username,
                "password":password,
                "admin":2,
            },
            
            complete: (res) => {
                console.log(res)
                if (res.responseText == "ok"){
                    alert('Login Successfully!');
                    location.replace("/")
                }
                else if (res.responseText == "1"){
                    alert('The account has not been created, please go to register!');
                }
                else if (res.responseText == "2"){
                    alert('The password is incorrect!');
                }
                else {
                    alert('The user is an admin!');
                }
            },
            // error: function (err){ alert(err.responseText)}
        })
    })
})