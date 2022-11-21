import React from "react";
import { createRef, useContext, useState } from 'react';
import { Flex, Stack, Button, Img, Input, Box, Text } from '@chakra-ui/react';
import LogoIcepLogin from '../../imagens/Logoicep.png'
import '../login/login.css'
import { AutenticacaoContext } from '../../context/autenticacao';
import { Api } from '../../context/api/api';

// experiments: {
//     topLevelAwait: true
//   }

// try {
//     const { auth } = response.data;
//     if (auth) {
//         const { token } = response.data;
//         await AsyncStorage.setItem('token', token);
//         navigation.navigate('Home', { token: token });
//     } else {
//         Alert.alert('Erro de Login', 'Não foi possivel fazer o login');
//         // setIsLoading(false)
//     }
// } catch (err) {
//     Alert.alert('Erro de Login', 'Não foi possivel fazer o login');
//     console.log("Error:" + err.message);
// }

export function Login() {

    const { autenticado, login } = useContext(AutenticacaoContext);
    const [user, setUser] = useState('');
    const [senha, setSenha] = useState('');

    // const [inputRefsArray] = useState(() =>
    //     Array.from({ length: 2 }, () => createRef())
    // );


    const handleSubmit = (event) => {
        event.preventDefault();
        login(user, senha);
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            document.getElementById("senha").focus();
        }
    }
    // handleSubmit
    const onKeySubmit = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            login(user, senha);
        }
    }

    // console.log(autenticado);

    return (
        <Flex w='100%' h='100vh' justify='center' align='center' bg='#e2e2ee' flexDir='column'>
            <Img className='LogoLoginIcep' src={LogoIcepLogin} alt='logo' mb='1rem' />

            {/* mobile small, 300px, meu note */}
            <Flex w={['300px', '300px', '90%', '300px', '500px', '22.5%']} h={['300px', '300px', '900px', '300px', '500px', '360px',]} maxHeight='900px' justify='center' align='center' bg='#454588' borderRadius={8}>
                <Stack spacing={['1.5rem', '1.5rem', '5rem', '1.5rem', '1rem', '1rem']} w='90%' h={['300px', '300px', '800px', '300px', '350px', '345px',]} maxWidth='90%' pt='1rem' maxHeight='800px' align='center' bg='#454588' >
                    {/* onKeyPress={handleKeyPressFocus} */}

                    <Box w='100%' h={['900px', '900px', '120px', '900px', '100.5px', '100px',]} maxHeight='225px' bg='#454588' align='center'>
                        <Text color='white' fontSize={['80px', '16px', '50px', '24px',]}>Usuário</Text>
                        <Input
                            bg='white'
                            h={['20px', '20px', '100px', '50px',]}
                            onChange={(e) => setUser(e.target.value)}
                            onKeyPress={handleKeyPress}
                            id='usuario'
                            name='user'
                            autoFocus
                            type='text'
                            placeholder='Digite seu Usuario'
                            focusBorderColor="#00f4ff"
                            border='3px solid'
                            bgColor="white"
                            variant="filled" //sem borda, apenas a cor de fundo quando nao focado/clicado
                            color="black"
                            _placeholder={{ color: 'black' }}
                            _hover={{ bgColor: 'white' }}
                            _focus={{ bgColor: 'white' }}
                            _autofill={{ bgColor: 'red.500' }}
                            className='inputLogin'
                        />
                    </Box>

                    <Box bg='#454588' align='center' w='100%' h={['120px', '120px', '120px', '100.5px', '100.5px', '100px',]} maxHeight='225px'>
                        <Text color='white' fontSize={['80px', '16px', '50px', '24px',]}>Senha</Text>
                            <Input
                                bg='white'
                                h={['20px', '20px', '100px', '50px',]}
                                onChange={(e) => setSenha(e.target.value)}
                                onKeyPress={onKeySubmit}
                                id='senha'
                                name='senha'
                                type='password'
                                placeholder='Digite sua Senha'
                                focusBorderColor="#00f4ff"
                                border='3px solid'
                                bgColor="white"
                                variant="filled" //sem borda, apenas a cor de fundo quando nao focado/clicado
                                color="black"
                                _placeholder={{ color: 'black' }}
                                _hover={{ bgColor: 'white' }}
                                _focus={{ bgColor: 'white' }}
                                _autofill={{ bgColor: 'red.500' }}
                                className='inputLogin'
                            />
                    </Box>

                    <Button
                        w='100%'
                        h={['20px', '20px', '120px', '55px',]}
                        fontSize={['16px', '16px', '36px', '18px',]}
                        type="submit"
                        bg='#d6bcfa'
                        color='black'
                        onClick={handleSubmit}>Acessar ao sistema</Button>

                    {/* <p>{String(autenticado)}</p> */}
                </Stack>
            </Flex>
        </Flex>
    )
}