import { useEffect, useState } from 'react';

const CicloVida = ({ propQueCambia }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(1);
  }, []);

  const mouseMove = ({ x, y }) => {
    console.log(x, y);
  };

  //Cuando ya se monto
  useEffect(() => {
    console.log('Yo me ejecuto cuando el componente ya se monto');
  }, []);

  //Cuando el state se acutaliza
  useEffect(() => {
    if (counter > 9) {
      alert('El contador ya supero el límite 9');
    }
  }, [counter]);

  //Cuando las prop se actualizan
  useEffect(() => {
    alert('La prop cambio a ' + String(propQueCambia));
  }, [propQueCambia]);

  //Cuando el componte se va a desmontar
  useEffect(() => {
    window.addEventListener('mousemove', mouseMove);
    return () => {
      window.removeEventListener('mousemove', mouseMove);
      alert('Yo me ejecuto cuando el componente se va a desmontar del DOM.');
    };
  }, []);

  //Antes del montaje
  console.log('Yo me ejecuto antes de que el componente se monte');

  const onAdd = () => {
    setCounter(counter + 1);
  };

  const substract = () => {
    if (counter !== 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <div>
      <h2>{counter}</h2>
      <div>
        <button onClick={onAdd}>+</button>
        <button onClick={substract}>-</button>
      </div>
    </div>
  );
};

export default CicloVida;
