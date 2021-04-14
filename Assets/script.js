// Navbar Dropdown Ready Function
$("document").ready(function(){
    $(".dropdown-trigger").dropdown();     
})

$(document).ready(function(){
    $('.modal').modal();
});

// Union data from google scraper, variable storage.
// var unionUrl = new Array;
// var unionList = new Array;
// var unionImage = new Array;
// var googleScraper = 'https://app.zenserp.com/api/v2/search?apikey=d4fd77b0-9c72-11eb-982b-7da4a2ec72b5&q=EmtandParamedicUnion&lat=41.881832&lon=-87.623177&num=20&tbm=nws';

// fetch (googleScraper)
//     .then(response =>{
//         console.log(response);
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);

//         for( i = 0; i < 6; i++ ){
//         unionList.push(data.news_results[i].title);
//         unionUrl.push(data.news_results[i].link);
//         unionImage.push(data.news_results[i].thumbnail);
        
//         var newNews = $('<tr>');
//         $('#news').append(newNews);

//         var newsIcon = $('<td>');
//         newNews.append(newsIcon);
//         var newsImage = $('<img>');
//         newsIcon.append(newsImage);

//         newsImage.attr('src', unionImage[i])
        
//         var newsName = $('<td>');
//         newNews.append(newsName);

//         var newsLink = $('<a>');
//         newsName.append(newsLink)

//         newsLink.attr('href', unionUrl[i]);
//         newsLink.text(unionList[i]);
//         newsLink.attr('target', '_blank');
        
//         };
//         return {
//             data
//         };
//     });
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

// Active Table Element
var tableContainer = $("#listofUnions");
var tableRow = $("#listofUnions .tablerow");

for (var i = 0; i < tableRow.length; i++){
    tableRow[i].addEventListener("click", function() {
        var current = $(".activetable");
        
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" activetable", "");
        }
        this.className += " activetable"
        
        email = $(".activetable").find("#email").text();
    })
}



// Email to Union on Form Submission
$("form").on("submit", function(event){
    event.preventDefault();

    // Variable Storage for User Inputs
    let firstName = $("#first-name").val();
    let lastName = $("#last-name").val();
    let comments = $("#comments").val();
    let phoneNumber = $("#phone").val();
    
    // Email Template
    let message = "Hello, %0D%0A%0D%0AMy name is " + firstName + " " + lastName + " and I wanted to reach out to you about canvassing for UNION%0D%0Aplease email me";
    let additionalComments = "%0D%0A%0D%0AThis is an automatically generated email. Additional comments from " + firstName + " are shown below: %0D%0A%0D%0A" + comments;

    // Opens Email Client with Populated Text
    window.open("mailto:" + email + "?subject=sub&body="+ message + additionalComments);
})


// Add a new union
var acceptButton = $('#acceptButton');
var newPhone = $('#newPhone');
var newEmail = $('#newEmail');
var newUrl = $('#newUrl');
var newName = $('#newName');
var newinputList = new Array;

// Accept button on modal form to add union data.
acceptButton.on('click', function(){
    if (localStorage.getItem('savedUnions') !== null) {
        newinputList = JSON.parse(localStorage.getItem("savedUnions"));
    };

    var newInput = {
        Name: newName.val(),
        Phone: newPhone.val(),
        Email: newEmail.val(),
        Url: newUrl.val()
    }

    var newunionRow = $('<tr>');
    newunionRow.attr('class', 'tablerow');
    $('#listofUnions').append(newunionRow);

    var newunionName = $('<td>');
    newunionName.text(newInput.Name);
    newunionRow.append(newunionName);

    var newunionUrl = $('<td>');
    newunionUrl.text(newInput.Url);
    newunionRow.append(newunionUrl);
    var newunionLink = $('<a>');
    newunionLink.attr('href', newInput.Url);
    newunionUrl.append(newunionLink);

    var newunionPhone = $('<td>');
    newunionPhone.text(newInput.Phone);
    newunionRow.append(newunionPhone);

    var newunionEmail = $('<td>');
    newunionEmail.text(newInput.Email);
    newunionRow.append(newunionEmail);
    
    newinputList.push(newInput);
    localStorage.setItem('savedUnions', JSON.stringify(newinputList));

    newPhone.val("");
    newEmail.val("");
    newName.val("");
    newUrl.val("");
    return newinputList;
})

// Queries local storage and updates union list with storage data.
function localstorageUpdate(){
    savedUnions = JSON.parse(localStorage.getItem('savedUnions'));
    console.log(savedUnions);

    for( i = 0; i < savedUnions.length; i++ ){

        var newsavedRow = $('<tr>');
        newsavedRow.attr('class', 'tablerow');
        $('#listofUnions').append(newsavedRow);

        var newsavedName = $('<td>');
        newsavedName.text(savedUnions[i].Name);
        newsavedRow.append(newsavedName);

        var newsavedUrl = $('<td>');
        newsavedUrl.text(savedUnions[i].Url);
        newsavedRow.append(newsavedUrl);
        var newsavedLink = $('<a>');
        newsavedLink.attr('href', savedUnions[i].Url);
        newsavedUrl.append(newsavedLink);

        var newsavedPhone = $('<td>');
        newsavedPhone.text(savedUnions[i].Phone);
        newsavedRow.append(newsavedPhone);

        var newsavedEmail = $('<td>');
        newsavedEmail.text(savedUnions[i].Email);
        newsavedRow.append(newsavedEmail);
    }

}

// Checks if local storage is present, updates list if present.
if (localStorage.getItem('savedUnions') !== null) {
    localstorageUpdate()
};

