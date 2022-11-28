import { Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { SetCookie } from "../../context/cookies/set";

export function DataInicial() {

    var teste = '22/11/2022'
    // SetCookie('idusu', response.data['idusu'], '');


    var conteudo = '';

    const [dadosFornecidos, setDadosFornecidos] = useState();
    console.log(dadosFornecidos)

    const handleSubmit = (event) => {
        event.preventDefault();
        // dadosFornecidos.push(conteudo)
    }

    // if(dadosFornecidos.length > 0){
    //     return console.log('deu certo')
    //     //SetCookie(setDadosFornecidos());
    // } else{
    //     return console.log('deu erro')
    // }

    return (
        <div onSubmit={handleSubmit}>
            <label style={{ fontWeight: 'bold' }}>Informe a data inicial</label>
            <Input
                placeholder="Selecione a data inicial"
                size="md"
                type="date"
                color='white'
                bg='#171923'
                // value=''
                onChange={(e) => setDadosFornecidos(e.target.value)}
            />
        </div>
    )
}
