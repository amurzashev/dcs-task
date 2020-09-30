# DCS Test task

project url: **PENDING** (because weather forecast api's free plan allows only http connection and most free hosting services such as gh-pages, vercel and others install ssl certs by default, I'm unable to host it at the moment. Looking for alternative solutions)

to run locally:

1. git clone
2. yarn (npm i)
3. yarn start (npm start) - starts project on localhost:3000

As per requirements:

1. The app shows 15 top cities worldwide by population(by calling an api and not hardcoding values) and then sorts the list alphabetically when rendering it
2. It allows users to remove top cities from the list and also allows to recover the full list
3. When clicking on a city preview component(blue box) it shows more forecast detailis along with a note textarea and buttons to add to favorites and to refresh forecast(all data is cached using redux-persist)
4. Search text input searches automatically for cities using an external api using debounce to limit api calls.
5. No backend is used for the project.
6. A fixed component in bottom right corner shows current user location along with the location's forecast
7. No UI frameworks
8. Reusable UI components are separated into the ui folder
