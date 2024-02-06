// src/WeatherMap.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WeatherMap = () => {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('weather.php');
                setWeatherData(response.data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {weatherData && (
                <div>
                    {/* Render weather data */}
                    <pre>{JSON.stringify(weatherData, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default WeatherMap;
