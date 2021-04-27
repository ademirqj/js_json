const url1 = new URL('http://worldclockapi.com/api/json/est/now');
const url2 = new URL('http://worldclockapi.com/api/json/utc/now');

function fetchData() {
    fetch(url1)
        .then(response => {
            console.log(response);
            if (!response.ok) {
                throw Error("ERROR");
            }
            return response.json();
        })
        .then(data => {
            console.log(data)
            const response = [data]
            document.getElementById("showhtml").innerHTML = `
            <h3>Eastern Standard Time JSON content</h3>
            <p>Time: ${(data.currentDateTime)}</p>
            <p>Off Set: ${data.utcOffset}</p> 
            <p>Day: ${data.dayOfTheWeek} </p>
            <p>Time Zone: ${data.timeZoneName}</p>   
            <p>File: ${data.currentFileTime} </p>
            <p>Ordinal Date: ${data.ordinalDate}</p>             
            <p>Eastern Standard Time JSON <a href="http://worldclockapi.com/api/json/est/now" target="_blank">Show in Browse</a></p>
            `
        })
        .catch(error => {
            console.log(error);
        });
    fetch(url2)
        .then(response => {
            console.log(response);
            if (!response.ok) {
                throw Error("ERROR");
            }
            return response.json();
        })
        .then(data => {
            console.log(data)
            const response = [data]
            document.getElementById("showhtml2").innerHTML = `
            <h3>Coordinated Universal Time JSON content</h3>
            <p>Time: ${(data.currentDateTime)}</p>
            <p>Off Set: ${data.utcOffset}</p> 
            <p>Day: ${data.dayOfTheWeek} </p>
            <p>Time Zone: ${data.timeZoneName}</p>   
            <p>File: ${data.currentFileTime} </p>
            <p>Ordinal Date: ${data.ordinalDate}</p>             
            <p>Coordinated Universal Time JSON <a href="http://worldclockapi.com/api/json/est/now" target="_blank">Show in Browse</a></p>
            `
        })
        .catch(error => {
            console.log(error);
        });

}

fetchData();