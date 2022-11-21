import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, useBreakpointValue, Flex, Stack, DrawerFooter, Button, Icon, IconButton, Text, Spacer, Input } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { BsCheck2All } from 'react-icons/bs';
// import { Api } from '../../../context/api/api';
// import GetCookie from '../../../context/cookies/get';
import { BiFilter } from 'react-icons/bi'
import { FiTrash2 } from 'react-icons/fi'
// import { PeriodoButton } from './button/periodo';
import { Lista } from '../genericos/dropList';
import { DataFinal } from '../genericos/buttonDataFinal';
import { DataInicial } from '../genericos/buttonDataInicial';



export function FiltroParada() {
    const { isOpen, onOpen, onClose } = useDisclosure()

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
        // <Flex w='1fr' h='5rem' px='1.50rem' align='center' bg='#2C2C57' boxShadow='xl'>
        <>
            <Button onClick={onOpen} border='1px solid blue' color='#616161' textTransform='uppercase' size='sm'> <BiFilter fontSize='1.5rem' color='blue' cursor='pointer' /> Filtros</Button>

            <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
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
                            
                            {/* <div>
                                <label style={{ fontWeight: 'bold' }}>PERÍODO</label>
                                <PeriodoButton />
                            </div> */}

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