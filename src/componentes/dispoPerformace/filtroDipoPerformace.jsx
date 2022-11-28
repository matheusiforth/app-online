import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Stack, DrawerFooter, Button, Text } from '@chakra-ui/react';
import { BsCheck2All } from 'react-icons/bs';
import { BiFilter } from 'react-icons/bi'
import { FiTrash2 } from 'react-icons/fi'
import { Lista } from '../genericos/dropList';

export function FiltroDispoPerformace() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button onClick={onOpen} border='1px solid blue' color='#616161' textTransform='uppercase' size='sm'> <BiFilter fontSize='1.5rem' color='blue' cursor='pointer' /> Filtros</Button>

            <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
                <DrawerOverlay />      {/* bg='#2C2C57'  */}
                <DrawerContent color='white' bg='#2C2C57'>

                    <DrawerCloseButton fontSize={'1rem'} />
                    <DrawerHeader>...</DrawerHeader>
                    <DrawerBody>

                        <Stack spacing='2rem'>
                            <Lista label="Linha Mestre">
                                <option>rc4</option>
                                <option>rc1</option>
                            </Lista>

                        </Stack>

                    </DrawerBody>

                    <DrawerFooter flexDir='column'>
                        <Button w='100%' textTransform='uppercase' fontSize='14px' leftIcon={<FiTrash2 fontSize='18px' color='white' />}>Limpar</Button>
                        <Button w='100%' mt='1rem' textTransform='uppercase' fontSize='14px' align='center' justify='cemter' leftIcon={<BsCheck2All fontSize='25px' color='white' />}>
                            <Text ml='1rem'>Aplicar Filtro</Text>
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}