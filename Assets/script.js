// Navbar Dropdown Ready Function
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


// Email to Union on Form Submission
$("form").on("submit", function(event){
    event.preventDefault();

    // Variable Storage for User Inputs
    let firstName = $("#first-name").val();
    let lastName = $("#last-name").val();
    let comments = $("#comments").val();
    let phoneNumber = $("#phone").val();
    

    // Testing in log
    console.log("form submitted");
    console.log(firstName);
    console.log(lastName)
    console.log(comments);
    console.log(phoneNumber);

    // Email Template
    let message = "Hello, %0D%0A%0D%0AMy name is " + firstName + " " + lastName + " and I wanted to reach out to you about canvassing for UNION%0D%0Aplease email me";
    console.log(message); // Message Testing
    let additionalComments = "%0D%0A%0D%0AThis is an automatically generated email. Additional comments from " + firstName + " are shown below: %0D%0A%0D%0A" + comments;
    console.log(additionalComments);

    // Opens Email Client with Populated Text
    window.open("mailto:mreisdorf9717@gmail.com?subject=sub&body="+ message + additionalComments);
})
