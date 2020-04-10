# #100daysOfCode

## Day 1 - 30-Mar-2020
First day of my HDoC. My plan is to develop a News aggregator using javascript. Initially, I have to set up a proxy server for all my service consumption. Intending to build the frontend using VueJS. 

As a first step, I have set up a ExpressJS application which will consume NewsAPI apis.

Todo: Filter the 'sources' response json to paginate/categorize before sending to client

## Day 2 - 31-Mar-2020
Kind of disorganized! Yet. Created basic news fetching apis:

1. Fetch all news, accepts a q parameter with the query. If nothing is given, it will take 'global'.
2. Source api will fetch news sources for given category.
3. Sourcedetails api will get specific properties of items from source api. This is needed to create menu bars and categorized views.

Next thing I did is to create a Vue application. Added:
1. axios
2. tailwind css
3. element ui framework

Set up a component for nav bar - this will get the list of categories from news-server api #3.

Thats where I stopped for the night.

## Day 3 - 1-Apr-2020
Added one more endpoint to get top headlines in the server part. News block component developed and hooked with the API.

Unsed an eventBus to communicate between sibling components.
![Screenshot of news app](https://github.com/santhoshjanan/100daysOfCode/raw/master/screenshots/hdoc-news-ss.png)

## Day 4 - 2-Apr-2020
Today started a new nodejs project to start working with data - CRUD operations. May be I got a bit over excited; or got over confident. I thought of adding one additional learning point- NoSQL. Initially I thought working with Javascript will be a paradigm shift. But now I feel, Javascript is ok. But a brain which had worked for a long time with RDBMS, is finding it real tough to wrap around the NoSQL paradigm. One step at a time, I am learning it.

Today, I created a nodejs/express application. Set up my first mongodb instance in Atlas cloud. Created a model. Added a listing, create user and login routes in the controller. Later, added a middleware in the model with pre-save. So that, the password gets hashed when it is saved. Excited for tomorrow and the weekend.

## Day 5 - 3-Apr-2020
Nope! Not a great day with code. I am struggling with handling JWT. May be I am missing a little thing. After I close my HDoC today, I will be watching some videos on how experts do authentication in express and read some more. Weekend must be some more easier. Happy weekend.

## Day 6 - 4-Apr-2020
Finally, I was able to get around JWT. On successful authentication, signed the user object along with an expiry date and sent it back to the client. On subsequent actions, in a middleware, I decode the JWT token and store it within the request object, so that the "next" function which uses the request can identify who is requesting it.

In total, I got a better understanding of JWT, wrote a middleware for token verification and used it to protect my routes. I call it a fruitful day of code.

## Day 7 - 5-Apr-2020
Started working on adding Survey and questions to the system. Next will be adding answers with reference to the survey objects. Looks like this needs more reading on Mongoose to understand how relationships work. A slow day on HDoC.

## Day 8 - 6-Apr-2020
Realized that I was doing all mongo related operations synchronously. Refactored all those to async operations. Meanwhile, spun up a vue application for frontend of survey app. Object is to better implement a state management part. A couple of good learning on how to modularize Vuex. And I was earlier struggling with handling how to navigate from one route to another based on state. Now, I think I understand the basics. In upcoming days, I need to revalidate myself and fix it. One important thing coming up is, routes with guards. Hopefully, tomorrow. One thing I am happy with today is, the lifecycle of Vuex is now clear.

![Data flow in Vuex](https://raw.githubusercontent.com/santhoshjanan/100daysOfCode/master/screenshots/Vuex.png)

## Day 9 - 7-Apr-2020
Learned a couple of things: 
1. How to get nested routing.
2. How to navigate/route using element ui side nav bar.

Pending items:
1. Guarded routes
2. UI State management
3. Form building

## Day 10 - 8-Apr-2020
Slow day! Could clean up the dashboard page. Started builing the form for create survey. Need to find out how to dynamically add fields. At one point in time I was doubtful if I made a wrong choice by taking Element UI. Then yet, there are thousands already using that framework without any issues. Why should not I! So, here I am pushing it further...

## Day 11 - 9-Apr-2020
Today I didnt work on the existing projects. Instead I took a bunch of challenges in HackerRank. Solved 14 challenges and earned 3 stars in an hour. Let me stop for the day :)
