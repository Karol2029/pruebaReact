const Titulo = ({ id, label, value, onChange, eliminar }) => {
    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <input 
          id={id} 
          type="checkbox" 
          checked={value} 
          onChange={onChange} 
        />
        <input type="button" onClick={eliminar} value="Eliminar"></input>
      </div>
    );
  };
  
  export default Titulo;