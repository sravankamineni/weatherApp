import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './index.css';

import WeatherIcon from '../WeatherIcon';
import Header from '../Header';
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";
import { FaThermometerEmpty } from "react-icons/fa";

const Home = () => {
    const [location, setLocation] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchWeather = async () => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=8856dbdbf2aefe5f20acc7929dcefd0c`);
            setWeatherData(response.data);
            setError('');
            setLocation('');
        } catch (err) {
            setError('Invalid location or connection issue.');
            setWeatherData(null);
        }
        finally {
            setLoading(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchWeather();
    };


    useEffect(() => {
        if (!navigator.geolocation) {
            console.log("Geolocation is not supported by your browser");
            return;
        }

        const success = async (position) => {
            const { latitude, longitude } = position.coords;
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=8856dbdbf2aefe5f20acc7929dcefd0c`);
                const data = response.data;
                data.main.temp = parseInt(data.main.temp);
                data.main.feels_like = parseInt(data.main.feels_like);
                data.main.temp_min = parseInt(data.main.temp_min);
                data.main.temp_max = parseInt(data.main.temp_max);

                setWeatherData(data);
                setError('');
            } catch (err) {
                setError('Failed to fetch weather based on your location.');
                setWeatherData(null);
            } finally {
                setLoading(false);
            }
        };

        const error = () => {
            setError('Unable to retrieve your location.');
            setLoading(false);
        };

        navigator.geolocation.getCurrentPosition(success, error);
    }, []);

    

    return (
        <>
            <Header />
            <div className="weather-cont">
                <form onSubmit={handleSubmit} className="search-form">
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Enter city or zip code"
                        className="search-input"
                    />
                    <button type="submit" className="search-button">Search</button>


                </form>
                {error && <p className="error">{error}</p>}
                {loading && <p>Loading...</p>}
                {weatherData && (
                    <div className="weather-info">
                       
                        <div className='weather-head'>
                            <p>{new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}</p>
                            <h2>{weatherData.name},{weatherData.sys.country}</h2>
                            <p className='weather-head-condition'>{weatherData.weather[0].main}</p>
                        </div>
                        
                        <div className='home-body'>
                           
                            <WeatherIcon weatherId={weatherData.weather[0].id} />
                           
                            <p>{weatherData.main.temp}°C</p>
                            <div className='weather-params'>
                                <div className='param'>
                                    <FaThermometerEmpty />
                                    <p>Real Feel: {weatherData.main.feels_like}°C</p>
                                </div>
                                <div className='param'>
                                    <BiSolidDropletHalf/>
                                    <p>Humidity: {weatherData.main.humidity}%</p>
                                </div>
                                <div className='param'>
                                    <FiWind />
                                    <p>Wind Speed: {weatherData.wind.speed} m/s</p>
                                </div>
                               
                                
                            </div>
                            

                        </div>
                        
                       
                       
                    </div>
                    
                )}
            </div>
        </>
        
    );
};

export default Home;
