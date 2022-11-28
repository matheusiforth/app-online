// import { Button, Flex, Grid, Text } from "@chakra-ui/react";
// import { useEffect, useState } from "react";
// import { IoMdFunnel } from "react-icons/io";
// import { MdSensors } from "react-icons/md";
// import { Api } from "./context/api/api";

// var loading = false;

// export function Teste() {

//   var statusLocal = 0;
//   var corStatus = '';
//   const [dados, setDados] = useState([]);

//   useEffect(() => {
//     if (!loading) {
//       Api.get('/v1/web/status/cr8/0').then(
//         function (response) {
//           setDados(response.data)
//           console.log(response.data)
//           loading = true;
//         })
//       setInterval(function () {
//         Api.get('/v1/web/status/cr8/0').then(
//           function (response) {
//             setDados(response.data)
//             console.log(response.data)
//             loading = true;
//           })
//       }, 30000);
//     }
//   }, [loading])

//   function cor(minutos, horas, dia) {
//     if (dia > 0) {
//       return '#f77273'
//     } if (horas > 0) {
//       return '#f77273'
//     } if (minutos < 3) {
//       return '#31ccaf'
//     } if (minutos < 5) {
//       return 'orange'
//     } if (minutos > 5) {
//       return '#f77273'
//     }
//   }

//   function fila(status) {
//     if (status == 1) {
//       return '#a09ebf'
//     } else {
//       return 'white'
//     }
//   }

//   function filaFonte(status) {
//     if (status == 1) {
//       return 'white'
//     } else {
//       return '#2C2C57'
//     }
//   }

//   function tipo(tiposensor, fila) {
//     if (tiposensor == 1) {
//       return <MdSensors size={50} color={filaFonte(fila)} />
//     } else {
//       return <IoMdFunnel size={50} color={filaFonte(fila)} />
//     }

//   }

//   function TempoParado(minutos, horas, dias) {
//     var retorno = '';
//     statusLocal = 0;
//     if (dias > 0) {
//       retorno = dias + 'd ';
//     }
//     if (horas > 0) {
//       retorno = retorno + horas + 'h ';
//     }
//     if (minutos > 60) {
//       retorno = retorno + parseInt(minutos) + 'm ';
//     }
//     if (minutos < 60) {
//       retorno = retorno + (minutos) + 'm ';
//     }
//     if (minutos >= 0) {
//       if (minutos < 5) {
//         retorno = '';
//         statusLocal = 1;
//         corStatus = '#31ccaf';
//         console.log(minutos)
//       }
//       if (dias > 0 || horas > 0) {
//         statusLocal = 0;
//       }
//     }
//     if (dias > 1) {
//       retorno = dias + 'd ';
//       corStatus = '#f77273';
//     }
//     return retorno;
//   }

//   function StatusDesc() {
//     if (statusLocal == 1) {
//       corStatus = '#31ccaf'
//       return 'Online'
//     } else {
//       corStatus = '#f77273'
//       return 'Offline'
//     }
//   }

//   return (

//     <Grid className='gridHome'>
//       {dados.map(dados =>
//         <Flex bg={fila(dados['possuifilaent'])} color='black' w='95%' h='115px' m='0.5rem' border='5px solid' borderColor={cor(dados['minutos'], dados['horas'], dados['dias'])} borderRadius={8} boxShadow="3px 3px 1px #a7a7cc">

//           <Flex bg={fila(dados['possuifilaent'])} w='20%' h='100%' justify='center' align='center'>
//             {tipo(dados['tipo'], dados['possuifilaent'])}
//           </Flex>

//           <Flex w='80%' h='100%' bg={fila(dados['possuifilaent'])} flexDir='column' justify='center' align='start' borderRadius={8}>

//             <Text ml='5px' color={filaFonte(dados['possuifilaent'])} fontWeight='bold' fontSize='14px'>{dados['entrada']}</Text>
//             <Text ml='5px' color={filaFonte(dados['possuifilaent'])} fontWeight='bold' fontSize='12px'> <span style={{color: 'gray'}}>MAC: </span> { dados['mac'] } <span style={{color: 'gray'}}>Coletor:</span> { dados['coletor'] } <span style={{color: 'gray'}}>Entrada:</span> {dados['porta']} <span style={{color: 'gray'}}>Peças:</span> {dados['ultimo']}</Text>
//             <Text ml='5px' color={filaFonte(dados['possuifilaent'])} fontWeight='bold' fontSize='15px'>{TempoParado(dados['minutos'], dados['horas'], dados['dias'])} <span style={{ color: corStatus }}>{StatusDesc()}</span> </Text>
//           </Flex>
//         </Flex>
//       )}
//     </Grid>
//   )
// }