import { useState } from "react";
import React from 'react';
import sergio from '../assets/Sergio.png'
import bobo from '../assets/bobo.jpg'
import bob1 from '../assets/bob1.jpg'
import bob2 from '../assets/bob2.jpg'
import Imagem from "./Imagem";

const Pergunta = () => {
    //Possiveis estados: FEITA, BOBO, BOB
    const [pergunta, setPergunta] = useState('FEITA')

    if(pergunta === 'BOBO'){
        return(<div className="box2">
            <h1 className="pergunta">Parabéns</h1>
            <div className="pergunta">
                <Imagem src={bobo}/>   
            </div>
           
            <h1 className="pergunta">Você é Bobo</h1>
        </div>)
    }

    if(pergunta === 'BOB'){
        return(<div className="box2">
            <h1 className="pergunta">Parabéns</h1>
            <div className="pergunta">
                <Imagem src={bob2}/>   
            </div>
           
            <h1 className="pergunta">Você é o Bob</h1>
        </div>)
    }

    return(
        <div className="box2">
            <h1 className='pergunta'>Todo dia sai um Bobo e um Bob de casa</h1>
            <h1 className='pergunta'>Quem é você?</h1>
            <div className='fotos'>
                <button className='foto' onClick={()=> setPergunta('BOBO')}>
                    <Imagem src={sergio}/>
                    <h1>O Bobo?</h1>
                </button>
                <div className='espaco'></div>
                <button className='foto'onClick={()=>setPergunta('BOB')}>
                    <Imagem src={bob1}/>
                    <h1>O Bob?</h1>
                </button>
            </div>
        </div>
    );
};

export default Pergunta;