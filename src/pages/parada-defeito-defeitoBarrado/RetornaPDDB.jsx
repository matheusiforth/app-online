import { Flex, Spacer, Text } from "@chakra-ui/react";
import { Header } from "../../componentes/header/header";
import { ChamadaGraficoDefeito } from "../../componentes/rankingDefeito/chamadaGraficoDefeito";
import { FiltroDefeito } from "../../componentes/rankingDefeito/filtroDefeito";
import { FiltroDefeitoBarrado } from "../../componentes/rankingDefeitoBarrado/filtroDefeitoBarrado";
import { ChamadaGraficoParada } from "../../componentes/rankingParada/chamadaGraficoParada";
import { FiltroParada } from "../../componentes/rankingParada/filtroParada";
import { Api } from "../../context/api/api";
import { AutenticacaoContext } from "../../context/autenticacao";
import GetCookie from "../../context/cookies/get";

export function RetornaPDDB({ type }) {
    var dadosGraficoParada = [];
    var dadosGraficoDefeito = [];
    var primeiraDesc = '';
    var segundaDesc = '';
    var terceiraDesc = '';

    if (type == 1) {
        primeiraDesc = 'Ranking de Parada';
        segundaDesc = 'Mês e Dia';
        terceiraDesc = 'Nenhuma linha selecionada';
    } if (type == 2) {
        primeiraDesc = 'Ranking de Defeito';
        segundaDesc = 'Mês e Dia';
        terceiraDesc = 'Nenhuma linha selecionada';
    } if (type == 3) {
        primeiraDesc = 'Ranking de Defeito Barrado';
        segundaDesc = 'Mês e Dia';
        terceiraDesc = 'Linha 01 - FW1 (RC4)';
    }

    const RotaLinhaParada = () => {
        if (type = 1) {
            Api.get('/v1/web/rank/parada/' + 1 + '/' + GetCookie('dataInicio') + '/' + GetCookie('dataFinal') + '/10').then(
                function (response) {
                    dadosGraficoParada = response.data;
                })
        }
    }

    const RotaLinhaDefeito = () => {
        if (type = 2) {
            Api.get('/v1/linha/usuario/' + GetCookie('idusu') + '/' + GetCookie('unidade')).then(
                function (response) {
                    console.log(response)
                    dadosGraficoDefeito = response.data;
                })
        }
    }

    function RetornaFiltro() {
        if (type == 1) {
            return <FiltroParada data={RotaLinhaParada} />
        } if (type == 2) {
            return <FiltroDefeito data={RotaLinhaDefeito}/>
        } if (type == 3) {
            return <FiltroDefeitoBarrado />
        }
    }

    function RetornaGrafico() {
        if (type == 1) {
            return <ChamadaGraficoParada data={dadosGraficoParada} />
        } if (type == 2) {
            return <ChamadaGraficoDefeito data={dadosGraficoDefeito}/>
        } if (type == 3) {
            // return
        }
    }

    return (
        <Flex flexDir='column'>
            <Header />
            <Flex w='100%' h='89.5vh' >
                <Flex bg='#e2e2ee' flexDir='column' w='100%' py='1rem' px='2rem'>

                    <AutenticacaoContext.Provider value={{}}>

                        <Text color='#616161' fontSize='0.75rem' textTransform='uppercase'>{primeiraDesc}</Text>
                        <Text color='#616161' fontSize={['1rem', '1rem', '2rem', '1.5rem',]} fontWeight='bold'>{segundaDesc}</Text>
                        <Flex align='center' mt='-12px'>

                            <Text color='#616161' fontSize={['1rem', '1rem', '1rem', '1rem',]}>
                                {terceiraDesc}
                            </Text>
                            <Spacer />
                            <RetornaFiltro />

                        </Flex>

                    </AutenticacaoContext.Provider>
                    <RetornaGrafico />
                </Flex>
            </Flex>
        </Flex>
    )
}