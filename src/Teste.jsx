import React from 'react';
// import { ResponsivePie } from '@nivo/pie'
import { GraficoTeste } from './TesteGrafico';

export function Teste() {
  return (
    <div >
      <h1>teste</h1>
      <div style={{ width: '80vw', height: '80vh' }}>
        <GraficoTeste />
      </div>
    </div>
  )
}