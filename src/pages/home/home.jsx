import React, { useEffect, useState } from 'react'
import { Flex, Grid, Input, Text, useBreakpointValue } from "@chakra-ui/react";
import GetCookie from "../../context/cookies/get";
import './home.css'
import { Api } from '../../context/api/api';
import { CardTeste } from '../../componentes/home/cards/cardTeste';
import { Cabecalho } from '../../componentes/home/cabecalho';
import { DadosCard } from '../../componentes/home/cards/dadosCard';
import { HeaderHome } from '../../componentes/home/headerHome/headerHome';
import { Search } from '../../componentes/home/headerHome/search/search';

export function Home() {

    const [dadosCard, setDadosCard] = useState([]);
    const [unidadeSelecionada, setunidadeSelecionada] = useState(1);
    const [dadosDigitados, setDadosDigitados] = useState('');

    const quandoMostrarCabecalho = useBreakpointValue({
        base: false,
        lg: true,
    })

    const onKeySubmit = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();

            console.log(event.value)
            console.log(dadosDigitados)

            if (dadosDigitados.length == 0, dadosDigitados == null) {
                setDadosCard('ALL');
            }

            Api.get('/v1/web/acessado/' + GetCookie('idusu') + '/' + unidadeSelecionada + '/1' + '/' + dadosDigitados).then(
                function (response) {
                    setDadosCard(response.data)
                })
        }
    }

    useEffect(() => {
        if (unidadeSelecionada) {
            Api.get('/v1/web/acessado/' + GetCookie('idusu') + '/' + unidadeSelecionada + '/1' + '/ALL').then(
                function (response) {
                    setDadosCard(response.data)
                })
        }
    }, [unidadeSelecionada]);

    return (
        <Flex flexDir='column' w='100%' bg='#e2e2ee' align='center'>
            <HeaderHome />
            <Search>
                <Input
                    onChange={(ev) => setDadosDigitados(ev.target.value)}
                    h={['3rem', '3rem', '3rem', '1.75rem']}
                    maxHeight='2rem'
                    w='100%'
                    maxWidth='100%'
                    bg='white'
                    borderColor='white'
                    placeholder='Pesquisar...'
                    _placeholder={{ color: 'black', fontSize: '1rem', justifyContent: 'center' }}
                    color='black'
                    focusBorderColor="white"
                    type='text'
                    onKeyPress={onKeySubmit}
                />
            </Search>
            <Flex w='100%' h='89.5vh'>

                <Flex bg='#e2e2ee' flexDir='column' w='100%'>
                    <Cabecalho mostrarCabecalho={quandoMostrarCabecalho} />

                    <Grid className='gridHome'>

                        <DadosCard data={dadosCard} />
                        {/* <CardTeste /><CardTeste /><CardTeste /><CardTeste /><CardTeste />
                        <CardTeste /><CardTeste /><CardTeste /><CardTeste /><CardTeste />
                        <CardTeste /><CardTeste /><CardTeste /><CardTeste /><CardTeste />
                        <CardTeste /><CardTeste /><CardTeste /> */}

                    </Grid>
                </Flex>
            </Flex>
        </Flex>
    )
}