For the beginning of this lab, I first had to figure out and read the documentation for the Open Weather API. I had to figure out which information that I wanted to take from the API whenever I made a call. The values that I ended up using were temperature, weather description, feels like temperature, wind speed and the link to an image for the weather. I made the app have two ways to call the api for information on the weather of a specific location. The first way uses geolocation and takes the latitude and longitude of the user. I take those values and add them to the link in which I make the api call; I added an extra parameter to keep the units in imperial form. If the user tries to get the weather based on their location, the javascript will also output their coordinates.

If the user does not allow the page to get their location, then the page will send an alert to search for a town or change the permission to allow location. After entering the town the user can submit the information and the page will output the weather for that town without any longitude or latitude coordinates. Another small feature I added was that the background of the webpage changes based on the weather; I use the same image from the api call.

-----
POKEAPI:
https://pokeapi.co/docs/v2
This API includes a large database of information relation to all things related to the video game franchise Pokemon. This API is "consumption only" and so only the GET method is available on all of the resources available. PokeAPI organizes their data into different groups based on their categories, and from those groups have some endpoints to access another topic of information. PokeAPI groups their information by berries, contests encounters, evolution, games, items, locations, machines, moves, and pokemon. All of these groups have different subsections which leads to a massive entity of information. This will be one of the APIs that my group will be using for the term project. The pokemon group has several different endpoints such as types, moves, characteristics and abilities in which we can access and use to build our project. I love that the api has an abundance of information of different endpoints; if there was anything that we needed in terms of data, we only have to go to this API. 

Instagram Data:
https://rapidapi.com/logicbuilder/api/instagram-data1/
The Instagram Data API provides developers access to all sorts of information related to the social media platform. Only GET requests are available on the resources and theyre grouped into different categories such as hashtag, location, post, search and user. The user category has a ton of different endpoints including followers, stories and contact information. 

Exchange Rate API:
https://exchangeratesapi.io/documentation/
If there is any sort of information that you're interested in receiving, then there is a good chance that there is also an API out there that can provide those resources to you. There is an API that holds information on the exchange rates between the different currencies. They structured the information so that a currency is considered a base and then it has the different rates to be compared to. One of the base currency would equal the rate of another currency. If the API call was not successful, there are many different error codes that can be returned. The most common one being 404 in which the resource could not be found. Errors related to the API fall under the 100 codes, like if the API was not provided or the endpoint does not exist. If an invalid currency or symbol was entered then the API call would return a 200 error code. For other invalid entries, different levels of error codes are returned.

https://www.w3schools.com/jsref/prop_style_backgroundimage.asp
https://www.tutorialspoint.com/How-to-call-a-JavaScript-function-on-submit-form
https://www.w3schools.com/jsref/jsref_parseint.asp
https://www.w3schools.com/html/html5_geolocation.asp
https://openweathermap.org/api
