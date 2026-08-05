import { useEffect, useState } from "react";

export function useClima(nomeCidade) {
    const [tempo, setClima] = useState(null);
    const [carregando, setCarregando] = useState(true)
    


    useEffect(() => {

        if (!nomeCidade) return;

        const API_KEY = "e04371792ed7ee9fc1811f55ff9d10b5"

        const buscarClima = async () => {
            try {
                const resposta = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${nomeCidade}&appid=${API_KEY}&units=metric&lang=pt_br`
                );

                const dados = await resposta.json();
                    setClima(dados);
                    setCarregando(false);
                
                }
                   
            
             
            catch (erro) {
                console.log("Erro ao buscar API: ", erro);
                setCarregando(false);
            }

                
        };

        buscarClima()
    }, [nomeCidade])

    return {tempo, carregando};

    
}