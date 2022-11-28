import { FormLabel, Select as ChakraSelect, SelectProps as ChakraSelectProps } from "@chakra-ui/react";

interface SelectProps extends ChakraSelectProps {
    name: string;
    label?: string;
}

export function Lista({ name, label, ...rest }: SelectProps) {
    return (
        <div>
            {!!label && <FormLabel fontWeight='bold' htmlFor={name}>{label}</FormLabel>}

            <ChakraSelect
                name="select"
                id="select"
                bg='gray.900'
                border='2px'
                focusBorderColor="white"
                variant="filled"
                _hover={{ bgColor: 'gray.900', borderColor: 'white' }}
                _focus={{ bgColor: 'gray.900', borderColor: '#00f4ff' }}
                size="lg"
                placeholder='Selecione'
                {...rest}
            />
        </div>
    )
}