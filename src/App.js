import { useState, useEffect } from 'react';
import './App.css'
import MeuComponente from './seila';

function App() {
  return(
    <div>
      <MeuComponente/>
      <div className="content">
        <h1>Meu Currículo</h1>
        <p>Conteúdo do seu currículo aqui.</p>
        {/* Adicione mais conteúdo conforme necessário */}
      </div>
    </div>
  )
}

export default App;
