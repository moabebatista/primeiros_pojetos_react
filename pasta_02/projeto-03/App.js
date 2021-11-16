import { useState }  from 'react';
import hamburguer from './assets/hamburguer.png';

function Card({picture, name, children}) {
  return (
    <div className="card">
      <img src={picture} alt={name} />
      <h2>{name}</h2>
      <span>
        {children}
      </span>
  </div>
  )
}

function AumentarDiminuir () {
  const [ contador, setContador] = useState(0);

  function SubtraiProduto() {

    setContador(contador > 0 ? contador - 1 : 0);
  }

  function AdicionaProduto() {

    setContador(contador + 1);
  }

  return (
    <div className="botoes">
      <button className="menos" onClick={SubtraiProduto}>
        -
      </button>
        {contador}
      <button className="menos" onClick={AdicionaProduto}>
        +
      </button>
    </div>
  )
}


function App() {
  return (
    <div className="App">
          <Card picture = {hamburguer} name = "Hamburguer">
            Arcu, sagittis, ut lectus <br/>
            congue dapibus semper odio a, <br/>
            lobortis. 
          </Card> 

          <AumentarDiminuir/>
          
    </div>
  );
}
  
  export default App;
