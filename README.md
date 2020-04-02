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
