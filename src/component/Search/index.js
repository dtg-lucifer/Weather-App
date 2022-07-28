import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_BASE_URL, geoApiOptions } from "../../api/configuration";
import "./Search.css"

const Search = ({ onSearchChange }) => {
    const [term, setTerm] = useState("");
    const handleChange = (searchData) => {
        setTerm(searchData);
        onSearchChange(searchData);
    };
    const loadOptions = (inputValue) => {
        return fetch(
            `${GEO_API_BASE_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
            geoApiOptions
        )
            .then((response) => response.json())
            .then((result) => {
                return {
                    options: result.data.map((city) => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name}, ${city.countryCode}`,
                        };
                    }),
                };
            })
            .catch((err) => {
                alert("Something Went Wrong, Please Try Again Later!")
            });
    };

    return (
        <div className="wrapper">
            <AsyncPaginate
                className="searchBar"
                placeholder="Search for city"
                debounceTimeout={600}
                value={term}
                onChange={handleChange}
                loadOptions={loadOptions}
            />
        </div>
    );
};

export default Search;
