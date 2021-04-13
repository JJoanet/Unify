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
        $('tbody').append(newNews);

        var newsIcon = $('<td>');
        newNews.append(newsIcon);
        var newsImage = $('<img>');
        newsIcon.append(newsImage);

        newsImage.attr('src', unionImage[i])
        
        var newsName = $('<tr>');
        newNews.append(newsName);

        var newsLink = $('<a>');
        newsName.append(newsLink)

        newsLink.attr('href', unionUrl[i]);
        newsLink.text(unionList[i]);
        
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
