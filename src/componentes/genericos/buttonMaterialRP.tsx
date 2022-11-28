import { Button as ChakraButton, ButtonProps as ChakraButtonProps, FormLabel, Stack } from "@chakra-ui/react";

interface ButtonProps extends ChakraButtonProps {
    name: string;
    label?: string;
}

export function ButtonMaterialRP({ name, label, ...rest }: ButtonProps) {
    return (
        <>
            {!!label && <FormLabel fontWeight='bold' htmlFor={name}>{label}</FormLabel>}
            <Stack direction='row' spacing='5px' mt='5px'>

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
                >Ambos</ChakraButton>

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
                >Pendente</ChakraButton>

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
                >Retrabalhado</ChakraButton>
            </Stack>
        </>
    )
}