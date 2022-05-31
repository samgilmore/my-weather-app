import React from 'react';
import './styles.css';
import { Card } from 'semantic-ui-react';
import moment from 'moment';

const CardExampleCard = ({weatherData}) => (
    <Card
        centered
        style={{
            alignItems:'center',
             
            //height: '100vh',
        }}
    >
      <Card.Content className="content">
        <Card.Header className="header">{weatherData.name}</Card.Header>
            <p className="temperature">{(weatherData.main.temp * (9/5) + 32).toFixed(1)}&deg;</p>
            <p>Feels Like: {(weatherData.main.feels_like  * (9/5) + 32).toFixed(1)}&deg;</p>
            {/* <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
            <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p> */}
            <p>{weatherData.weather[0].main}</p>

            {/* <p>Day: {moment().format('dddd')}</p>
            <p>Date: {moment().format('LL')}</p> */}
      </Card.Content>
    </Card>
  )
  
  export default CardExampleCard;
