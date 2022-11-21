import { Avatar, Box, Button, Flex, Menu, MenuButton, MenuList, Text } from "@chakra-ui/react";
import { FormEvent } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AutenticacaoContext } from "../../../context/autenticacao";
import GetCookie from "../../../context/cookies/get";
import { SetCookie } from "../../../context/cookies/set";

interface ProfileProps {
    mostrarPerfil?: boolean;
}

export function Profile({ mostrarPerfil = true }: ProfileProps) {
    //minuto 3:07 vapitulo 4 - pasta 4 responsividade - header

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
    }

    const navigate = useNavigate();

    function Sair() {
        navigate("/");
        SetCookie('idusu', '', '');
        SetCookie('nomeusu', '', '');
        SetCookie('idperfil', '', '');
        SetCookie('idsetor', '', '');
        SetCookie('token', '', '');
        SetCookie('logout', 'true', '');
    }

    return (
        <Flex onSubmit={handleSubmit}>
            {mostrarPerfil && (
                <Box mr="0.25rem" textAlign="right" flexDir='row'>
                    <AutenticacaoContext.Provider value={{}}>
                        <Text color='white'>{GetCookie('nomeusu')}</Text>
                        <Button
                            color="gray.300"
                            fontSize="small"
                            fontStyle='italic'
                            textDecorationLine='underline'
                            cursor='pointer'
                            bg='none'
                            boxSize='1.25rem'
                            // _hover={{ bgColor: 'none' }}
                            onClick={Sair} >Sair</Button>
                    </AutenticacaoContext.Provider>
                </Box>
            )}
            {/* {GetCookie('nomeusu')}> */}

            <Menu>
                <MenuButton> <Avatar size={['md', 'md', 'lg', 'md',]} name={GetCookie('nomeusu') ?? undefined} /> </MenuButton>
                <MenuList> <Link to='/'> <Button color='white' w='100%' >Sair</Button> </Link> </MenuList>
            </Menu>
        </Flex>
    )
}