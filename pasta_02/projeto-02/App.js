import { useState }  from 'react';
import kelvin from './assets/kelvin-costa.png';

function Card({name, picture, username, followers, following}) {
  return (
    <div className="card">
      <img src={picture} alt={name} />
      <h2>{name}</h2>
      <span className="username">
        {username}
      </span>
      <span className="stats">
        {followers} Seguidores <br />
        {following} Seguindo
      </span>
  </div>
  
  )
}


function BotaoSeguir () {
  const [ novoSeguidor, setNovoSeguidor] = useState('seguir');

  function comecouSeguir() {
    const mudaStatus = novoSeguidor === 'seguir' ? 'seguindo' : 'seguir';

    setNovoSeguidor(mudaStatus);
  }

  return (
    <button className={novoSeguidor} onClick={comecouSeguir}>
      {novoSeguidor === 'seguir' ? 'SEGUIR' : 'SEGUINDO'}
    </button>
  )
}


function App() {
  return (
    <div className="App">
          <Card
          name="Kelvin Costa"
          picture={kelvin}
          username="@costa"
          followers={140}
          following={207} 
          />

          <BotaoSeguir/>
          
    </div>
  );
}
  
  export default App;
