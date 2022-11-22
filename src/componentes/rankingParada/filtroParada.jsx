import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, useBreakpointValue, Flex, Stack, DrawerFooter, Button, Icon, IconButton, Text, Spacer, Input } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { BsCheck2All } from 'react-icons/bs';
import { BiFilter } from 'react-icons/bi'
import { FiTrash2 } from 'react-icons/fi'
import { Lista } from '../genericos/dropList';
import { DataFinal } from '../genericos/buttonDataFinal';
import { DataInicial } from '../genericos/buttonDataInicial';
import { PeriodoButton } from '../genericos/periodo';
import { SetCookie } from '../../context/cookies/set';

function leftPad(value, totalWidth, paddingChar) {
    var length = totalWidth - value.toString().length + 1;
    return Array(length).join(paddingChar || '0') + value;
}

function DtOntem() {
    var data = new Date(Date());
    return leftPad(data.getDate(), 2) + '/' + leftPad((data.getMonth() + 1), 2) + '/' + data.getFullYear()
}

function DtAtual() {
    var data = new Date();
    return leftPad(data.getDate(), 2) + '/' + leftPad((data.getMonth() + 1), 2) + '/' + data.getFullYear()
}

console.log(DtAtual())

function DtInicio() {
    var data = new Date();
    return '01/' + leftPad((data.getMonth() + 1), 2) + '/' + data.getFullYear()
}

function DtFinal() {
    var data = new Date();
    const lastDay = new Date(data.getFullYear(), data.getMonth() + 1, 0);
    const lastDayDate = lastDay.toLocaleDateString()
    return lastDayDate
}

export function FiltroParada(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    // const [dataInicial, setDataInicial] = useState();
    // const [dataFinal, setDataFinal] = useState();

    function Fechar() {
        onClose();
        (props.data())
    }

    function Abrir() {
        onOpen();
    }


    // const [teste, setTeste] = useState('')

    // useEffect(() => {
    //     Api.get('v1/web/menu/sidebar/' + GetCookie('idusu') + '/' + GetCookie('idsetor')).then(
    //         function (response) {
    //             setTeste(response.data)
    //         })
    // }, []
    // );

    // const versaoPc = useBreakpointValue({
    //     base: false,
    //     lg: true
    // })

    return (
        <>
            <Button onClick={Abrir} border='1px solid blue' color='#616161' textTransform='uppercase' size='sm'> <BiFilter fontSize='1.5rem' color='blue' cursor='pointer' /> Filtros</Button>

            <Drawer isOpen={isOpen} placement='right' onClose={Fechar}>
                <DrawerOverlay />
                <DrawerContent color='white' bg='#2C2C57'>

                    <DrawerCloseButton fontSize={'1rem'} />
                    <DrawerHeader>...</DrawerHeader>
                    <DrawerBody>

                        <Stack spacing='2rem'>
                            <Lista label="LINHAS">
                                <option>rc4</option>
                                <option>rc1</option>
                            </Lista>

                            <div>
                                <label style={{ fontWeight: 'bold' }}>PERÍODO</label>
                                <PeriodoButton />
                            </div>

                            <div>
                                <DataInicial />
                            </div>

                            <div>
                                <DataFinal />
                            </div>


                        </Stack>

                    </DrawerBody>

                    <DrawerFooter flexDir='column'>
                        <Button w='100%' textTransform='uppercase' fontSize='14px' leftIcon={<FiTrash2 fontSize='18px' color='white' />}>Limpar</Button>
                        <Button w='100%' mt='1rem' textTransform='uppercase' fontSize='14px' align='center' justify='cemter' leftIcon={<BsCheck2All fontSize='25px' color='white' />}>
                            <Text ml='1rem'>Aplicar Filtro</Text>
                            {/* <Icon size='xx' as={BsCheck2All} /> */}
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
        // </Flex>
    )
}