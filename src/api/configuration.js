export const geoApiOptions = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_GEO_API_KEY,
        "X-RapidAPI-Host": process.env.REACT_APP_GEO_API_HOST,
    },
};
export const GEO_API_BASE_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
export const WEATHER_API_BASE_URL = "https://api.openweathermap.org/data/2.5";
