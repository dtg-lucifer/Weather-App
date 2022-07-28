import Search from "./component/Search";
import CurrentWeather from "./component/currentweather";
import { WEATHER_API_BASE_URL } from "../src/api/configuration";
import "./css/App.css";
import { useState } from "react";
import ForeCast from "./component/forecast";

function App() {
    const [currentWDeatils, setCurrentWDetails] = useState(null);
    const [foreCastWDeatils, setforeCastWDetails] = useState(null);

    const handleChange = async (searchData) => {
        const [lat, long] = searchData.value.split(" ");

        try {
            const currentWeather = await fetch(
                `${WEATHER_API_BASE_URL}/weather?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
            );
            const weatherForeCast = await fetch(
                `${WEATHER_API_BASE_URL}/forecast?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
            );
            const currentWeatherJson = await currentWeather.json();
            const weatherForeCastJson = await weatherForeCast.json();
            setCurrentWDetails({
                city: searchData.label,
                ...currentWeatherJson,
            });
            setforeCastWDetails({
                city: searchData.label,
                ...weatherForeCastJson,
            });
        } catch (e) {
            alert("Something went wrong with the API please come again later!");
        }
    };

    return (
        <div className="container">
            <Search onSearchChange={handleChange} />
            {currentWDeatils && <CurrentWeather data={currentWDeatils} />}
            {foreCastWDeatils && <ForeCast data={foreCastWDeatils} />}
        </div>
    );
}

export default App;
