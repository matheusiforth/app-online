import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { Profile } from "./profile/profile";
import { SideBar } from "./sidebar/sidebar";

export function Header(props) {
    // console.log(props)
    
    const quandoMostrarPerfil = useBreakpointValue({
        base: false,
        lg: true,
    })

    return (
        <>
            <Flex w='100%' h='10.5vh' px='1rem' align='center' bg='#2C2C57' boxShadow='xl'>
                <SideBar />
                
                <Flex ml="auto">
                    <Profile mostrarPerfil={quandoMostrarPerfil} />
                </Flex>
            </Flex>
        </>
    )
}