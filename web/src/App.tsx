import React from 'react';
import './App.css';

//JSX: Sintaxe de XML dentro do JavaScript
import Routes from './routes';

function App() {
  /* const [counter, setCounter] = useState(0)*/ //[valor do estado, função para atualizar o valor do estado]
  return (
    <div>
      <Routes />
    </div>
  );
}

export default App;