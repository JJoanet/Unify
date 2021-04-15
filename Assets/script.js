var serpKey = config.zenSerp;
var mapsKey = config.mapsGoogle;
var geoKey = config.geocodeGoogle;
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
// var googleScraper = 'https://app.zenserp.com/api/v2/search?apikey=' + serpKey + '&q=EmtandParamedicUnion&lat=41.881832&lon=-87.623177&num=20&tbm=nws';

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

// Add a new union
var acceptButton = $('#acceptButton');
var newPhone = $('#newPhone');
var newEmail = $('#newEmail');
var newUrl = $('#newUrl');
var newName = $('#newName');
var newstreetNumber = $('#newstreetNumber')
var newstreetName = $('#newstreetName')
var newCity = $('#newCity')
var newState = $('#newState')
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
        Url: newUrl.val(),
        streetNumber: newstreetNumber.val(),
        streetName: newstreetName.val(),
        City: newCity.val(),
        State: newState.val()
    }

    if(newInput.Name === ""){
        alert("Union name is a required field!")
    } else if(newInput.Email === ""){
        alert("Contact email is a required field!")
    } else if(newInput.Url === ""){
        alert("Union website is a required field!")
    } else {

        // console.log(typeof newInput.Phone)
        // console.log(newInput.Phone)
        var newunionRow = $('<tr>');
        newunionRow.attr('class', 'tablerow');
        $('#listofUnions').append(newunionRow);
    
        var newunionName = $('<td>');
        newunionName.text(newInput.Name);
        newunionName.attr("id", "unionName");
        newunionName.attr('class', 'col s3');
        newunionRow.append(newunionName);
    
        var newunionUrl = $('<td>');
        newunionUrl.attr('class', 'col s3');
        newunionRow.append(newunionUrl);

        var newunionLink = $('<a>');
        newunionLink.attr('href', newInput.Url);
        newunionLink.attr("class", "truncate");
        newunionLink.text(newInput.Url);
        newunionUrl.append(newunionLink);
    
        var newunionPhone = $('<td>');
        newunionPhone.text(newInput.Phone);
        newunionPhone.attr('class', 'col s3');
        newunionRow.append(newunionPhone);

        var newAddress = $('<td>');
        newAddress.text(newInput.streetNumber + " " + newInput.streetName + " " + newInput.City + "," + " " + newInput.State);
        newAddress.attr('class', 'col s3');
        newunionRow.append(newAddress);

        var newhiddenstreetNumber = $('<td>');
        newhiddenstreetNumber.text(newInput.streetNumber)
        newhiddenstreetNumber.attr('class', 'hide');
        newhiddenstreetNumber.attr('id', 'streetNumber');
        newunionRow.append(newhiddenstreetNumber);

        var newhiddenstreetName = $('<td>');
        newhiddenstreetName.text(newInput.streetName)
        newhiddenstreetName.attr('class', 'hide');
        newhiddenstreetName.attr('id', 'streetName');
        newunionRow.append(newhiddenstreetName);

        var newhiddenCity = $('<td>');
        newhiddenCity.text(newInput.City)
        newhiddenCity.attr('class', 'hide');
        newhiddenCity.attr('id', 'City');
        newunionRow.append(newhiddenCity);

        var newhiddenState = $('<td>');
        newhiddenState.text(newInput.State)
        newhiddenState.attr('class', 'hide');
        newhiddenState.attr('id', 'State');
        newunionRow.append(newhiddenState);
    
        var newunionEmail = $('<td>');
        newunionEmail.attr("id", "email");
        newunionEmail.attr('class', 'col s3 hide');
        newunionEmail.text(newInput.Email);
        newunionRow.append(newunionEmail);
        
        newinputList.push(newInput);
        localStorage.setItem('savedUnions', JSON.stringify(newinputList));
    
        newPhone.val("");
        newEmail.val("");
        newName.val("");
        newUrl.val("");
        newstreetNumber.val("");
        newstreetName.val("");
        newCity.val("");
        newState.val("");
        $('#modal1').modal('close');
        activeRow();
        return newinputList;
    }
        
})

