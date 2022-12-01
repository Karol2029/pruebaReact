import './App.css';
import ListaTitulo from "./ListaTitulo";
import Agregar from './Agregar';
const arrayTitulo = [];
function App() {
    const sendDataToParent = (data) => { // the callback. Use a better name
        arrayTitulo.push(data);
      };

    return (
        <div className="App">
            <div>
                TODOLIST
            </div>
            <div className="App">
                <Agregar sendDataToParent={sendDataToParent}
                />
            </div>
            <div className="App">
                <ListaTitulo props={arrayTitulo}
                />
            </div>
        </div>

    );
}

export default App;
