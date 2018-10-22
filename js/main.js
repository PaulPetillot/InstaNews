var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
url += '?' + $.param({
    'api-key': "82f12f3e4189492f86578cb2d4e6add0"
   });
var urlTechSection = ""
urlTechSection += '?' + $.param({
    'api-key': "82f12f3e4189492f86578cb2d4e6add0"
   });
var urlSportSection = ""
urlSportSection += '?' + $.param({
    'api-key': "82f12f3e4189492f86578cb2d4e6add0"
   });
var urlArtSection = ""
urlArtSection += '?' + $.param({
    'api-key': "82f12f3e4189492f86578cb2d4e6add0"
    });
var urlStyleSection = ""
urlStyleSection += '?' + $.param({
    'api-key': "82f12f3e4189492f86578cb2d4e6add0"
    });


//Make the request
//For a single article console log the data
//Put the data on the page
$.ajax({
    url: url,
    method: 'GET',
   }).done(function(data) {
    console.log(data.results[0].abstract);
    // const abstract = data.results[0].abstract;
    console.log(data.results[0].multimedia[0]);
    // const image = data.results[0].multimedia[0];
    console.log(data.results[0].url);
    // const url = data.results[0].url;
    var $img = data.results[0].multimedia[0].url;
    var $url = data.results[0].url;
    var $description = data.results[0].abstract;
    $('.articleImage').attr("src", $img);
    $('.articleLink').attr("href", $url);
    $('.articleDescription').attr("h2", $description);
   }).fail(function(err) {
    throw err;
   });

   


//Create a loop for the articles


//Listen for change for the select list

//Filter the different request

//Move the logo



