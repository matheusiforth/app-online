import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Stack, DrawerFooter, Button, Text, Input } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { BsCheck2All } from 'react-icons/bs';
import { BiFilter } from 'react-icons/bi'
import { FiTrash2 } from 'react-icons/fi'
import { Lista } from '../genericos/dropList';
import { SetCookie } from '../../context/cookies/set';
import { ConverteData } from '../../context/ConverteData';
import GetCookie from '../../context/cookies/get';
import { Api } from '../../context/api/api';

function leftPad(value, totalWidth, paddingChar) {
    var length = totalWidth - value.toString().length + 1;
    return Array(length).join(paddingChar || '0') + value;
}

function DtOntem() {
    var dataOntem = new Date();
    return dataOntem.getFullYear() + '-' + leftPad((dataOntem.getMonth() + 1), 2) + '-' + leftPad((dataOntem.getDate() - 1), 2)
}

function DtAtual() {
    var dataAtual = new Date();
    return dataAtual.getFullYear() + '-' + leftPad((dataAtual.getMonth() + 1), 2) + '-' + leftPad(dataAtual.getDate(), 2)
}

function DtMes() {
    var dataMes = new Date();
    return dataMes.getFullYear() + '-' + leftPad((dataMes.getMonth() + 1), 2) + '-' + leftPad(dataMes.getDate(), 2)
}

function DtInicio() {
    var dataInicio = new Date();
    return '01/' + leftPad((dataInicio.getMonth() + 1), 2) + '/' + dataInicio.getFullYear()
}

function DtFinal() {
    var dataFinal = new Date();
    const lastDay = new Date(dataFinal.getFullYear(), dataFinal.getMonth() + 1, 0);
    const lastDayDate = lastDay.toLocaleDateString()
    return lastDayDate
}

export function FiltroParada(props, { data }) {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [dataInicialFornecida, setDataInicialFornecida] = useState();
    const [dataFinalFornecida, setDataFinalFornecida] = useState();

    var unidade = '';

    useEffect(() => {
        Api.get('/v1/unidade/usuario/' + GetCookie('idusu')).then(
            function (response) {
                unidade = response.data;
            })
    })

    function Abrir() {
        onOpen();
    };

    function Fechar() {
        onClose();
    };

    function Limpa() {
        setDataInicialFornecida('');
        setDataFinalFornecida('');
    };

    function OnOntem() {
        setDataInicialFornecida(DtOntem());
        setDataFinalFornecida(DtOntem());
        console.log('Ontem')
    };

    function OnHoje() {
        setDataInicialFornecida(DtAtual());
        setDataFinalFornecida(DtAtual());
        console.log('Hoje')
    };

    // function OnMes() {
    //     setDataInicialFornecida(DtAtual());
    //     setDataFinalFornecida(DtAtual());
    //     console.log('mes')
    // }

    function Aplicar() {
        SetCookie('dataInicio', ConverteData(dataInicialFornecida), '');
        SetCookie('dataFinal', ConverteData(dataFinalFornecida), '');
        (data())
    }

    return (
        <>
            <Button onClick={Abrir} border='1px solid blue' color='#616161' textTransform='uppercase' size='sm'> <BiFilter fontSize='1.5rem' color='blue' cursor='pointer' />Filtros</Button>

            <Drawer isOpen={isOpen} placement='right' onClose={Fechar}>
                <DrawerOverlay />
                <DrawerContent color='white' bg='#2C2C57' >

                    <DrawerCloseButton fontSize={'1rem'} />
                    <DrawerHeader>...</DrawerHeader>
                    <DrawerBody>

                        <Stack spacing='2rem'>

                            {/* {props.data.map(dados => */}

                                <Lista label="Unidade">
                                    <option>dados'unidade'{[]}</option>
                                </Lista>

                            {/* )} */}

                            <Lista label="Linhas">
                                <option>LINHA 01 - FW1 (RC4)</option>
                            </Lista>

                            <div>
                                <label style={{ fontWeight: 'bold' }}>Período</label>
                                <Stack direction='row' spacing='5px'>
                                    <Button
                                        name="ButtonOntem"
                                        bg='gray.900'
                                        variant="filled"
                                        _hover={{ bgColor: 'gray.900' }}
                                        _focus={{ bgColor: 'white', color: 'black' }}
                                        size="lg"
                                        w='100%'
                                        fontSize='14px'
                                        textTransform='uppercase'
                                        onClick={OnOntem}
                                    >Ontem</Button>

                                    <Button
                                        name="ButtonHoje"
                                        bg='gray.900'
                                        variant="filled"
                                        _hover={{ bgColor: 'gray.900' }}
                                        _focus={{ bgColor: 'black' }}
                                        size="lg"
                                        w='100%'
                                        fontSize='14px'
                                        textTransform='uppercase'
                                        onClick={OnHoje}
                                    >Hoje</Button>

                                    <Button
                                        name="ButtonMes"
                                        bg='gray.900'
                                        variant="filled"
                                        _hover={{ bgColor: 'gray.900' }}
                                        _focus={{ boxShadow: '0 0 1px 2px #00f4ff, 0 1px 1px rgb(0, 0, 0)', }}
                                        size="lg"
                                        w='100%'
                                        fontSize='14px'
                                        textTransform='uppercase'
                                    // onClick={() => props.DeFilhoPraPai()}
                                    >Este mês</Button>
                                </Stack>
                            </div>

                            <div>
                                <label style={{ fontWeight: 'bold', }}>Informe a data Inicial</label>
                                <Input
                                    placeholder="Selecione a data inicial"
                                    size="md"
                                    type="date"
                                    color='white'
                                    _placeholder={{ color: 'white' }}
                                    bg='#171923'
                                    value={dataInicialFornecida}
                                    onChange={(e) => setDataInicialFornecida(e.target.value)}
                                />
                            </div>

                            <div>
                                <label style={{ fontWeight: 'bold', }}>Informe a data Final</label>
                                <Input
                                    placeholder="Selecione a data final"
                                    size="md"
                                    type="date"
                                    color='white'
                                    bg='#171923'
                                    value={dataFinalFornecida}
                                    onChange={(e) => setDataFinalFornecida(e.target.value)}
                                />
                            </div>
                        </Stack>

                    </DrawerBody>

                    <DrawerFooter flexDir='column'>
                        <Button
                            w='100%'
                            textTransform='uppercase'
                            fontSize='14px'
                            bg='#3d3d64'
                            leftIcon={<FiTrash2 fontSize='18px' color='white' />}
                            onClick={Limpa}
                            typw='reset'
                        >Limpar</Button>
                        <Button
                            type='submit'
                            w='100%'
                            mt='1rem'
                            textTransform='uppercase'
                            fontSize='14px'
                            bg='#3d3d64'
                            align='center'
                            justify='cemter'
                            onClick={Aplicar}
                            leftIcon={<BsCheck2All fontSize='25px' color='white' />}
                        >
                            <Text>Aplicar Filtro</Text>
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}