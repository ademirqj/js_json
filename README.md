#Create a JavaScript to consume different JSON object URL.
### Find a way to use the API (http://worldclockapi.com/): 
### Requirements:
- You need to display the results on screen;

## Starting the Project

 - The objective  here is find a way to consume a URL JSON, and then we concetrate only in JavaScript code and make a basic html page to show this results.
 - We use Fetch API in JavaScript to make this. There are other ways, but we use JavaScript with Fetch.
 
##View JSON content
- To start we need to know what has inside the JSON, I use a free Google App  POSTMAN to make this.


#### GET FIRST JSON IN POSTMAN http://worldclockapi.com/api/json/est/now
```json
{
    "$id": "1",
    "currentDateTime": "2021-04-27T14:01-04:00",
    "utcOffset": "-04:00:00",
    "isDayLightSavingsTime": true,
    "dayOfTheWeek": "Tuesday",
    "timeZoneName": "Eastern Standard Time",
    "currentFileTime": 132640056698540034,
    "ordinalDate": "2021-117",
    "serviceResponse": null
}
```

#### GET SECOND JSON IN POSTMAN http://worldclockapi.com/api/json/utc/now
```json
{
    "$id": "1",
    "currentDateTime": "2021-04-27T18:00Z",
    "utcOffset": "00:00:00",
    "isDayLightSavingsTime": false,
    "dayOfTheWeek": "Tuesday",
    "timeZoneName": "UTC",
    "currentFileTime": 132640200500437426,
    "ordinalDate": "2021-117",
    "serviceResponse": null
}
```

##Go to JavaScript.

- We just know what is inside the JSON, and now we make a way to work with this in java script.

- First of all we declare the constants to receive the URLs JSON.
```javascript
const url1 = new URL ('http://worldclockapi.com/api/json/est/now');
const url2 = new URL ('http://worldclockapi.com/api/json/utc/now');
```

- And next we create a function FETCHDATA to receive the URL of the constant and consume the JSON.

```javascript
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
        })
        .catch(error => {
            console.log(error);
        });

}

fetchData();
```


- I Just consume the results of JSON after this, but we need to show the results in screen and then we make a way to show in HTML.
- We create a getElement link with paragraph in index.html named "showhtml" and "showhtml2", and put the JSON content inside a paragraph.




```javascript
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

/**/
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
```
##The entire  JavaScript code.

```javascript
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
```

##Go to HTML.

- We create a basic html and link with the JavaScript through paragraph ID "showhtml" and "showhtml2" to show the content.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>World Time JSON</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Dosis:400,700" rel="stylesheet">

</head>

<body>
    <hr />
    <h1>Read a JSON using FETCH with JS .</h1>
    <hr />
    <p id="showhtml"></p>
    <hr />
    <p id="showhtml2"></p>
    <hr />
    <script src="script\script.js"></script>
</body>

</html>
```
#The Result
<img src="/img/resultimg.png">

###End
