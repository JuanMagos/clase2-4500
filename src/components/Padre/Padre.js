const Padre = ({ hijo }) => {
  return <div>Mi hijo se llama {hijo({ nombre: 'Martin' })}</div>;
};

export default Padre;
