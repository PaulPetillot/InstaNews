$('select').on('change', function(){
    var url = "https://api.nytimes.com/svc/topstories/v2/"+$('select').val()+".json";
    url += '?' + $.param({
        'api-key': "82f12f3e4189492f86578cb2d4e6add0"
       });
    
    //Make the request
    //For a single article console log the data
    //Put the data on the page
    $.ajax({
        url: url,
        method: 'GET',
       }).done(function(data) { 
        $('.oneArticle').empty();
        for(var i=0; i<12; i++){
        console.log(data.results[i].abstract);
        // const abstract = data.results[0].abstract;
        console.log(data.results[i].multimedia[4]);
        // const image = data.results[0].multimedia[0];
        console.log(data.results[i].url);
        // const url = data.results[0].url;
        var $img = data.results[i].multimedia[4].url;
        var $url = data.results[i].url;
        var $description = data.results[i].abstract;
        console.log(data);
        $('.oneArticle').append('<a href="'+$url+'"class="articleLink"><img src="'+$img+'" class="articleImage"><h2 class="articleDescription">'+ $description+ '</h2></a>')
        }
        
       }).fail(function(err) {
        throw err;
       });      
})



//Create a loop for the articles


//Listen for change for the select list

//Filter the different request

//Move the logo



