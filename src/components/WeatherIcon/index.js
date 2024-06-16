import React from 'react';
import Lottie from 'react-lottie-player';
import clearAnimation from '../../assets/lottie/clear.json';
import cloudsAnimation from '../../assets/lottie/clouds.json';
import rainAnimation from '../../assets/lottie/rain.json';
import snowAnimation from '../../assets/lottie/snow.json';
import thunderstormAnimation from '../../assets/lottie/thunderstorm.json';

const WeatherIcon = ({ weatherId }) => {
    // Map weatherId to the appropriate animation
    const getAnimation = (id) => {
        switch (true) {
            case id >= 200 && id < 300:
                return thunderstormAnimation;
            case id >= 300 && id < 600:
                return rainAnimation;
            case id >= 600 && id < 700:
                return snowAnimation;
            case id >= 700 && id < 800:
                return cloudsAnimation;
            case id === 800:
                return clearAnimation;
            case id > 800:
                return cloudsAnimation;
            default:
                return clearAnimation;
        }
    };

    return (
        <Lottie
            loop
            animationData={getAnimation(weatherId)}
            play
            style={{ width: 150, height: 150 }}
        />
    );
};

export default WeatherIcon;
