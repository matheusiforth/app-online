import { Login } from './pages/login/login';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AutenticacaoContext, AutenticacaoProvider } from './context/autenticacao';
import { Home } from './pages/home/home';
import { Teste } from './Teste';
import { useContext } from 'react';
import { Global } from './utils/Global'
import { DispoPerformace } from './pages/dispoPerformace/dispoPerformace';
import { RetornaPDDB } from './pages/parada-defeito-defeitoBarrado/RetornaPDDB';
import { ChamadaStatusColetores } from './pages/statusColetores/chamadaStatusColetores';

export function AppRoutes() {

  const Private = ({ children }) => {
    const { autenticado } = useContext(AutenticacaoContext);
    console.log(autenticado);

    if (!autenticado) {
      return <Navigate to="/" />
    }
    return children;
  }

  // console.log(window.location);

  return (
    <BrowserRouter>
      <AutenticacaoProvider>
        <Global />
        {/* <Header /> */}
        <Routes>
          <Route path='/' element={<Login />} />
          {/* <Route path='/home' element={ <Private> <Home /> </Private> } /> */}
          <Route path='/home' element={<Home />} />
          <Route path='/teste' element={<Teste />} />
          <Route path='/parada' element={<RetornaPDDB type={1} />} />
          <Route path='/defeito' element={<RetornaPDDB type={2} />} />
          <Route path='/defeitoBarrado' element={<RetornaPDDB type={3} />} />
          <Route path='/dispoPerformace' element={<DispoPerformace />} />
          <Route path='/statusColetores' element={<ChamadaStatusColetores />} />
        </Routes>
      </AutenticacaoProvider>
    </BrowserRouter>
  );
}