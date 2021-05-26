# Weather Forecast App

## Features
 ### 1. Based on user's current location
 !! Note that this will only work if the user has enabled their permission for location in the browser,
 otherwise there will be an error message 
 
- Shows the current weather forecast for user's current location
- Shows the weather forecast for the next 7 days for user's current location
- Shows the weather forecast for the next 12 hours for user's current location

 ### 2. Based on user search
- Shows the current weather forecast for user's searched location
- Shows the weather forecast for the next 7 days for user's searched location
- Shows the weather forecast for the next 12 hours for user's searched location

## Running the application locally
1. Clone the repository
2. Navigate to the weather-forecast-app folder
3. Run npm install and wait for the node modules to install
4. Run npm start, the application will be available on [http://localhost:3000/](http://localhost:3000/)

## Ideas on application improvements (which would have extended the deadline)
1. Better error handling for wrong user city input
2. Have city autocomplete option from a dropdown menu, when user is typing
3. Fancier and sleeker design
4. ESLint. I initially setup it but it was slowing down the work too much so I disabled it :(
5. Better typescript interfaces. (I'm a TS newbie with a deadline, so some of the prop types are 'any')
