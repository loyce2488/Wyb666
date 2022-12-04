$(document).ready( function() { // Wait until document is fully parsed
    $('#form_part2').submit(function(event){
        event.preventDefault();
      });

    const submitButton = $("#submit")
    submitButton.on("click", function(event) {
        event.preventDefault();
        const username = $("#username").val()
        const password = $("#password").val()
        const profile = document.getElementById("profile")
        const gender = $("#gender").val()
        const nickname = $("#nickname").val()
        const email = $("#email").val()
        const birthday = $("#birthday").val()
        console.log(`username: ${username}`)
        console.log(`password: ${password}`)
        console.log(`profile: ${profile}`)
        console.log(`gender: ${gender}`)
        console.log(`nickname: ${nickname}`)
        console.log(`birthday: ${birthday}`)
        
        // const files = profile.files
        // console.log(files[0])
        // for (let f of files){
        //     console.log(f)
        // }

        $.ajax({
            url: "http://localhost:3002/saveuserinfo",
            method: "POST",
            dataType: 'json',
            data:{
                "username":username,
                "password":password,
                "gender":gender,
                "nickname":nickname,
                "email":email,
                "birthday":birthday
            },
            
            complete: (res) => {
                console.log(res)
                if (res.responseText == "ok"){
                    alert('User Created Successfully!');
                    location.replace("/login")
                }
                else{
                    alert('Failed to Create Account!');
                }
            },
            // error: function (err){ alert(err.responseText)}
        })
    })
})



