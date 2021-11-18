import { useState } from 'react';
import btnDelete from './assets/delete.svg';


function Tarefa (props) {
  return (
    <li>
    <span 
      onClick={() => props.handleComplete(props.id)}
      style={
        { 
          textDecoration: props.completa ? 'line-through' : '', 
          color: props.completa ? '#D1D2DA' : '#494C6B'
        }
      }
    >
      {props.children}
    </span>
    <img
    onClick={() => props.handleDelete(props.id)} 
    src={btnDelete} alt="X"
    />
    </li>
  )
}

const BotoesParaFiltros = ({ setFiltrar, valor, children }) => (
  <span 
  className={valor} 
  onClick={() => setFiltrar(valor)}
  
  >
    {children}
  </span>
);

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [tarefaAtiva, setTarefaAtiva] = useState(0);
  const [filtrar, setFiltrar] = useState("todas");

  const filtrarTarefas = tarefas.filter((tarefa) =>
  filtrar === "completada" ? tarefa.completa : filtrar === "ativas" ? !tarefa.completa : true
  );

  function handleKeyDown(event) {
    if (event.key !== 'Enter') return;

    const novasTarefas = [...tarefas, {id: Math.random(), texto: event.target.value, completa: false }];

    setTarefas(novasTarefas);

    setTarefaAtiva(tarefaAtiva + 1);

    event.target.value = '';
  }

  function handleDelete(id) {
    const novasTarefas = tarefas.filter(function (tarefa) {
      if (tarefa.id === id && !tarefa.completa) {
        setTarefaAtiva(tarefaAtiva - 1);
      }

      return tarefa.id !== id
    });

    setTarefas(novasTarefas);
  }

  function handleComplete (id) {
    const novasTarefas = [...tarefas];
    const tarefaCompletada = novasTarefas.find(function (tarefa) {
      return tarefa.id === id;
    });

    tarefaCompletada.completa = !tarefaCompletada.completa;

    if (!tarefaCompletada.completa) {
      setTarefaAtiva(tarefaAtiva + 1);
    } else {
      setTarefaAtiva(tarefaAtiva - 1);
    }

    setTarefas(novasTarefas);

  }

  function handleLimpar() {
    const novasTarefas = tarefas.filter((tarefa) => !tarefa.completa);

    setTarefas(novasTarefas);
  }


  return (
    <div className="App">
      <h1>TAREFAS</h1>
      <input type="text" onKeyDown={handleKeyDown} />
      <div className="bloco">
          <ul>
            {filtrarTarefas.map(function (tarefa){
            return (
              <Tarefa
              key={tarefa.id}
              id={tarefa.id}
              handleDelete={handleDelete}
              handleComplete={handleComplete}
              completa={tarefa.completa}
              >
                {tarefa.texto}
              </Tarefa>
            )
            })}
          </ul>
          <div className='atividades'>
            <span className="itens-restantes">{tarefaAtiva} Itens restantes</span>
            <BotoesParaFiltros
            setFiltrar={setFiltrar}
            valor="todas"
            >
              Todas
            </BotoesParaFiltros>
            <BotoesParaFiltros
            setFiltrar={setFiltrar}
            valor="ativas"
            >
              Ativas
            </BotoesParaFiltros>
            <BotoesParaFiltros
            setFiltrar={setFiltrar}
            valor="completada"
            >
              Completada
            </BotoesParaFiltros>
            <span className="limpar-completadas" onClick={handleLimpar}>Limpar Completadas</span>
      </div>
          </div>
    </div>
  );
}

export default App;
