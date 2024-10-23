import '../../styles/global.css'
import './linguagens_de_programacao.css'
import logo from '../../assets/fotos/logoEQA.jpg'

const linguagensDeProgramacao = () => {
  return(
    <div>
      <div className='new-section'>
          <h1>Linguagens de Programação</h1>
      </div>
      
      <div className='new-section'>
        <div className="grid-container">
          <div className="grid-item">
            <img className='imagem' src={logo} alt='logo teste'/>
          <p className="hidden-text">Intermediario</p>
          </div>

          <div className="grid-item">
            <img className='imagem' src={logo} alt='logo teste'/>
            <p className="hidden-text">Avancado</p>
          </div>

          <div className="grid-item">
            <img className='imagem' src={logo} alt='logo teste'/>
            <p className="hidden-text">Iniciante</p>
          </div>

          <div className="grid-item">
            <img className='imagem' src={logo} alt='logo teste'/>
            <p className="hidden-text">Iniciante</p>
          </div>

          <div className="grid-item">
            <img className='imagem' src={logo} alt='logo teste'/>
          <p className="hidden-text">Intermediario</p>
          </div>

          <div className="grid-item">
            <img className='imagem' src={logo} alt='logo teste'/>
            <p className="hidden-text">Avancado</p>
          </div>

          <div className="grid-item">
            <img className='imagem' src={logo} alt='logo teste'/>
            <p className="hidden-text">Iniciante</p>
          </div>

          <div className="grid-item">
            <img className='imagem' src={logo} alt='logo teste'/>
            <p className="hidden-text">Iniciante</p>
          </div>
          
        </div>

      </div>

    </div>
  );
}

export default linguagensDeProgramacao;
