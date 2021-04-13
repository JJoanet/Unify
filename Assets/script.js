$("document").ready(function(){
    $(".dropdown-trigger").dropdown();     
})



// Union data from google scraper, variable storage.
var unionUrl = new Array;
var unionList = new Array;
var googleScraper = 'http://api.serpstack.com/search?access_key=66ecd70620e9cb687f76f203d80f15b9&period=last_year&sort=relevance&query=Emt_and_Paramedic_Union&location=Chicago';

fetch (googleScraper)
    .then(response =>{
        console.log(response);
        return response.json();
    })
    .then(data => {
        console.log(data);

        for( i = 0; i < 7; i++ ){
        unionList.push(data.organic_results[i].title);
        unionUrl.push(data.organic_results[i].url);
        console.log(unionUrl[i]);
        console.log(unionList[i]);
        };
        return {
            data
        };
    });
// End union data from google scraper, variable storage.


// Start map implementation.
var mapScript = $('<script>');

mapScript.attr('src', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCXxbXnmIhFftM2cyfO5bVSUGJ6MqHSCDM&callback=myMap');
mapScript.async = true;

$('head').append(mapScript);

let map;

function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(41.881832,-87.623177),
      zoom:12,
    };
    var map = new google.maps.Map(document.getElementById("mapCanvas"),mapProp);
}
// End map implementation.






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
