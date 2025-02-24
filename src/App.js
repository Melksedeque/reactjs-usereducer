import "./App.css";
import { useReducer, useState } from "react";
import reducer, {
  ADICIONAR_FRASE,
  EDITAR_FRASE,
  REMOVER_FRASE,
} from "./reducer";

function App() {
  const [frase, setFrase] = useState("");
  const [listaDeFrases, dispatch] = useReducer(reducer, []);

  function salvarFrase(e) {
    e.preventDefault();
    dispatch({
      tipo: ADICIONAR_FRASE,
      frase: frase,
    });
  }

  function editarFrase(frase) {
    const fraseNova = prompt("Editar frase", frase);
    dispatch({
      tipo: EDITAR_FRASE,
      fraseAntiga: frase,
      fraseNova: fraseNova,
    });
  }

  function excluirFrase(frase) {
    dispatch({
      tipo: REMOVER_FRASE,
      frase: frase,
    });
  }

  return (
    <div className="App">
      <form onSubmit={salvarFrase}>
        <textarea
          value={frase}
          onChange={(evento) => setFrase(evento.target.value)}
          placeholder="Digite uma frase"
          required
        />
        <br />
        <button type="submit">Salvar frase</button>
      </form>
      {listaDeFrases.map((frase, index) => (
        <div key={index}>
          <p>{frase}</p>
          <button
            onClick={() => {
              editarFrase(frase);
            }}
          >
            Editar
          </button>
          <button
            onClick={() => {
              excluirFrase(frase);
            }}
          >
            Remover
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
