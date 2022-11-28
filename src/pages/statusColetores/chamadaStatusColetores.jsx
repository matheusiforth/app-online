import { Flex, Spacer, Text } from "@chakra-ui/react";
import { FiltroDispoPerformace } from "../../componentes/dispoPerformace/filtroDipoPerformace";
import { Header } from "../../componentes/header/header";
import { AutenticacaoContext } from "../../context/autenticacao";
import { RequisicaoStatusColetores } from "./requisocaoStatusColetores";

export function ChamadaStatusColetores() {
    return (
        <Flex flexDir='column'>
            <Header />
            <Flex w='100%' h='89.5vh' >
                <Flex bg='#e2e2ee' flexDir='column' w='100%' py='1rem' px='2rem' >

                    <AutenticacaoContext.Provider value={{}}>

                        <Text ml='1.1rem' color='#616161' fontSize='0.75rem' textTransform='uppercase'>Apresenta em tempo real o status dos Coletores</Text>
                        <Text ml='1rem' color='#616161' fontSize={['1rem', '1rem', '2rem', '1.5rem',]} fontWeight='bold'>Status dos Coletores</Text>
                        <Flex align='center' mt='-12px'>
                            <Text ml='1.1rem' color='#616161' fontSize={['1rem', '1rem', '1rem', '1rem',]}>
                                Todos os Coletores
                            </Text>
                            <Spacer />
                            <FiltroDispoPerformace />
                        </Flex>

                    </AutenticacaoContext.Provider>

                    <RequisicaoStatusColetores />

                </Flex>
            </Flex>
        </Flex>
    )
}