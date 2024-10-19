import React from 'react';
import meuVideo from '../assets/bobo.mp4'; // ajuste o caminho conforme necessário

const Video = () => {
  return (
      <video className='video' src={meuVideo} alt="sergio" autoPlay muted loop/>
  );
};

export default Video;
