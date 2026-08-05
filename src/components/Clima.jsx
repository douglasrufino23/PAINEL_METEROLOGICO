import React from 'react';
import './models/Clima.css'
import { useClima } from './useClima';
export function Clima({clima}) {

  return (
    <div className='card_temp_content'>
        <h3> {clima.name}</h3>
        <p style={{textTransform: 'capitalize'}}>{clima.weather[0].description}</p>
        <p><strong>Temperatura:</strong> {clima.main.temp}°C</p>
        <p><strong>Vento:</strong> {clima.wind.speed} km/h</p>
        <p><strong>Umidade:</strong> {clima.main.humidity}%</p>
    </div>
    
  )
}
