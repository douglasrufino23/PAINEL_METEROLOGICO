import React, { useState } from 'react'
import { useClima } from "./useClima";
import './models/ClimaAlertas.css'




export function ClimaAlertas({clima}) {

  if (!clima) return;

  const tempAlta = clima.main.feels_like > 35;
  const tempModerada = clima.main.feels_like < 35 && clima.main.feels_like > 19;
  const tempBaixa = clima.main.feels_like < 19;
  
  const umidBaixa = clima.main.humidity < 30;
  const umidModerada = clima.main.humidity >= 30 && clima.main.humidity < 60;
  const umidAlta = clima.main.humidity >= 60;

  const ventoAlta = clima.wind.speed >= 60;
  const ventoModerada = clima.wind.speed >= 20 && clima.wind.speed <= 59;
  const ventoBaixa = clima.wind.speed <= 19;

  const nuvemAlta = clima.clouds.all > 75;
  const nuvemModerada = clima.clouds.all <= 75 && clima.clouds.all >= 26;
  const nuvemBaixa = clima.clouds.all <= 25;


  

  return (
    <div className='card_alertas'>
      <h3>{clima.name}</h3>
      {tempBaixa ? (
        <p className='a'>Sensação: Baixo</p>
      ):null}
      {tempModerada ? (
        <p className='b'>Sensação: Moderado</p>
      ):null}
      {tempAlta ? (
        <p className='c'>Sensação: Alto</p>
      ):null}
      { ventoBaixa ? (
        <p className='a'>Vento: Baixo</p>
      ):null}
      {ventoModerada ? (
        <p className='b'>Vento: Moderado</p>
      ):null}
      { ventoAlta ? (
        <p className='c'>Vento: Alto</p>
      ):null}
      {umidBaixa ? (
        <p className='a'>Umidade: Baixo</p>
      ):null}
      {umidModerada ? (
        <p className='b'>Umidade: Moderado</p>
      ):null}
      {umidAlta ? (
        <p className='c'>Umidade: Alto</p>
      ):null}
      {nuvemBaixa ? (
        <p className='a'>Nuvem: Baixo</p>
      ):null}
      {nuvemModerada ? (
        <p className='b'>Nuvem: Moderado</p>
      ):null}
      {nuvemAlta ? (
        <p className='c'>Nuvens: Alto</p>
      ):null}

    </div>
  )
}