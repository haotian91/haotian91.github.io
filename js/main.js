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
	var gameUrl = 'http://cors.io/?u= http://football-api.com/api/?Action=fixtures&APIKey=8929efd6-3749-914d-e0d1cc61d522&match_date=' + date;

	$.getJSON(gameUrl, function(json){
			console.log('data received');

			var locTeamName = json.DeveloperAuthentication;
			console.log(locTeamName);
	});
};


var init = function(){
	inputDate();
};


	return{
		init: init
	};

})();

window.addEventListener('DOMContentLoaded', app.main.init);