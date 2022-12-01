import { useState } from "react";
const Agregar = ({ id, label, sendDataToParent  }) => {
    const [titulo, setTitulo] = useState('titulo');
    const handleChange = (e) => setTitulo(e.target.value);
    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <input 
          id={id} 
          type="text"
          onChange={handleChange}
          value={titulo}
        />
        <input type="button" onClick={() => sendDataToParent(titulo)} value="Agregar"></input>
      </div>
    );
  };
  

  export default Agregar;