import { Button, Flex, Text } from "@chakra-ui/react";
import { BsBarChart } from "react-icons/bs";

export function CardTeste() {
    return (
        <>
            <Button bg='white' color='black' w='95%' h='115px' p='1rem' m='1rem' _hover={{ bgColor: 'black', }}>

                <Flex w='80%' h={['100px', '100px', '100px', '75%',]} bg='white' flexDir='column' justify='center' align='start'>

                    <Text style={{ color: 'gray', fontWeight: 'bold' }} fontSize={['16px', '16px', '0.75rem', '14px',]}>Ranking de Parada</Text>
                    <Text fontSize={['16px', '16px', '1.5rem', '18px',]}>Ranking dos 10 mais motivos de parada</Text>
                    
                </Flex>

                <Flex bg='aqua' w='20%' h={['100px', '100px', '100px', '75%',]} justify='center' align='center'>
                    <BsBarChart size={50} />
                </Flex>

            </Button>
        </>
    )
}