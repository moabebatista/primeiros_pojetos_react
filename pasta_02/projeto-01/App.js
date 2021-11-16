import { useState }  from 'react';
import btnClose from './assets/close.svg';
import cookie from './assets/cookie.svg';

function AlertCard({ type, children, message }) {
  const [ alert, setAlert] = useState('no-hidden');

  function deleteAlert() {
    const alertDelete = alert === 'no-hidden' ? 'hidden' : 'no-hidden';

    setAlert(alertDelete);
  }

  return (
    <div className={`card ${alert}`}> 
          <img onClick={deleteAlert} src={btnClose} alt="Close" className="close-button"/>
          <img 
            src={cookie}
            alt={type}  
            className="icon" 
          />
          <p>
            {children}
          </p>
          <button onClick={deleteAlert} className={type}>
            {message}
          </button>
        </div>
  )
}

function App() {
    return (
      <div className="App">

        <AlertCard type="cookie" message="Tudo bem!">
          Nós utilizamos cookies para melhorar nossa UX, analytics e marketing.
        </ AlertCard>
      </div>
    );
  }
  
  export default App;
