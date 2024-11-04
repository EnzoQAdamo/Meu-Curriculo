import '../../styles/global.css'
import './linguagens_de_programacao.css'
//import logo from '../../assets/fotos/logoEQA.jpg'
import c from'../../assets/fotos/C - Linguagem.png'
import cmaismais from'../../assets/fotos/C++ linguagem.png'
import csharp from'../../assets/fotos/C # - Linguagem.png'
import dart from'../../assets/fotos/Dart - Linguagem.png'
import html from'../../assets/fotos/HTML5 - Linguagem.png'
import js from'../../assets/fotos/Javascript - Linguagem.png'
import python from'../../assets/fotos/Python - Linguagem.png'

const linguagensDeProgramacao = () => {
  return(
    <div className='new-section'>
      <h1>Linguagens de Programação</h1>

      <div className="grid-container">
        <div className='grid-row'>
          <div className="grid-item">
            <img className='imagem' src={c} alt='logo teste'/>
            <div><p className="hidden-text">Avançado</p></div>
          </div>

          <div className="grid-item">
            <img className='imagem' src={cmaismais} alt='logo teste'/>
            <div><p className="hidden-text">Intermediario</p></div>
          </div>

          <div className="grid-item">
            <img className='imagem' src={csharp} alt='logo teste'/>
            <div><p className="hidden-text">Intermediario</p></div>
          </div>

          <div className="grid-item">
            <img className='imagem' src={js} alt='logo teste'/>
            <div><p className="hidden-text">Intermediario</p></div>
          </div>
        </div>
        <div className='grid-row'>
          <div className="grid-item">
            <img className='imagem' src={python} alt='logo teste'/>
            <div><p className="hidden-text">Intermediario</p></div>
          </div>

          <div className="grid-item">
            <img className='imagem' src={html} alt='logo teste'/>
            <div><p className="hidden-text">Intermediario</p></div>
          </div>

          <div className="grid-item">
            <img className='imagem' src={dart} alt='logo teste'/>
            <div><p className="hidden-text">Iniciante</p></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default linguagensDeProgramacao;
