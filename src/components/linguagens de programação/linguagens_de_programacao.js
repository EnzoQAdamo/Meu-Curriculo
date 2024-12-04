import '../../styles/global.css'
import './linguagens_de_programacao.css'
import c from'../../assets/fotos/C - Linguagem.png'
import cmaismais from'../../assets/fotos/C++ linguagem.png'
import csharp from'../../assets/fotos/C Sharp - Linguagem.png'
import dart from'../../assets/fotos/Dart - Linguagem.png'
import html from'../../assets/fotos/HTML5 - Linguagem.png'
import js from'../../assets/fotos/Javascript - Linguagem.png'
import python from'../../assets/fotos/Python - Linguagem.png'

const linguagensDeProgramacao = () => {
  return(
    <div className='new-section'>
      <h1>Linguagens de Programação</h1>

      <div className="grid-container-lin"> 
        <div className='grid-row-lin'>{/* Linha 1*/}
          <div className="grid-item-lin">
            <img className='imagem-lin' src={c} alt='logo teste'/>
            <div><p className="hidden-text-lin">Avançado</p></div>
          </div>

          <div className="grid-item-lin">
            <img className='imagem-lin' src={cmaismais} alt='logo teste'/>
            <div><p className="hidden-text-lin">Intermediario</p></div>
          </div>

          <div className="grid-item-lin">
            <img className='imagem-lin' src={csharp} alt='logo teste'/>
            <div><p className="hidden-text-lin">Intermediario</p></div>
          </div>

          <div className="grid-item-lin">
            <img className='imagem-lin' src={js} alt='logo teste'/>
            <div><p className="hidden-text-lin">Intermediario</p></div>
          </div>
        </div>
        <div className='grid-row-lin'>{/* Linha 2*/}
          <div className="grid-item-lin">
            <img className='imagem-lin' src={python} alt='logo teste'/>
            <div><p className="hidden-text-lin">Intermediario</p></div>
          </div>

          <div className="grid-item-lin">
            <img className='imagem-lin' src={html} alt='logo teste'/>
            <div><p className="hidden-text-lin">Intermediario</p></div>
          </div>

          <div className="grid-item-lin">
            <img className='imagem-lin' src={dart} alt='logo teste'/>
            <div><p className="hidden-text-lin">Iniciante</p></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default linguagensDeProgramacao;
