# Tretton Test API

### run the App
- you can use `pm2 start server.js --watch` if you have pm2 installed or `nodemon server.js` if you have nodemon or `node server.js` if you want to stay old school to run the application

- you need to have an **.env** file to run the app, there's no default variables for this app

## APIs documentation
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/5766928-c70bc408-96b0-4261-a673-4ce3627a991b?action=collection%2Ffork&collection-url=entityId%3D5766928-c70bc408-96b0-4261-a673-4ce3627a991b%26entityType%3Dcollection%26workspaceId%3D69fbea48-96bc-4344-b940-2ea2b7e62738)

- you can proceed to see the documentation via the the postman button
- if needed please fork the collection
- then on the left side go to workspace and choose *Tretton Test | Kanaan Bahmani*
- **or you can use this link as well:** `https://www.postman.com/KanaanBahmani/workspace/tretton37-test-kanaan-bahmani/collection/5766928-c70bc408-96b0-4261-a673-4ce3627a991b?ctx=documentation`

- **Please note that:** for the sake of showing how the *authentication* works I've included the auth middleware to the **getCoworker.js** file in the route `/api/coworker` you need to include oyur token like: `Authorization <your_token>`

- you can generate a token in `/api/login`, you need to send it an arbitery username like:

``` 
 {
   "username": "kanaan"
 }

```

- and you will be provided with a token

### Get Coworker
- This route is for fetching a single coeorker, you need to send the coworker's id in the url params in orther to be able to fetch that coworker's info.

- you need to be authorised in order to proceed with this route and for that matter you can send your token that you received from `/api/login` in the header as follows:

```
{
  key: Authorization | value: <YOUR_TOKEN_GOES_HERE>
}
```
- the `url` will look like this: `http://localhost:<PORT>/api/coworker/:id`
- instead of the `:id` at the end of the route you need to send the coworker's id of your choice that you wanna see.

```
// example of response body object that you'll recieve
responseBody: {
  "name": "Kanaan Bahmani",
  "text": "I love to join tretton",
  "imagePortraitUrl": "https://i.1337co.de/profile/alexander-olsson-medium"
}

```

### Get Coworkers
- this route is for fetching all the coworkers, it receives 3 query strings in the url:
- url example: `http://localhost:9000/api/coworkers?start=6&end=5&filter=lu`
- this url above will skip 6 documents and show 5 documents per request, and also will implement the characters I've used to do a filtration on database based on name, city, and country and any of them that can match any of these characters will be returned as results.

