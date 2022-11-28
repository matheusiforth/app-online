import { Button, Icon, Img, Stack, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FiTrash2 } from "react-icons/fi";

function Click(test) {
}

export function BuscaDados(props) {
    return (
        <Stack spacing='1rem'>
            {props.data.map(dados =>
                <Button
                    modulo={props.nome}
                    bg='#3d3d64'
                    onClick={Click(props.id)}
                    mb='1rem'
                    leftIcon={<Img src={'/imagens/' + dados['idmodulo'] + '.png'} />}>

                    <Text color='white' align='center' justify='center'>
                        {props.nome}
                    </Text>

                    {/* <Icon as={props.icon} fontSize='1.28rem' cursor='pointer' color='white' m='auto' mr='1rem' /> */}
                    {/* <FontAwesomeIcon icon="coffee" /> */}
                </Button>
            )}
        </Stack>
    )
}