For Part 1 of Lab 3 I spent some deal of time trying to decide on which external API that I wanted to implement - I plan on using this API for the rest of the semester so I wanted it to be something that had a lot of information and something that I would enjoy going back to. After lot's of deliberation, I chose to settle on the pokemon API, the one that I would also be using for my term project. It would be a good way for me to get used to the endpoints and how to access the data when I work on the term project. Throughout the entire process of this lab, I was fiddling around with the front end/ user interface of this web application. It was frustrating trying to figure out how to make the page presentable on a phone, but I eventually messed around with the sizes of the font and elements to make it scaled better to the mobile screen. 
For my API, I used to levels of depth. The endpoints are broken up as /pokemon/name and /text/name. The pokemon endpoint holds information about the pokemon such as its type, height, weight, and abilities. The text endpoint returns other information about the pokemon, but specifically a small description about it in a sentence or two. My API has GET, POST, PUT, DELETE listed as options, but every choice but GET just returns a message saying that that action is not available yet. The GET action followed by the user inputting a pokemon name will return information about it as mentioned before along with a sprite image of it.
I spent most of the time on this lab as mentioned before styling the app to account for varying screen sizes. I spent a little bit of time figuring out how to parse my user input and turn that into an API call that works everytime. Sometimes I could input a name of a pokemon that doesnt exist but something wrong may happen; the API call fails entirely or theres missing information. I setup my API to work on localhost:3000, but I was also curious on being able to try my app on different devices while the server was still running. I use javascript to grab the current URL (it could be localhost or the ip address of the machine i was running the server on) and the API call will still be successful. The external api that I used only accepted all lowercase inputs, which called for extra input handling. Towards the very end of the work on this lab, I spent my time making a lot of quality of life changes, making sure animations between the input and the actual data being shown was smooth. During these switches between interfaces, I needed to make sure the data from the previous search was removed so that the next user input doesn't see something old. 

Resources:
https://www.w3schools.com/html/html_favicon.asp
https://www.w3schools.com/jsref/jsref_split.asp
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
https://restfulapi.net/http-status-codes/
https://www.w3schools.com/jsref/jsref_foreach.asp
https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-wrap
https://stackoverflow.com/questions/11722400/programmatically-change-the-src-of-an-img-tag
https://www.geeksforgeeks.org/express-js-app-post-function/
https://www.w3schools.com/cssref/css3_pr_mediaquery.asp
https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
https://developer.mozilla.org/en-US/docs/Web/CSS/position
https://www.w3schools.com/jsref/met_element_setattribute.asp
https://stackoverflow.com/questions/48070987/how-to-get-user-input-from-javascript-form
