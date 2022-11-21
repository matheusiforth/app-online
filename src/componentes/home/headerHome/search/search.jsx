import React, { useState, useMemo, Children } from "react";
import { Button, Flex, Icon, Input, Tooltip } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

export function Search({ children }) {

    // const [dadosDigitados, setDadosDigitados] = useState('');

    // const onKeySubmit = (event) => {
    //     if (event.key === 'Enter') {
    //         event.preventDefault();
    //         console.log(event.value)
    //         console.log(dadosDigitados)

    //         // Api.get('/v1/web/acessado/' + GetCookie('idusu') + '/' + '/1' + '/1/ani').then(
    //         //     function (response) {
    //         //         setCardBusca(response.data)
    //         //     })
    //     }
    // }

    return (
        <Flex
            bg='white'
            w={['600px', '600px', '600px', '600px', '800px', '900px']}
            maxWidth='900px' h={['3rem', '3rem', '4rem', '2rem', '3rem',]}
            maxHeight='4rem' px='1rem' py={['0.25rem', '0.25rem', '0.25rem', '0.18rem']}
            borderRadius='full'
            justify='center'
            align='center'
            position='absolute'
            mt={['0.75rem', '0.75rem', '0.75rem', '0.25rem']}
        >

            {/* tooltip = legenda embaixo (hints) */}
            <Tooltip label='Campo de pesquisa' fontSize='md'>

                {children}

            </Tooltip>
            {/* {console.log(dadosDigitados)} */}
        </Flex>
    )
}

{/* const [busca, setBusca] = useState("");

// const dadosFiltrados = useMemo(() => {
//     const lowerBusca = busca.toLowerCase();
//     return data.filter((data) => data.toLowerCase().includes(lowerBusca)) // startsWith pega só o começo da palavra includes pega tudso
// }, [busca])

<Tooltip label='Pesquisar' fontSize='md'>

<Button bg='rgba(226, 226, 238, 0.8)' _hover='rgba(226, 226, 238, 0.8)' size='md'>
    <Icon as={RiSearchLine} cursor='pointer' color='#2C2C57' />
</Button>

</Tooltip> */}