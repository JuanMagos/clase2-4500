import './App.css';
import { useState } from 'react';
// import Padre from './components/Padre/Padre';
// import Hijo from './components/Hijo/Hijo';
// import ClassComponent from './components/ClassComponent/ClassComponent';
// import FunctionComponent from './components/FunctionComponent/FunctionComponent';
// import Counter from './components/Counter/Counter';
import CicloVida from './components/CicloVida/CicloVida';
function App() {
  const [booleano, setBooleano] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        {/* <ClassComponent /> */}
        {/* <Counter /> */}
        <button onClick={() => setBooleano(!booleano)}>
          Cambia el booleano
        </button>
        <h3>{String(booleano)}</h3>
        {booleano === true ? (
          <CicloVida propQueCambia={booleano} />
        ) : (
          <div> Ya se desmonto</div>
        )}
      </header>
    </div>
  );
}

export default App;
