import { Flex, Grid, Spacer, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { RiContactsBookLine } from "react-icons/ri";
import { Header } from "../../componentes/header/header";
import { CardTeste } from "../../componentes/home/cards/cardTeste";
import { FiltroParada } from "../../componentes/rankingParada/filtroParada";
import { Grafico } from "../../componentes/rankingParada/grafico";
import { GraficoParada } from "../../componentes/rankingParada/graficoParada";
import { Api } from "../../context/api/api";
import { AutenticacaoContext } from "../../context/autenticacao";
import GetCookie from "../../context/cookies/get";

var dadosGraficoBackup = []

export function RankingParada() {

    const [dadosGrafico, setDadosGrafico] = useState(dadosGraficoBackup);

    {/*
     const [linhaSelecionada, setLinhaSelecionada] = useState(1);
     const [diaInicial, setDiaInicial] = useState(1);
     const [mesInicial, setMesInicial] = useState(10);
     const [anoInicial, setAnoInicial] = useState(2022);

     const [diaFinal, setDiaFinal] = useState(2);
     const [mesFinal, setMesFinal] = useState();
     const [anoFinal, setAnoFinal] = useState();
     const [verifica, setVerifica] = useState(false);

     const [teste, setTeste] = useState([]);
    */}

    var linhaSelecionada = 1

    const teste = () => {
        Api.get('/v1/web/rank/parada/' + 1 + '/' + 1 + '/' + 10 + '/' + 2022 + '/' + 31 + '/' + 10 + '/' + 2022 + '/10').then(
            function (response) {
                dadosGraficoBackup = response.data;
                setDadosGrafico(dadosGraficoBackup);
            })
    }
    console.log('response')
    return (
        <Flex flexDir='column'>
            <Header />
            <Flex w='100%' h='89.5vh' >
                <Flex bg='#e2e2ee' flexDir='column' w='100%' py='1rem' px='2rem'>

                    <AutenticacaoContext.Provider value={{}}>

                        <Text ml='1.1rem' color='#616161' fontSize='0.75rem' textTransform='uppercase'>Ranking de Parada</Text>
                        <Text ml='1rem' color='#616161' fontSize={['1rem', '1rem', '2rem', '1.5rem',]} fontWeight='bold'>Mês e dia</Text>
                        <Flex align='center' mt='-12px'>

                            <Text ml='1.1rem' color='#616161' fontSize={['1rem', '1rem', '1rem', '1rem',]}>
                                Nenhuma linha selecionada
                            </Text>
                            <Spacer />
                            <FiltroParada data={teste} />

                        </Flex>

                    </AutenticacaoContext.Provider>

                    <Grafico data={dadosGrafico} />

                </Flex>
            </Flex>
        </Flex>
    )
}