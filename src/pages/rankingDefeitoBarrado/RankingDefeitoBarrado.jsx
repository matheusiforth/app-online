import { Flex, Grid, Spacer, Text } from "@chakra-ui/react";
import { Header } from "../../componentes/header/header";
import { FiltroDefeitoBarrado } from "../../componentes/rankingDefeitoBarrado/filtroDefeitoBarrado";
// import { CardTeste } from "../../componentes/home/cards/cardTeste";
import { AutenticacaoContext } from "../../context/autenticacao";

export function RankingDefeitoBarrado() {
    return (
        <Flex flexDir='column'>
            <Header />
            <Flex w='100%' h='89.5vh' >
                <Flex bg='#e2e2ee' flexDir='column' w='100%' py='1rem' px='2rem'>

                    <AutenticacaoContext.Provider value={{}}>

                        <Text ml='1.1rem' color='#616161' fontSize='0.75rem' textTransform='uppercase'>Ranking de Defeito Barrado</Text>
                        <Text ml='1rem' color='#616161' fontSize={['1rem', '1rem', '2rem', '1.5rem',]} fontWeight='bold'>Mês e dia</Text>
                        <Flex align='center' mt='-12px'>

                            <Text ml='1.1rem' mt='0.25rem' color='#616161' fontSize={['1rem', '1rem', '1rem', '1rem',]}>
                                LINHA 01 - FW1 (RC4)
                            </Text>
                            <Spacer />
                            <FiltroDefeitoBarrado />

                        </Flex>

                    </AutenticacaoContext.Provider>

                    <Grid>

                        {/* <CardBox data={dadosCard} /> */}
                        <Flex align='center' justify='center' color='black' bg='white' boxShadow='xl' mt='1rem' h='3rem'>Sem dados</Flex>

                    </Grid>
                </Flex>
            </Flex>
        </Flex>
    )
}