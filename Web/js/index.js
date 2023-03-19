const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2ab4ef1dc0mshc0ce097e638ddd4p156e41jsnf2a2f1629952',
		'X-RapidAPI-Host': 'f1-live-motorsport-data.p.rapidapi.com'
	}
};

fetch('https://f1-live-motorsport-data.p.rapidapi.com/session/2757', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


	