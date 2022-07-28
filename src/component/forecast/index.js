import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from "react-accessible-accordion";
import "./foreCast.css";

const WEEK_DAYS = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];

const ForeCast = ({ data }) => {
    const dayInWeek = new Date().getDay();
    const foreCastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(
        WEEK_DAYS.slice(0, dayInWeek)
    );

    return (
        <div className="forecast__wrapper">
            <label className="title">Forecast for upcoming days</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily__item">
                                    <img
                                        src={`icons/${item.weather[0].icon}.png`}
                                        alt="weather"
                                        className="small__icon"
                                    />
                                    <label className="day">{foreCastDays[idx]}</label>
                                    <label className="description">{item.weather[0].description}</label>
                                    <label className="min__max">{Math.round(item.main.temp_min)}°C - {Math.round(item.main.temp_max)}°C</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily__details__wrapper">
                                <div className="daily__details__grid__item">
                                    <label>Pressure</label>
                                    <label>{item.main.pressure} hPa</label>
                                </div>
                                <div className="daily__details__grid__item">
                                    <label>Humidity</label>
                                    <label>{item.main.humidity}%</label>
                                </div>
                                <div className="daily__details__grid__item">
                                    <label>Clouds</label>
                                    <label>{item.clouds.all}</label>
                                </div>
                                <div className="daily__details__grid__item">
                                    <label>Wind Speed</label>
                                    <label>{item.wind.speed} m/s</label>
                                </div>
                                <div className="daily__details__grid__item">
                                    <label>Sea level</label>
                                    <label>{item.main.sea_level} m</label>
                                </div>
                                <div className="daily__details__grid__item">
                                    <label>Feels like</label>
                                    <label>{Math.round(item.main.feels_like)}°C</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};

export default ForeCast;
