import { HamburgerIcon } from '@chakra-ui/icons';
import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, useBreakpointValue, Flex, DrawerFooter, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Api } from '../../../context/api/api';
import GetCookie from '../../../context/cookies/get';
import { SidebarItem } from './sidebarItem';

export function SideBar() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [teste, setTeste] = useState('')

    useEffect(() => {
        Api.get('v1/web/menu/sidebar/' + GetCookie('idusu') + '/' + GetCookie('idsetor')).then(
            function (response) {
                setTeste(response.data)

            })
    }, []
    );

    const versaoPc = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        // <Flex w='1fr' h='5rem' px='1.50rem' align='center' bg='#2C2C57' boxShadow='xl'>
        <>
            <HamburgerIcon onClick={onOpen} color='white' cursor='pointer' fontSize={['40px', '40px', '50px', '26px',]} />

            <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
                <DrawerOverlay />
                {/* #2C2C57 */}
                <DrawerContent color='white' bg='#2C2C57'>

                    <DrawerCloseButton color='white' />
                    <DrawerHeader color='white'>Menu</DrawerHeader>
                    <DrawerBody>

                        <SidebarItem data={teste} />

                    </DrawerBody>

                    <DrawerFooter align='center'>
                        <Text w='100%' color='white' >© iForth. 2022 <br /> Sistemas Inteligentes</Text>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
        // </Flex>
    )
}