import React, { useEffect, useState } from 'react'
import { Flex, Grid, Input, useBreakpointValue } from "@chakra-ui/react";
import GetCookie from "../../context/cookies/get";
import { Api } from '../../context/api/api';
import { HeaderHome } from '../../componentes/home/headerHome/headerHome';
import { Search } from '../../componentes/home/headerHome/search/search';
import { Cabecalho } from '../../componentes/home/cabecalho';
import { DadosCard } from '../../componentes/home/cards/dadosCard';
import { Navigate, useParams } from 'react-router';
import { SetCookie } from '../../context/cookies/set';

export function Home() {

    const Private = ({ children }) => {

        if (GetCookie('login') == 'false') {
            return <Navigate to="/" />
        }

        return children;
    }

    var { modulo } = useParams();

    const [dadosCard, setDadosCard] = useState([]);
    const [unidadeSelecionada, setunidadeSelecionada] = useState(1);
    const [dadosDigitados, setDadosDigitados] = useState('');
    {console.log(dadosDigitados)}

    if (modulo) {
        //Buscar dados do modulo

        if (GetCookie('modulo') == modulo) {

        } else {
            SetCookie('modulo', modulo, '');

            Api.get('/v1/web/acessado/' + GetCookie('idusu') + '/' + 0 + '/1' + '/' + modulo).then(
                function (response) {
                    setDadosCard(response.data)
                })
        }
    }

    const quandoMostrarCabecalho = useBreakpointValue({
        base: false,
        lg: true,
    })

    const onKeySubmit = (event) => {
        var dadosLocal = dadosDigitados + event.key; // validar teclas pelo console do event(code). se for clicado enter ou espaço, entao nao colocar o dadosDigitados + event.key

        if (event.code === 'Enter') {
            dadosLocal = dadosDigitados

        } else {
            dadosLocal = dadosDigitados + event.key

            if (dadosLocal === null || dadosLocal === "") {
                dadosLocal = 'ALL'
            }
        }

        if (dadosLocal === null || dadosLocal === "") {
            dadosLocal = 'ALL'
        }

        if (event.key === 'Enter') {
            event.preventDefault();

            if (dadosDigitados.length == 0) {
                dadosLocal = 'ALL'
            }

            Api.get('/v1/web/acessado/' + GetCookie('idusu') + '/' + unidadeSelecionada + '/1' + '/' + dadosLocal).then(
                function (response) {
                    setDadosCard(response.data)
                })
        }
    }

    useEffect(() => {
        if (modulo) {
            var busca = modulo;
        } else {
            var busca = 'ALL';
        }

        Api.get('/v1/web/acessado/' + GetCookie('idusu') + '/' + unidadeSelecionada + '/1' + '/' + busca).then(
            function (response) {
                setDadosCard(response.data)
            })

    }, [unidadeSelecionada]);

    return (
        <Private>
            <Flex flexDir='column' bg='#e2e2ee' align='center'>
                    <Search>
                        <Input
                            onChange={((ev) => setDadosDigitados(ev.target.value) ?? null)}
                            // onKeyPress={onKeySubmit}
                            // value={dadosDigitados}
                            id='busca'
                            h={['3rem']}
                            maxHeight='2rem'
                            w='100%'
                            maxWidth='100%'
                            bg='#4f4e6c'
                            borderColor='#4f4e6c'
                            borderRadius='32px'
                            placeholder='Pesquisar...'
                            _placeholder={{ color: '#abaac2', fontSize: '1rem', justifyContent: 'center' }}
                            _focus={{ border: 'none', boxShadow: 'none' }}
                            _hover={{ borderColor: '#4f4e6c' }}
                            color='white'
                            focusBorderColor="white"
                            type='text'
                        />
                    </Search>

                <Flex w='100%' h='100vh'>

                    <Flex bg='#e2e2ee' flexDir='column' w='100%'>
                        <Cabecalho mostrarCabecalho={quandoMostrarCabecalho} />

                        <Grid bg='#e2e2ee' className='gridHome'>

                            <DadosCard data={dadosCard} />

                        </Grid>
                    </Flex>
                </Flex>
            </Flex>
        </Private>
    )
}
