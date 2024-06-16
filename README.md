WeatherApp

WeatherApp is a React-based weather forecasting application that fetches current weather information for any city or zip code. It provides weather details such as temperature, weather description, humidity, wind speed, and more. Additionally, the app supports background changes based on temperature and displays weather icons dynamically.

Features:-
1) Displays weather information based on user input (city name or zip code).
2) Automatically fetches and displays weather data for the user's current location upon initial load.
3) Weather animations and icons based on weather conditions.
4) Responsive design suitable for desktop, tablet, and mobile devices.

Technologies Used:-
1) React: For building the user interface.
2) Axios: For making API requests.
3) OpenWeather API: For fetching weather data.
4) React Icons: For weather icons and other UI elements.
5) Lottie Files: For weather animations.
6) CSS: For styling and layout.
7) Geolocation API: For fetching the user's current location.

Instructions to Run the Application Locally
Prerequisites:-
Node.js (v12 or higher)
npm (Node Package Manager)

Setup
1) Clone the repository: git clone https://github.com/your-username/weather-app.git

2) Navigate to the project directory: cd weather-app

3) Install dependencies: npm install

4) Get your OpenWeather API key:
    Sign up at OpenWeather to get an API key.
    Create a .env file at the root of your project and add your OpenWeather API key:- REACT_APP_OPENWEATHER_API_KEY=your_openweather_api_key

5) Run the application: npm start

The app should open in your default browser at http://localhost:3000.

Usage:-

-> Enter a city name or zip code into the search field and click "Search" to fetch weather data for that location.
-> The app will display the current weather conditions, including temperature, weather description, humidity, and wind speed.
-> Upon initial load, the app will attempt to fetch weather data for your current location using the Geolocation API.

Known Issues and Limitations:-
1) API Rate Limits: The OpenWeather API has rate limits which might restrict the number of requests that can be made in a given time frame.

2) Geolocation Permission: If the user denies permission for geolocation, the app cannot fetch weather data for the current location.

3) Browser Compatibility: Ensure your browser supports the Geolocation API for location-based weather fetching.

4) Error Handling: The application provides basic error messages for invalid locations or API failures but may need more detailed error handling for other issues.

5) Animations: The Lottie animations may not cover all weather conditions perfectly and might require additional customization.

Future Enhancements
1) Dark Mode: Implement a dark mode feature for the user interface.
