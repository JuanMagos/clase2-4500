import { useState } from 'react';

const FunctionComponent = ({ lastName }) => {
  const [name, setName] = useState('Belen');

  return (
    <div>
      El nombre es {name}
      <button onClick={() => setName('Alejandro')}>Cambia nombre</button>
    </div>
  );
};

export default FunctionComponent;