```
// example of response body object that you'll recieve
responseBody: {
  "data": [
        {
            "_id": "6158e0e494fa041a2c31e288",
            "name": "Kanaan Bahmani",
            "country": "🇸🇪",
            "city": "Lund",
            "text": "I love to join tretton",
            "imagePortraitUrl": "https://i.1337co.de/profile/amin-yosoh-medium",
            "__v": 0
        },
        {
            "_id": "6158e0e494fa041a2c31e28c",
            "name": "Anders Clark",
            "country": "🇸🇪",
            "city": "Lund",
            "text": " <p>&quot;I worked in a crisis-driven media landscape for several years. First as a tabloid reporter and then as a developing editor while starting Omni. The startup was a turning point in my life where I discovered development, scrum and the power of programming. But looking at coding from the sidelines was not enough. A few years later I worked as a developing editor for Sveriges Radio Play, which is where I decided that I too wanted to harness the transforming power of code. So: Three years, a move from Stockholm and a about twenty programming courses late, I&apos;m here!</p><p>And by here: I mean by the computer with my dog sleeping next to me, counting the minutes until we go out for a 10k-run and then back in front of the computer, doing what I love :)&quot;</p> ",
            "imagePortraitUrl": "https://i.1337co.de/profile/anders-clark-medium",
            "__v": 0
        },
        {
            "_id": "6158e0e494fa041a2c31e292",
            "name": "Anders Ringqvist",
            "country": "🇸🇪",
            "city": "Lund",
            "text": " <p>I see myself as a Web Standards Evangelist. As a master of the holy trinity &#x2013; HTML, CSS and JavaScript, I have waged war against unholy spaghetti code for 16 years, participated in the crusade against table-based layouts, the persecution of the spacer gif, and the eradication of the LAYER element.</p><p>On top of that, I am an expert in browser-issue solving and an enlisted Code Medic during the divitis and classitis pandemics that raged after the table crusade. At the moment, I&#x2019;m at the besiegement of IE and if all goes well, this behemoth will soon fall. </p><p>What do I do when I am not a proud nerd? Well, I am still being a proud nerd &#x2013; the only difference is that you will probably see me on my Ducati motorcycle.</p> ",
            "imagePortraitUrl": "https://i.1337co.de/profile/anders-ringqvist-medium",
            "__v": 0
        },
        {
            "_id": "6158e0e494fa041a2c31e293",
            "name": "Andreas Andersson",
            "country": "🇸🇪",
            "city": "Lund",
            "text": " <p>My interest for computers has been a part of me for as long as I can remember. I began writing some basic programs when I was 10 years old, which led me to think that I was going to study computer science when finishing high school - no questions asked. However, during my high school years I started to develop a keen interest for both the mathematical and the social sciences and all of a sudden, it was not so easy for me to decide what area to pursue after high school.</p><p>Finally, I ended up with a Bachelor degree in Mathematics with a specialisation in numerical analysis. Even though I had fallen head over heels in love with mathematics and programming, I was still wondering if I had made the right choice. </p><p>I decided that the only way to figure out what I truly wanted to do for the rest of my life was to try and see what the other side had to offer. I began working in the service and banking industry for a couple of years while giving law school a try. I found law to be a fascinating subject on its own, but realised after some time that my heart truly belonged to mathematics and software development.</p><p>Besides the problem solving skills I developed during my time studying mathematics, I truly believe that my non-traditional background is one of the greatest strengths I possess. I dare say that I have truly lived outside the box, and have thus gained experiences that will benefit me to a great extent, both as an individual but also in my work as a developer.</p><p>In my free time, when I&apos;m not tinkering with Haskell and other functional languages, you can find me outside running long distances or inside working my way through my ever growing &quot;books-to-read&quot; list.</p> ",
            "imagePortraitUrl": "https://i.1337co.de/profile/andreas-andersson-medium",
            "__v": 0
        },
        {
            "_id": "6158e0e494fa041a2c31e294",
            "name": "Andreas Cederström",
            "country": "🇸🇪",
            "city": "Lund",
            "text": " <p>My interest for user interfaces began in the early 90&apos;s. When my parents were not looking, me and my brother launched the i386 PC and tried to figure out how to launch classical games as Wolfenstein 3d, lemmings and battle chess from the DOS prompt. The way computers back then invited for curiosity to interact in different ways is the foundation that drives me to constantly enjoy new technology.</p><p>I have a strong passion for code and programming but what I value the most is the outcome - the interface that the users interacts with. As much as the browser landscape can be painful, I also embrace it. It&apos;s what once allowed me to be creative with frames, tables and spacer gifs and today utilising modern javascript (ES6), html and css.</p><p>Outside of digital life I enjoy playing with my three kids. To keep up with their energy I&apos;ve become somewhat obsessed by long distance running. I&apos;ve tried a couple of marathons and ultra marathons. I also enjoy backing gadgets (usually stuff I don&apos;t really need) on kickstarter, especially cameras. I don&apos;t have any clumsy DSLRs anymore but photography is still something that will always be interesting to me. There is so much to tell about a snap shot in time which usually doesn&apos;t get told.</p>&#x200B; ",
            "imagePortraitUrl": "https://i.1337co.de/profile/andreas-cederstrom-medium",
            "__v": 0
        }
    ],
    "totalLength": 262
}

```

- #### skip
- Use this to tell the database how many documents to skip

- #### limit
- Use this to tell how many documents to show every time of getting the results back

- #### filter
- Use this to do filteration based on name, city, and country on the results
- filteration is case-insensitive so don't worry :)

### Edit Coworker
- Use this API to edit coworker's name, city, and text

### Login

### Scraper file

### JWT file

### Token file

### Coworker Schema file

