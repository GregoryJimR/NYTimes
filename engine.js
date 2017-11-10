// Built by LucyBot. www.lucybot.com


// reference this in a for loop.  If the slection is '10', then i < '10'
var q;
var returnCount;
var beginDate;
var endDate;
var apiKey = "deb049fda2fd440a91f8eac55e615ab9"




// var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
// url += '?' + $.param({
//   'api-key': "565edd31997145f993511ca4dd780a6a"
// });


$("#search").on("click", function() {
  var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?" + "api-key=" + apiKey + "?q=" + q + "?begin_date=" + beginDate + "?end_date=" + endDate;
  q = $("#firstInput").text();
  returnCount = $("#numRecordSelector").val();
  beginDate = $("#secondInput").text();
  endDate = $("#thirdInput").text
  console.log("q: " + q);


  $.ajax({
    url: queryUrl,
    method: 'GET',
  }).done(function(result) {
    //   for (var i = 0; i < returnCount; i++) {

    // }
    console.log(result);

  }).fail(function(err) {
    throw err;
  });


});
$("#clear").on("click", function() {
  q = '';
  returnCount = '';
  beginDate = '';
  endDate = '';
});
