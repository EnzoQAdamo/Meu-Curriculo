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
                    <li><strong className='titulo'><span>Ocupação:</span></strong> Freelancer</li>
                    <li><strong className='titulo'><span>Cidadania:</span></strong> Brasileira/Italiana</li>
                    <li><strong className='titulo'><span>Endereço:</span></strong> Amparo - SP, Brasil</li>
                    <li><strong className='titulo'><span>Número:</span></strong> +55 (19) 99649-4174</li>
                    <li><strong className='titulo'><span>Email:</span></strong> eqadamo@gmail.com </li>
                </ul>
            </div>
            <div className='descricao'>
                <div>
                    <h1>Olá, sou o Enzo Adamo</h1>
                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
                </div>
                <div className='botoes'>
                    <button className='btn-primary' onClick={onButtonClick}>Baixar Currículo</button>
                    <button className='btn-secundary'>Entrar em contato</button>
                </div>  
            </div>
        </div>
    </div>
  );
}

export default sobreMim;