import axios from "axios";
import { api_urls, api } from "../config/App";

export const fetchTraffic = (date_time) => {
    return axios.get(api_urls.trafficAPI, {
        params: { date_time: date_time },
    });
};

export const fetchWeather = (date_time) => {
    return axios.get(api_urls.weatherApi, {
        params: { date_time: date_time },
    });
};

export const fetchLocation = (lat, long) => {
    return axios.get(api_urls.oneMapApi, {
        params: { location: lat + "," + long, token: api.oneMap },
    });
};
