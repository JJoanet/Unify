$("document").ready(function(){
    $(".dropdown-trigger").dropdown();     
})



// Union data from google scraper, variable storage.
var unionUrl = new Array;
var unionList = new Array;
var unionImage = new Array;
var googleScraper = 'https://app.zenserp.com/api/v2/search?apikey=d4fd77b0-9c72-11eb-982b-7da4a2ec72b5&q=EmtandParamedicUnion&lat=41.881832&lon=-87.623177&num=20&tbm=nws';

fetch (googleScraper)
    .then(response =>{
        console.log(response);
        return response.json();
    })
    .then(data => {
        console.log(data);

        for( i = 0; i < 6; i++ ){
        unionList.push(data.news_results[i].title);
        unionUrl.push(data.news_results[i].link);
        unionImage.push(data.news_results[i].thumbnail);
        
        var newNews = $('<tr>');
        $('#news').append(newNews);

        var newsIcon = $('<td>');
        newNews.append(newsIcon);
        var newsImage = $('<img>');
        newsIcon.append(newsImage);

        newsImage.attr('src', unionImage[i])
        
        var newsName = $('<td>');
        newNews.append(newsName);

        var newsLink = $('<a>');
        newsName.append(newsLink)

        newsLink.attr('href', unionUrl[i]);
        newsLink.text(unionList[i]);
        newsLink.attr('target', '_blank');
        
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
