import './projetos.css'
import fotoProj1 from '../../assets/fotos/Projeto1.jpeg'

const projetos = () => {
  return(
    <div className='new-section'>
      <h1>Projetos</h1>

      <div className="grid-container-proj"> 
        <div className='grid-row-proj'>{/* Linha 1*/}
            <div className="cardLin">
                <img src={fotoProj1} alt="Imagem do projeto" className="cardLinImage"/>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path></svg>
                <div className="cardLinContent">
                    <p className="cardLinTitle">Processamento de Imagens para Pomares de Laranja</p>
                    <p className="cardLinDescription">Neste projeto, desenvolvi uma solução de deep learning para detectar automaticamente as linhas de plantio em pomares de laranja. Utilizando redes neurais e técnicas avançadas de machine learning, criei um sistema que permite a análise precisa de imagens aéreas, contribuindo para a agricultura de precisão. Esta solução pode contribuir para a navegação de drones pulverizadores, otimizando a aplicação de defensivos agrícolas ao seguir as linhas de plantio com maior precisão.</p>
                </div>
            </div> 

            <div className="cardLin">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path></svg>
                <div className="cardLinContent">
                    <p className="cardLinTitle">Projeto 2</p>
                    <p className="cardLinDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </div>
            </div>           
        </div>
        <div className='grid-row-proj'>{/* Linha 2*/}

            <div className="cardLin">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path></svg>
                <div className="cardLinContent">
                    <p className="cardLinTitle">Projeto 4</p>
                    <p className="cardLinDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </div>
            </div>       

        </div>
      </div>
    </div>
  );
}

export default projetos;
