# Tretton Test API

### run the App
- you can use `pm2 start server.js --watch` if you have pm2 installed or `nodemon server.js` if you have nodemon or `node server.js` if you want to stay old school to run the application

- you need to have an **.env** file to run the app, there's no default variables for this app

## APIs documentation
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/5766928-c70bc408-96b0-4261-a673-4ce3627a991b?action=collection%2Ffork&collection-url=entityId%3D5766928-c70bc408-96b0-4261-a673-4ce3627a991b%26entityType%3Dcollection%26workspaceId%3D69fbea48-96bc-4344-b940-2ea2b7e62738)

- you can proceed to see the documentation via the the postman button
- if needed please fork the collection
- then on the left side go to workspace and choose *Tretton Test | Kanaan Bahmani*
- you can use this link as well: `https://www.postman.com/KanaanBahmani/workspace/tretton37-test-kanaan-bahmani/collection/5766928-a8afb91d-05ca-4ef8-9f28-9371c3068aee`

- **Please note that:** for the sake of showing how the *authentication* works I've included the auth middleware to the **getCoworker.js** file in the route `/api/coworker` you need to include oyur token like: `Authorization <your_token>`

- you can generate a token in `/api/login`, you need to send it an arbitery username like:

``` 
 {
   "username": "kanaan"
 }

```

- and you will be provided with a token