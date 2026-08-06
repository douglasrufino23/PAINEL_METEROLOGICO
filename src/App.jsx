import { useState } from 'react';
import './App.css';
import { useClima } from './components/useClima';
import { Clima } from './components/Clima';
import { ClimaAlertas } from './components/ClimaAlertas';
import Previsoes from './components/Previsoes';
import { usePrevisoes } from './components/usePrevisoes';
function App() { 
  const [cidades, setCidades] = useState([
    "São José do Rio Preto",
    "São Paulo",
    "Rio de Janeiro"
  ])
  
  const cordRP = useClima(cidades[0]); const corRP = usePrevisoes(cidades[0]); 
  const cordNH = useClima(cidades[1]); const corNH = usePrevisoes(cidades[1]);
  const cordNG = useClima(cidades[2]); const corNG = usePrevisoes(cidades[2]); 
  
  const cordArray = [cordRP, cordNH, cordNG]
  const corArray = [corRP, corNH, corNG]

  const editarCity = (index) => {
    const nomeAtual = cordArray[index].tempo?.name || cidades[index]

    const cidadeNova = prompt("Nome da Cidade:", nomeAtual)

    if ( cidadeNova && cidadeNova.trim() !== "") {
      const novasCidades = [...cidades];
      novasCidades[index] = cidadeNova;
      setCidades(novasCidades)

    }
  }



  

  return (
    <>
      <header>
        <h1>PAINEL METEOROLÓGICO</h1>
        <div className='div-alterar'>
          {cidades.map((cidade, index) => (
            <div key={index}>
              <strong className='cidade-editar'>
                <p>{cordArray[index].tempo ? cordArray[index].tempo.name : cidade}</p><button onClick={() => editarCity(index)}>Editar</button>
              </strong> 
              {index < cidades.length - 1 && <hr/>}
            </div>
            ))}    
        </div>
        
      </header>
      <main>
        <section className='mapa'>
          <h2>Tempo Real</h2>
          <div className='conteiner_temp'>
            {cordArray.map((item, index) => (
              <div className='card_temp' key={index}>
                {item.tempo ? (
                  <Clima clima={item.tempo} />
                ) : <p>Carregando...</p>}
              </div>
            ))}
          </div>
        </section>

        <section className="alertas">
          <h2>Resumo</h2>
          <div className='conteiner_alertas'>           
            {cordArray.map((item, index) => (
              <div key={index} className='content_alertas'>
                {item.tempo ? (
                  <ClimaAlertas clima={item.tempo} />
                ) : <p>Buscando Alertas no momento...</p>}
              </div>
            ))}
          </div>
        </section>
        <section className='previsao'>
          <h2>Próximos dias</h2>
          {corArray.map((item, index) => (
            <div key={index}>
              {item.tempo ? (
                <Previsoes previsao = {item.tempo}/>
              ):null}
            </div>
          ))}
        </section>

      </main>
      <footer style={{ textAlign: 'center', padding: '20px', marginTop: '40px', backgroundColor: 'rgb(209, 212, 212)' }}>
  <p style={{ fontWeight: '600', color: 'rgb(54, 84, 119)' }}>Painel Meteorológico — Desenvolvido por Douglas Rufino</p>
  <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '10px' }}>
    <a href="https://github.com/douglasrufino23" target="_blank" rel="noopener noreferrer">GitHub</a>
    <a href="https://www.linkedin.com/in/douglas-rufino-431464394/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
  </div>
</footer>
    </>
  )
}

export default App
