import { Flex, Spacer, Text } from "@chakra-ui/react";
import { FiltroDispoPerformace } from "../../componentes/dispoPerformace/filtroDipoPerformace";
import { Header } from "../../componentes/header/header";
import { AutenticacaoContext } from "../../context/autenticacao";

export function DispoPerformace() {
    // useEffect(() => {
    //     if (unidadeSelecionada) {
    //         Api.get('/v1/web/acessado/' + GetCookie('idusu') + '/' + unidadeSelecionada + '/1' + '/ALL').then(
    //             function (response) {
    //                 setDadosCard(response.data)
    //             })
    //     }
    // }, [unidadeSelecionada]);

    return (
        <Flex flexDir='column'>
            <Header />
            <Flex w='100%' h='89.5vh' >
                <Flex bg='#e2e2ee' flexDir='column' w='100%' py='1rem' px='2rem' >

                    <AutenticacaoContext.Provider value={{}}>

                        <Text color='#616161' fontSize='0.75rem' textTransform='uppercase'>Apresenta em tempo real, indicadores de Produção, Qualidade e Eficiência</Text>
                        <Text color='#616161' fontSize={['1rem', '1rem', '2rem', '1.5rem',]} fontWeight='bold'>Produção</Text>
                        <Flex align='center' mt='-12px'>

                            <Text color='#616161' fontSize={['1rem', '1rem', '1rem', '1rem',]}>
                                Todas as Linhas
                            </Text>
                            <Spacer />
                            <FiltroDispoPerformace />

                        </Flex>

                    </AutenticacaoContext.Provider>

                    <Flex flexDir='row' mt='1rem' fontSize='18px' bg='red' mb='0.25rem'>
                        <Flex w='300px' h='100px' bg='#cccccc' color='black' justify='center' align='center' flexDir='column' fontWeight='bold'>Linha 01 - Retifica (RC4) </Flex>
                        <Flex w='300px' h='100px' bg='green' color='white' justify='center' align='center' flexDir='column' fontWeight='bold'> <Text> 100,00 </Text> Disponibilidade (DGFM)</Flex>
                        <Flex w='300px' h='100px' bg='#f7ca49' color='black' justify='center' align='center' flexDir='column' fontWeight='bold'><Text> 107,64 </Text> Eficiência</Flex>
                        <Flex w='300px' h='100px' bg='blue' color='white' justify='center' align='center' flexDir='column' fontWeight='bold'><Text> 75,80 </Text> Qualidade</Flex>
                        <Flex w='300px' h='100px' bg='orange' color='white' justify='center' align='center' flexDir='column' fontWeight='bold'><Text> 80,50 </Text> OEE</Flex>
                        <Flex w='300px' h='100px' bg='#27ab83' color='white' justify='center' align='center' flexDir='column' fontWeight='bold'><Text> 528h:00min </Text> MTBF</Flex>
                        <Flex w='300px' h='100px' bg='#65d5ac' color='white' justify='center' align='center' flexDir='column' fontWeight='bold'><Text> 00h:39min </Text> MTTR</Flex>
                    </Flex>
                    <Flex flexDir='row' mt='1rem' fontSize='18px' bg='red' mb='0.25rem'>
                        <Flex w='300px' h='100px' bg='#cccccc' color='black' justify='center' align='center' flexDir='column' fontWeight='bold'>Linha 01 - Retifica (RC4) </Flex>
                        <Flex w='300px' h='100px' bg='green' color='white' justify='center' align='center' flexDir='column' fontWeight='bold'> <Text> 100,00 </Text> Disponibilidade (DGFM)</Flex>
                        <Flex w='300px' h='100px' bg='#f7ca49' color='black' justify='center' align='center' flexDir='column' fontWeight='bold'><Text> 0,00 </Text> Eficiência</Flex>
                        <Flex w='300px' h='100px' bg='blue' color='white' justify='center' align='center' flexDir='column' fontWeight='bold'><Text> 0,00 </Text> Qualidade</Flex>
                        <Flex w='300px' h='100px' bg='orange' color='white' justify='center' align='center' flexDir='column' fontWeight='bold'><Text> 0,00 </Text> OEE</Flex>
                        <Flex w='300px' h='100px' bg='#27ab83' color='white' justify='center' align='center' flexDir='column' fontWeight='bold'><Text> 528h:00min </Text> MTBF</Flex>
                        <Flex w='300px' h='100px' bg='#65d5ac' color='white' justify='center' align='center' flexDir='column' fontWeight='bold'><Text> 00h:00min </Text> MTTR</Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}