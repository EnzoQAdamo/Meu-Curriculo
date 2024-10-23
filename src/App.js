import './App.css'
import videoBg from './assets/videos/fundo1.mp4'
import fotoPerfil from './assets/fotos/logoEQA.jpg'
import LinguagensDeProgramacao from './components/linguagens de programação/linguagens_de_programacao';
import SobreMim from './components/sobre mim/sobre_mim';

function App() {
  return(
    <div className='conteudo'>
      <video className='video-bg' src={videoBg} autoPlay muted loop/>
      <div className='foto-perfil'>
        <img src={fotoPerfil} alt='Foto de Perfil'/>
      </div>
      
      <SobreMim/>
      <LinguagensDeProgramacao/>
    </div>
  );
}

export default App;
