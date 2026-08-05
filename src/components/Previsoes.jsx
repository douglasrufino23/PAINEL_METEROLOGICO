import React from 'react';
import './models/Previsoes.css'

const Previsoes = ({ previsao }) => {
  // Verifica se a lista existe para evitar erros caso os dados ainda estejam carregando
  if (!previsao || !previsao.list) return <p>Carregando previsão...</p>;

  // Filtra os dados para pegar apenas os horários de 12:00 de cada dia
  const dadosFiltrados = previsao.list.filter(item => item.dt_txt.includes("12:00:00"));

  const formatardata = (dttxt) => {
    const data = new Date(dttxt.replace(" ", "T"));
    
    
    return new Intl.DateTimeFormat('pt-BR', { weekday: 'short', day: '2-digit', month: '2-digit' }).format(data);
  }

  return (
    <div>
        <p style={{marginTop: '15px', fontWeight: '800', fontSize: '20px'}}>{previsao.city.name}</p>
      
        
        <div className='conteiner-previsoes'>
          {dadosFiltrados.map((day, index) => (
          <div className='content-previsoes' key={index}>
              <p style={{fontWeight: 800}}>
                {formatardata(day.dt_txt)}
              </p>
              <p>{day.main.temp}°C</p>
              <p style={{textTransform: 'capitalize'}}>{day.weather[0].description}</p>
          
          </div>
          ))}
        </div>
      
    </div>
  );
};

export default Previsoes;