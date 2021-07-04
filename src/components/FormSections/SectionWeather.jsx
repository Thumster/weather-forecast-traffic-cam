import { useContext } from "react";
import {
    WeatherContainer,
    WeatherHeader,
    WeatherDate,
    WeatherForecast,
} from "./SectionStyles";
import AppContext from "../../contexts/AppContext";

const SectionWeather = () => {
    const context = useContext(AppContext);

    const {
        all_locations,
        location,
        weather_data: { items, area_metadata },
    } = context.state;
    const {
        forecasts,
        valid_period: { start },
    } = items[0];

    const selectedLocation = all_locations.find(
        (item) => item.location.road_name === location
    )?.location;

    let currentNearest;
    for (const area of area_metadata) {
        const selected_latitude = selectedLocation.latitude;
        const selected_longitude = selectedLocation.longitude;
        const area_latitude = area.label_location.latitude;
        const area_longitude = area.label_location.longitude;

        const distance = calculateDistance(
            selected_latitude,
            selected_longitude,
            area_latitude,
            area_longitude
        );

        if (!currentNearest || distance < currentNearest.distance) {
            currentNearest = {
                ...area,
                distance: distance,
            };
        }
    }

    const forecast = forecasts.find(
        (item) => item.area === currentNearest.name
    )?.forecast;

    const start_date = new Date(start).toLocaleString();
    return (
        <WeatherContainer>
            <div>
                <WeatherHeader>Weather (2-hour)</WeatherHeader>
                <WeatherDate>{start_date}</WeatherDate>
            </div>
            <WeatherForecast>{forecast}</WeatherForecast>
        </WeatherContainer>
    );
};

const calculateDistance = (lat1, lon1, lat2, lon2) => {
    var radlat1 = (Math.PI * lat1) / 180;
    var radlat2 = (Math.PI * lat2) / 180;
    var theta = lon1 - lon2;
    var radtheta = (Math.PI * theta) / 180;
    var dist =
        Math.sin(radlat1) * Math.sin(radlat2) +
        Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
        dist = 1;
    }
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;
    return dist;
};

export default SectionWeather;
