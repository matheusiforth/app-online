import { Flex, Grid } from "@chakra-ui/react";
import { GraficoDefeito } from "./graficoDefeito";

export function ChamadaGraficoDefeito(props) {

    if(props.data.length == 0){
        console.log('deu boa')
        var dadosLength = false;
    }else{
        var dadosLength = true;
    }

    console.log(props.data.length)

    return (
        <Grid mt='1rem'>
            {!dadosLength ? <Flex align='center' justify='center' color='black' bg='white' boxShadow='xl' mt='1rem' h='3rem' id='semDados'>Sem dados</Flex> : null }
            {dadosLength ? <Flex bg='lightgreen' justify='center' w='100%' h='60vh'> <GraficoDefeito /> </Flex> : null }
        </Grid>
    )
}