import { Flex, Text } from "@chakra-ui/react";
import { AutenticacaoContext } from "../../context/autenticacao";
import GetCookie from "../../context/cookies/get";

interface CabecalhoProps {
    mostrarCabecalho?: boolean;
}

export function Cabecalho({ mostrarCabecalho = true }: CabecalhoProps) {
    return (
        <AutenticacaoContext.Provider value={{}}>
            {mostrarCabecalho && (
            <Flex flexDir='column' color='#616161' w='100%'>
                <Text ml='1.1rem' fontSize={['1rem', '1rem', '1rem', '1rem',]}>Dashboard</Text>
                <Text ml='1rem' fontSize={['1rem', '1rem', '2rem', '1.5rem',]} fontWeight='bold'>Bem vindo(a), {GetCookie('nomeusu')}</Text>
                <Text ml='1.1rem' fontSize={['1rem', '1rem', '1rem', '1rem',]} color='#2e2e2' fontWeight='900'>Veja o que está acontecendo.</Text>
            </Flex>
            )}
        </AutenticacaoContext.Provider>
    )
}