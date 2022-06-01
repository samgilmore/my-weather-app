import React from 'react';
import './styles.css';
import { Button, Icon } from 'semantic-ui-react';

const refresh = () => {
    window.location.reload();
}

const CardExampleCard = ({weatherData}) => (
    
    <div className="main">
        <div className="top">
            <img className="weather-icon" src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}/>
            <h1 className="city">
                {weatherData.name}
            </h1>
            <Button 
                onClick={refresh}
                className='refresh-button'
                icon 
                circular 
                color="blue"
            >
                <Icon name='refresh'/>
            </Button>
        </div>
        <div>
            <p className="temperature">
                {(weatherData.main.temp * (9/5) + 32).toFixed(1)}&deg;
            </p>
        </div>
        <div className="flex">
            <p className="description">Feels Like: {(weatherData.main.feels_like  * (9/5) + 32).toFixed(1)}&deg;</p>
            <p className="description">{weatherData.weather[0].main}</p>
        </div>
    </div>
  )
  
  export default CardExampleCard;
