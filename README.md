# Weather Forecast Traffic Cam Application
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting Started
1. Clone the repository
2. npm install
3. npm start

## Libraries
* Linting
  * Prettier
  * ESLint
* UI
  * React-Bootstrap
* HTTP Requests
  * Axios

## APIs Used
* [Data.gov.sg - Traffic Images](https://data.gov.sg/dataset/traffic-images)
* [Data.gov.sg - Weather Forecast](https://data.gov.sg/dataset/weather-forecast)
* [Onemap.gov.sg - Reverse Geocoding](https://www.onemap.gov.sg/docs/#reverse-geocode-wgs84)

## Summary
This application utilizes the open source data from the aforementioned APIs. It aims to provide an avenue for users to view the traffic condition as well as weather for the selected date time. The application is responsive and works on desktop and mobile. With the help of a step wizard, the application provides a simple and intuitive experience for the users. 
### 1. Select Date Time (with validation and date/time picker)
![alt text](https://imgur.com/xlIz8Q9.png)
### 2. Select Location
![alt text](https://imgur.com/0XfDzWq.png)
### 3. View Traffic Images and Weather Condition
![alt text](https://imgur.com/JkEJqQJ.png)

## Note
* You will have to provide a valid API_KEY from [Onemap](https://discuss.onemap.sg/t/steps-for-api-authentication/59) for the reverse geocoding.
* Traffic images from the same road will be grouped together and all will be displayed with their respective longitude, latitude for your reference.
* Weather forecast is taken by identifying the nearest location provided from the Weather Forecast API and the selected location (Step 2).
* If an invalid date time is provided (falls beyond the range of the Traffic Images API), an error message will be displayed.
