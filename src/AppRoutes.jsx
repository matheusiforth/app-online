import { Login } from './pages/login/login';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AutenticacaoContext, AutenticacaoProvider } from './context/autenticacao';
import { Home } from './pages/home/home';
import { Teste } from './Teste';
import { useContext } from 'react';
import { RankingParada } from './pages/rankingParada/rankingParada';
import { Global } from './utils/Global'
import { RankingDefeito } from './pages/rakingDefeito/rankingDefeito';
import { RankingDefeitoBarrado } from './pages/rankingDefeitoBarrado/RankingDefeitoBarrado';

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
            <Route path='/parada' element={<RankingParada />} />
            <Route path='/defeito' element={<RankingDefeito />} />
            <Route path='/defeitoBarrado' element={<RankingDefeitoBarrado />} />
          </Routes>
      </AutenticacaoProvider>
    </BrowserRouter>
  );
}