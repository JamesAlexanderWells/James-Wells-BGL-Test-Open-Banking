# James Wells BGL Test

James Wells' submission to BGL for the transaction matching exercise. The solution is an api that clients can connect to and send a post request that they can use to match transaction descriptions with merchant names

This was done and tested with:

-MySQL
-Node / Jest
-Postman

## How to set up

- Download and set up MySQL on your workstation
- Run startup.sql in MySQL found under the DB folder to set up the schema / table with some test data
- Install node (this was tested with v15.11.0)
- In API folder run "npm i"
- To start the api run "npm start". The api will be running on localhost:8080.
- Run "npm install -g ts-node" IF you run into any ts-node related issues
- Download Postman
- Import the Postman collection "JW-Transaction-Match-Tests.postman_collection.json" found under API\Postman-tests


## How to test / use

- Navigate to the API folder and run "npm test" to run unit tests (Jest)
- Navigate to the API folder and run "npm start" to start the api
- Go to Postman and select the "JW-Transaction-Match-Tests" collection. Press the "Run" button and then the "Run JW-Transaction-Match-Tests" button that then appears after.
- For more specific documentation on the endpoint please refer to the "jw-bgl-test-endpoints.yaml" file under the Swagger folder and import it into swagger to use (https://editor.swagger.io/).
- Clients may use the information provided in "jw-bgl-test-endpoints.yaml" to connect to the api and match their transactions with merchant names

## Scalability

- To be discussed in interview more
- Code done in a way that will still be neat if solution were to increase in size logically
- To deal with increase in usage by increasing the number of users, we would scale horizontally by hosting more instances of this api
- Could also scale vertically if needed on hosted machines


## How 'misses' are dealt with.

- To discuss in interview, but this has been considered.
