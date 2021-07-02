$(document).ready(function () {
    $('#signUpForm').validate({
        rules: {
            username: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                minlength:10,
                maxlength:14,
            },
            password: {
                required: true,
                minlength:6,
            }
        },
        messages : {
            username: {
               required: "Username is required",
            },
            email: {
                required: "Email is required",
                email: "The email should be in the format: abc@domain.tld"
            },
            phone: {
                required: "Phone number is required",
                minlength:"The phone number should have atleast  10 values",
                maxlength:"The phone number should have atmost  14 values",
            },
            password: {
                required: "Password is required",
                minlength:"The password should have atleast six characters/digits",
            }
            },
        submitHandler:function(form){
            window.location="index.html";
        }
    });
});
