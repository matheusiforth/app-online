import { Flex, Img, Text } from "@chakra-ui/react";
import { BsBarChart } from "react-icons/bs";

export function DadosCard(props) {
    // console.log(props)

    return (
        <>
            {props.data.map(dados =>

                <Flex bg='white' color='black' w='95%' h={['150px', '150px', '150px', '115px',]} m='1rem' key={dados['idform']} justify='center' align='center' cursor='pointer'>

                    <Flex w='100%' p='1rem' h={['100px', '100px', '100%', '100%',]} _hover={{ backgroundColor: 'lightgreen' }} bg='white' flexDir='column' justify='center' align='start'>

                        <Text style={{ color: 'gray', fontWeight: 'bold' }} fontSize={['16px', '16px', '0.75rem', '14px',]}>{dados['descmodulo']}</Text>
                        <Text color='black' fontSize={['16px', '16px', '1.5rem', '18px',]}>{dados['descform']}</Text>

                    </Flex>

                    <Flex h='100%' maxWidth={20} w='20%' justify='center' align='center'>
                        <Img src={'/imagens/' + dados['idmodulo'] + '.png'} alt='logo' m='auto' maxHeight='100px' maxWidth='82px' display='inline' />
                        {/* <BsBarChart size={50} /> */}
                    </Flex>

                </Flex>
            )}
        </>
    )
}