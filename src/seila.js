import React from 'react';
import minhaImagem from './helldivers.mp4'; // ajuste o caminho conforme necessário

const MeuComponente = () => {
  return (
    <div className='video-bg'>
      <video src={minhaImagem} alt="sergio" autoPlay muted loop/>
    </div>
  );
};

export default MeuComponente;
