import { Flex, Grid } from "@chakra-ui/react";
import { useState } from "react";
import { GraficoParada } from "./graficoParada";

export function ChamadaGraficoParada(props) {

    if(props.data.length == 0){
        var dadosLength = false;
    }else{
        var dadosLength = true;
    }

    return (
        <Grid>
            
            {!dadosLength ? <Flex align='center' justify='center' color='black' bg='white' boxShadow='xl' mt='1rem' h='3rem' id='semDados'>Sem dados</Flex> : null }
            {dadosLength ? <Flex bg='lightgreen' justify='center' w='100%' h='60vh'> <GraficoParada data={props.data} id='grafico' /> </Flex> : null }

        </Grid>
    )
}