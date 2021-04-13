$("document").ready(function(){
    $(".dropdown-trigger").dropdown();     
})





let firstName = $("#first-name");
let lastName = $("#last-name");
let password = $("#password");
let email = $("#email");
let form = $("#form");
let submitBtn = $("#submit");




$("form").on("submit", function(event){
    event.preventDefault();
    console.log("form submitted");
    
    console.log(firstName.val());
    console.log(lastName.val())
    console.log(password.val());
    console.log(email.val());

    let message = "Hi, my name is " + firstName.val() + " " + lastName.val() + ".";
    let subject = "Union Canvassing";
    console.log(message);
    + "Please get back to me at EMAIL or PHONE NUMBER.",
    window.open("mailto:mreisdorf9717@gmail.com?subject="+subject+"&body="+message+"\r\n some more text. I wanted to reach out to you regarding canvassing for UNION. Please get back to me at EMAIL or PHONE NUMBER. Thanks");
})