// Queries local storage and updates union list with storage data.
function localstorageUpdate(){
    savedUnions = JSON.parse(localStorage.getItem('savedUnions'));
    // console.log(savedUnions);

    for( i = 0; i < savedUnions.length; i++ ){

        var newsavedRow = $('<tr>');
        newsavedRow.attr('class', 'tablerow');
        $('#listofUnions').append(newsavedRow);

        var newsavedName = $('<td>');
        newsavedName.text(savedUnions[i].Name);
        newsavedName.attr("id", "unionName");
        newsavedName.attr('class', 'col s3');
        newsavedRow.append(newsavedName);

        var newsavedUrl = $('<td>'); 
        newsavedUrl.attr('class', 'col s3');
        newsavedRow.append(newsavedUrl);

        var newsavedLink = $('<a>');
        newsavedLink.attr('href', savedUnions[i].Url);
        newsavedLink.attr("class", "truncate");
        newsavedLink.text(savedUnions[i].Url);
        newsavedUrl.append(newsavedLink);

        var newsavedPhone = $('<td>');
        newsavedPhone.attr('class', 'col s3');
        newsavedPhone.text(savedUnions[i].Phone);
        newsavedRow.append(newsavedPhone);

        var newsavedAddress = $('<td>');
        newsavedAddress.text(savedUnions[i].streetNumber + " " + savedUnions[i].streetName + " " + savedUnions[i].City + "," + " " + savedUnions[i].State);
        newsavedAddress.attr('class', 'col s3');
        newsavedRow.append(newsavedAddress);

        var newsavedhiddenstreetNumber = $('<td>');
        newsavedhiddenstreetNumber.text(savedUnions[i].streetNumber)
        newsavedhiddenstreetNumber.attr('class', 'hide');
        newsavedhiddenstreetNumber.attr('id', 'streetNumber');
        newsavedRow.append(newsavedhiddenstreetNumber);

        var newsavedhiddenstreetName = $('<td>');
        newsavedhiddenstreetName.text(savedUnions[i].streetName)
        newsavedhiddenstreetName.attr('class', 'hide');
        newsavedhiddenstreetName.attr('id', 'streetName');
        newsavedRow.append(newsavedhiddenstreetName);

        var newsavedhiddenCity = $('<td>');
        newsavedhiddenCity.text(savedUnions[i].City)
        newsavedhiddenCity.attr('class', 'hide');
        newsavedhiddenCity.attr('id', 'City');
        newsavedRow.append(newsavedhiddenCity);

        var newsavedhiddenState = $('<td>');
        newsavedhiddenState.text(savedUnions[i].State)
        newsavedhiddenState.attr('class', 'hide');
        newsavedhiddenState.attr('id', 'State');
        newsavedRow.append(newsavedhiddenState);

        var newsavedEmail = $('<td>');
        newsavedEmail.attr("id", "email");
        newsavedEmail.attr('class', 'col s3 hide');
        newsavedEmail.text(savedUnions[i].Email);
        newsavedRow.append(newsavedEmail);
        

       
    }

    

}

// Checks if local storage is present, updates list if present.
if (localStorage.getItem('savedUnions') !== null) {
    localstorageUpdate()
};

// Active Table Element
var streetNumber;
var streetName;
var City;
var State ;
var email;
var unionName;

$('#listofUnions').on('click', function(e){
    // console.log(e.target);
    e.stopPropagation();
    var currentTr = $(e.target)
    currentTr.addClass('activetable')
    email = $(".activetable").find("#email").text();
    streetNumber = $(".activetable").find("#streetNumber").text();
    streetName = $(".activetable").find("#streetName").text();
    City = $(".activetable").find("#City").text();
    State = $(".activetable").find("#State").text();
    unionName = $(".activetable").find("#unionName").text();
    console.log(unionName);
    // console.log(email, streetNumber, streetName, City, State)
    pullgeoCode(streetNumber, streetName, City, State);
    currentTr.removeClass('activetable');
    return;
})


// Address Input GeoCoding

var selectedLat;
var selectedLon;

function pullgeoCode(streetNumber, streetName, City, State){
    // console.log(streetNumber)
    var trimmedstreetNumber =streetNumber.split(' ').join('+');
    var trimmedstreetName =streetName.split(' ').join('+');
    var trimmedCity = City.split(' ').join('+');
    // console.log(trimmedstreetNumber, trimmedstreetName, trimmedCity, State);
   // console.log(trimmedstreetNumber, trimmedstreetName, trimmedCity, state)
    var geocodeApi = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + trimmedstreetNumber + '+' + trimmedstreetName + '+' + trimmedCity + ',+' + State + '&key=' + geoKey;

    fetch (geocodeApi)
        .then(response =>{
            return response.json();
        })
        .then(data => {
            // console.log(data);
            selectedLat = data.results[0].geometry.location.lat;
            selectedLon = data.results[0].geometry.location.lng;
            // console.log(selectedLat, selectedLon)
            mapMarker();
            return {
                selectedLat,
                selectedLon
            }
        });

}

// Start map implementation.
var mapScript = $('<script>');

mapScript.attr('src', 'https://maps.googleapis.com/maps/api/js?key=' + mapsKey + '&callback=initMap');
mapScript.async = true;

$('head').append(mapScript);

let map;

function initMap() {
    var mapProp= {
      center:new google.maps.LatLng(41.881832,-87.623177),
      zoom:2,
    };
    var map = new google.maps.Map(document.getElementById("mapCanvas"),mapProp);
}
// End map implementation.

// Pin Drop implementation
function mapMarker() {
    // console.log(selectedLat, selectedLon)
    const myLatLng = { lat: selectedLat, lng: selectedLon };
    const map = new google.maps.Map(document.getElementById("mapCanvas"), {
      zoom: 18,
      center: myLatLng,
    });
    new google.maps.Marker({
      position: myLatLng,
      map,
      title: "Test",
    });
  }
// Pin Drop End



// Email to Union on Form Submission
$("form").on("submit", function(event){
    event.preventDefault();
    
    // Variable Storage for User Inputs
    let firstName = $("#first-name").val();
    let lastName = $("#last-name").val();
    let comments = $("#comments").val();
    let phoneNumber = $("#phone").val();
    
    // Email Template
    let message = "Hello, %0D%0A%0D%0AMy name is " + firstName + " " + lastName + " and I wanted to reach out to you about canvassing for " + unionName + ".%0D%0A";
    let additionalComments = "%0D%0A%0D%0AThis is an automatically generated email. Additional comments from " + firstName + " are shown below: %0D%0A%0D%0A" + comments;
    let contactInfo = "%0D%0A%0D%0AYou can reach me at " + phoneNumber + " or by replying to this email.";
    // Opens Email Client with Populated Text
    window.open("mailto:" + email + "?subject=Canvassing&body="+ message + additionalComments + contactInfo);
})
