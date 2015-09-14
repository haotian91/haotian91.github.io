var app = app || {};

app.main = (function(){

//get date from the text box

var inputDate = function(){
	console.log('input date');

	$('#search-button').off('click').on('click', function(){
		getData($('#search-box').val());
	});

	$('#search-box').keypress(function(e) {
		if (e.keyCode == 13) {
			getData($('#search-box').val());
		}
	});		
};	
 
var getData = function(date){
	console.log('url got');
	var gameUrl = 'http://football-api.com/api/?Action=fixtures&APIKey=8929efd6-3749-914d-e0d1cc61d522&match_date=' + date;

	$.getJSON(gameUrl, function(json){
			console.log('data received');

			var locTeamName = json.matches.match_localteam_name;
			console.log(locTeamName);
	});
};

// cor
// Create the XHR object.
function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // XHR for Chrome/Firefox/Opera/Safari.
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // CORS not supported.
    xhr = null;
  }
  return xhr;
}

// Helper method to parse the title tag from the response.
function getTitle(text) {
  return text.match('<title>(.*)?</title>')[1];
}

// Make the actual CORS request.
function makeCorsRequest() {
  // All HTML5 Rocks properties support CORS.
  var url = 'http://updates.html5rocks.com';

  var xhr = createCORSRequest('GET', url);
  if (!xhr) {
    alert('CORS not supported');
    return;
  }

  // Response handlers.
  xhr.onload = function() {
    var text = xhr.responseText;
    var title = getTitle(text);
    alert('Response from CORS request to ' + url + ': ' + title);
  };

  xhr.onerror = function() {
    alert('Woops, there was an error making the request.');
  };

  xhr.send();
}










var init = function(){
	inputDate();
};


	return{
		init: init
	};

})();

window.addEventListener('DOMContentLoaded', app.main.init);