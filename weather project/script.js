const settings = {
	async: true,
	crossDomain: true,
	url: 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=London&days=3',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '62a0faa66amsh107644d42b5345cp10982bjsnf1ecc908f59b',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});