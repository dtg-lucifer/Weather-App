import React from "react";
import "./CurrentWeather.css";

const Weather = ({ data }) => {
    return (
        <div className="weather__wrapper">
            <div className="top">
                <div className="top_wrapper">
                    <p className="city">{data.city}</p>
                    <p className="weather__desc">{data.weather[0].description}</p>
                </div>
                <img
                    src={`icons/${data.weather[0].icon}.png`}
                    alt="weather"
                    className="weather__icon"
                />
            </div>
            <div className="bottom">
                <p className="temperature">{Math.round(data.main.temp)}°C</p>
                <div className="details">
                    <div className="parameter__row">
                        <span className="parameter__label">Details</span>
                    </div>
                    <div className="parameter__row">
                        <span className="parameter__label">Feels like</span>
                        <span className="parameter__value">{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div className="parameter__row">
                        <span className="parameter__label">Wind</span>
                        <span className="parameter__value">{data.wind.speed} m/sec</span>
                    </div>
                    <div className="parameter__row">
                        <span className="parameter__label">Humidity</span>
                        <span className="parameter__value">{data.main.humidity}%</span>
                    </div>
                    <div className="parameter__row">
                        <span className="parameter__label">Air pressure</span>
                        <span className="parameter__value">{data.main.pressure} hPa</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Weather;
