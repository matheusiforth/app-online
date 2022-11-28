import React, { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { SetCookie } from "./cookies/set";
import GetCookie from "./cookies/get";

const Buffer = require("buffer").Buffer;

export const AutenticacaoContext = createContext();

export const AutenticacaoProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  // const dadosLogout = GetCookie('logout');

  // if (dadosLogout == 'true') {
  //   setUser(null);
  //   navigate("/");
  //   console.log('dadosLo')
  // }

  const login = (usuario, senha) => {

    var encodedAuth = new Buffer(usuario + '|' + senha).toString("base64");
    encodedAuth = new Buffer(encodedAuth).toString("base64");
    encodedAuth = new Buffer(encodedAuth).toString("base64");
    encodedAuth = 'iforth ' + encodedAuth;

    const apiLocal = axios.create({
      baseURL: "http://192.168.3.251:8081/",
      headers: { 'iforth_sistemas': encodedAuth }
    })
    apiLocal.get('v1/crip').then(
      function (response) {
        if (response.status == 200) {
          try {
            apiLocal.post('v1/basic', response.data).then((response) => {
              if (response.status == 200) {
                apiLocal.post('v1/token', response.data).then(
                  function (response) {
                    setUser(response.data);
                    navigate("/home");
                    SetCookie('idusu', response.data['idusu'], '');
                    SetCookie('nomeusu', response.data['nomeusu'], '');
                    SetCookie('idperfil', response.data['idperfil'], '');
                    SetCookie('idsetor', response.data['idsetor'], '');
                    SetCookie('token', response.data['token'], '');
                    // SetCookie('logout', 'false', '');
                  }
                )
              }
            },
              error => {
                alert('Usuário inválido')
              }
            );
          }
          catch (e) {
            console.log('senha incorreta')
          }

        }
      }
    );
  }

  const logout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <AutenticacaoContext.Provider value={{ autenticado: !!user, user, login }}>
      {children}
    </AutenticacaoContext.Provider>

  )
}