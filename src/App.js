import './App.css'
import Video from './components/Video'; 
import Pergunta from './components/Pergunta';

function App() {
  return(
    <div className='container'>
      <div className='box1'>
        <Video/>
      </div>
       <Pergunta/> 
      <div className='box1'>
        <Video/>
      </div>
    </div>
  )
}

export default App;
