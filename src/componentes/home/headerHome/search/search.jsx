import React, { useState, useMemo, Children } from "react";
import { Button, Flex, Icon, Input, Tooltip } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

export function Search({ children }) {

    return (
        <Flex
            bg='white'
            w={['600px', '600px', '600px', '600px', '800px', '900px']}
            maxWidth='900px' h={['3rem', '3rem', '4rem', '2rem', '3rem',]}
            maxHeight='2.5rem'
            px='1rem'
            py={['0.25rem', '0.25rem', '0.25rem', '0.18rem']}
            borderRadius='8px'
            justify='center'
            align='center'
            position='absolute'
            mt={['0.75rem', '0.75rem', '0.75rem', '0.25rem']}
        >
            
            <Tooltip label='Campo de pesquisa' fontSize='md'>

                {children}

            </Tooltip>
        </Flex>
    )
}