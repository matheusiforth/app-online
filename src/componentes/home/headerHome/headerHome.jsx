import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { Profile } from "../../header/profile/profile";
import { Search } from './search/search'
import { SideBar } from '../../header/sidebar/sidebar'

export function HeaderHome() {
    
    const quandoMostrarPerfil = useBreakpointValue({
        base: false,
        lg: true,
    })

    return (
        <>  {/* 10.5vh */}
            <Flex w='100%' h='8vh' px='1rem' align='center' bg='#2C2C57' boxShadow='xl'>
                <SideBar />
                
                <Flex ml="auto">
                    <Profile mostrarPerfil={quandoMostrarPerfil} />
                </Flex>
            </Flex>
        </>
    )
}