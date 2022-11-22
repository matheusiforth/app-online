import { Input } from "@chakra-ui/react";
import { useState } from "react";
import { SetCookie } from "../../context/cookies/set";

export function DataInicial() {

    var teste = '22/11/2022'
    // SetCookie('idusu', response.data['idusu'], '');

    const[dadosFornecidos, setDadosFornecidos] = useState();
    console.log(dadosFornecidos)

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div>
            <label style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>informe a data inicial</label>
            <Input
                placeholder="Selecione a data inicial"
                size="md"
                type="date"
                color='white'
                bg='#171923'
                value=''
                onChange={(e) => setDadosFornecidos(e.target.value)}
            />
        </div>
    )
}
