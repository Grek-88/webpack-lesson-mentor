fetch(`http://restcountries.eu/rest/v2/all`).then(response => response.json())
    .then(data => {
        let countries = JSON.stringify(data);
        // console.log(countries);
    });