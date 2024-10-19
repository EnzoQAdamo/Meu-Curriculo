import './App.css'
import Pergunta from './components/Pergunta';
import { useEffect, useRef, useState } from 'react';
import bobomp4 from './assets/bobo.mp4'

function App() {  
  const videoRef = useRef(null);
  const videoRef1 = useRef(null);
  const [valor,setValor] = useState(0)

  useEffect(() =>{
    if(valor>0){
    videoRef.current.play();
    videoRef1.current.play();}
  })

  return(
    <div className='container'>
      <div className='box1'>
        <video ref={videoRef} className={`video ${valor > 0 ? 'visible' : 'hidden'}`}> {/* Controla a classe de visibilidade*/}
          <source src={bobomp4} type="video/mp4"/>
        </video>
      </div>
      <div className='box2'>
        <Pergunta/>
        <div className='pergunta'>
          <button onClick={()=>setValor(1)}>
            Aquariano nato?
          </button>
        </div> 
        
      </div>
      <div className='box1'>
        <video ref={videoRef1} className={`video ${valor > 0 ? 'visible' : 'hidden'}`} muted>
          <source src={bobomp4} type="video/mp4"/>
        </video>
      </div>
    </div>
  )
}

export default App;
