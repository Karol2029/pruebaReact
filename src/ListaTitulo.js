import Titulo from './Titulo';
import { useState } from "react";
const ListaTitulo = (props) => {
    console.log(props);
  const [checked, setChecked] = useState(false);
  const onChange = () => {
    setChecked(!checked);
  };

  let array = [];
  for(let i = 0; i < props.length; i++) {
    array.push(
      <Titulo id="checkbox" 
      label={props[i]} 
      value={checked} 
      onChange={onChange}  />
    );
  }

  // Render it
  return (
    <div>
      {array}
    </div>
  );

  };
  
  export default ListaTitulo;