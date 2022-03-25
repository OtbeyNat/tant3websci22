in order to preload my database I wrote a script from my server.js file to insert 100 documents into the database, each with a different id number that would be used for the different endpoints. 
I created the 8 different endpoints for the database API which can be seen in the server.js file. GET request on /db finds all documents in the collection and returns the result. GET request on /db/number returns the document only with the id of the number in the header. POST request on /db inserts one document and gives it +1 of the highest id number in that collection of documents and gives it the name of the pokemon specified in the body of the request. POST request on db/number will return a 403 status error and will not perform any actions on the database. PUT request on /db will update all documents in the collection with the name specified in the body of the request header and db/number will only update the document with that id number. Delete request has the same logic but instead deletes the documents.
I was unable to get part 3 to work properly but the steps I took to attempt to finish it are as follows:
In app.component.ts, I created four functions: get, post, put, and delete. Post and put had a name and an id passed in as parameters while get and delete only has an id as a parameter. For any of the four functions, if the id was -1 it would make a request with its respective method to just the /db endpoint. If the id was not -1 then it would make a request to the /db/number endpoint. For some reason the new component I generated specifically for the mongo database is not working but I wrote code for it which in theory should have produced results. I have 4 buttons in mongo.component.html in which they call a function in the ts file for their respective methods. In the ts file, I made event emitters for each method which would then be processed by the parent component. The parent component would then run the functions mentioned earlier and then make the requests at their respective headers. 

During part 2 I was having trouble with sessions and connecting to the mongo database properly. Apparently client.close() would run before the actions I wanted to perform on the database finished. To remedy this I had to use .then() to make sure my functions in the code ran in the correct order.

To test in order to make sure my endpoints were working, I used a handy visual studio code extension that made rest api calls from the editor itself. I created another filed called route .rest and gave it request headers along with a body of information. With my server running and the extension I was able to make requests to the server and debug my database api.

My zap report is lab5report.txt

https://angular.io/api/common/NgForOf
https://www.mongodb.com/docs/manual/reference/method/db.collection.updateMany/
https://www.w3schools.com/nodejs/nodejs_mongodb_remove.asp
https://www.w3schools.com/nodejs/nodejs_mongodb_delete.asp
https://www.w3schools.com/nodejs/nodejs_mongodb_update.asp
https://www.w3schools.com/nodejs/nodejs_mongodb_insert.asp
https://stackoverflow.com/questions/65270529/mongoerror-cannot-use-a-session-that-has-ended
https://www.mongodb.com/docs/guides/server/read_queries/
https://www.mongodb.com/docs/manual/reference/method/db.collection.countDocuments/
https://www.mongodb.com/docs/drivers/node/current/#quick-start
https://www.geeksforgeeks.org/javascript-promise-resolve-method/
https://www.mongodb.com/docs/manual/reference/method/db.collection.find/
https://www.youtube.com/watch?v=fgTGADljAeg