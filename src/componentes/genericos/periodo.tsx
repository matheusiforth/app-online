import { Button as ChakraButton, ButtonProps as ChakraButtonProps, Stack } from "@chakra-ui/react";

interface ButtonProps extends ChakraButtonProps {
    name: string;
}

export function PeriodoButton({ name, ...rest }: ButtonProps) {
    return (
        <Stack direction='row' bg='white' spacing='5px'>
            <ChakraButton
                name="Button"
                id="Button"
                className='buttonSidebarRakingParada'
                bg='gray.900'
                // border='2px'
                // borderColor='gray.900'
                variant="filled"
                _hover={{ bgColor: 'gray.900' }}
                _focus={{ bgColor: 'gray.900' }}
                size="lg"
                fontSize='14px'
                textTransform='uppercase'
                {...rest}
            >Ontem</ChakraButton>

            <ChakraButton
                name="Button"
                id="Button"
                className="buttonSidebarRakingParada"
                bg='gray.900'
                // border='2px'
                // borderColor='gray.900'
                variant="filled"
                _hover={{ bgColor: 'gray.900' }}
                _focus={{ bgColor: 'gray.900' }}
                size="lg"
                fontSize='14px'
                textTransform='uppercase'
                {...rest}
            >Hoje</ChakraButton>

            <ChakraButton
                name="Button"
                id="Button"
                className='buttonSidebarRakingParada'
                bg='gray.900'
                // border='2px'
                // borderColor='gray.900'
                variant="filled"
                _hover={{ bgColor: 'gray.900' }}
                _focus={{ bgColor: 'gray.900' }}
                size="lg"
                fontSize='14px'
                textTransform='uppercase'
                {...rest}
            >Este mês</ChakraButton>
        </Stack>
    )
}