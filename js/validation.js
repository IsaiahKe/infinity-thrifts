$(document).ready(function () {

    $('#loginForm').validate({ // initialize the plugin
        rules: {
            NAME: {
                required: true,
            },
            EMAIL: {
                required: true,
                email: true
            },
            PASSWORD: {
                required: true,
            }
        },
        messages : {
            NAME: {
               required: "Username is required",
            },
            EMAIL: {
                required: "Email is required",
                email: "The email should be in the format: abc@domain.tld"
            },
            PASSWORD: {
                required: "Password is required",
            }
            },
        submitHandler:function(form){
            window.location="home.html";
        }
    });


});