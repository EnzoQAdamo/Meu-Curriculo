import '../../styles/global.css'
import '../../styles/paleta_de_cores.css'
import './sobre_mim.css'
import curriculo from '../../assets/documentos/curriculo.pdf'

const sobreMim = () => {
    const onButtonClick = () => {
        const pdfUrl = curriculo;
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Currículo de Enzo Quartieri Adamo.pdf"; // Nome do arquivo
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
  return(
    <div className='new-section'>
        <div className='conteiner'>
            <div className='lista-atributos'>
                <ul className='atributos-lista'>
                    <li><strong className='titulo'><span>Nome:</span></strong> Enzo Quartieri Adamo</li>
                    <li><strong className='titulo'><span>Ocupação:</span></strong> Estudante/Freelancer</li>
                    <li><strong className='titulo'><span>Cidadania:</span></strong> Brasileira/Italiana</li>
                    <li><strong className='titulo'><span>Endereço:</span></strong> Amparo - SP, Brasil</li>
                    <li><strong className='titulo'><span>Número:</span></strong> +55 (19) 99649-4174</li>
                    <li><strong className='titulo'><span>Email:</span></strong> eqadamo@gmail.com </li>
                </ul>
            </div>
            <div className='descricao'>
                <div>
                    <h1>Olá, sou o Enzo Adamo</h1>
                    <p>Sou um programador prático e curioso, sempre buscando unir inovação e funcionalidade nos projetos que desenvolvo. Durante a faculdade, participei de projetos de liderança e aprendi a trabalhar em equipe. Meu foco atual está no desenvolvimento de soluções modernas, explorado áreas como machine learning, aplicando técnicas avançadas para resolver problemas complexos de forma eficiente, como a segmentação automática de imagens para aplicações no campo da agricultura de precisão.</p>
                </div>
                <div className='botoes'>
                    <button className='btn-primary' onClick={onButtonClick}>Baixar Currículo</button>
                    <button className="btn-secundary" 
                    onClick={() => window.open('https://wa.me/5519996494174?text=Ol%C3%A1%2C+estava+olhando+seu+site+e+gostaria+de+conversar+com+voc%C3%AA.', '_blank')}>
                        Entrar em contato
                    </button>
 
                </div>  
            </div>
        </div>
    </div>
  );
}

export default sobreMim;