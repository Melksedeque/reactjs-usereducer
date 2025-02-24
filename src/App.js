import "./App.css";
import { useReducer, useState } from "react";
import reducer, { ADICIONAR_FRASE, REMOVER_FRASE } from "./reducer";

function App() {
  // Lista de frases (estado)
  // O usuário pode adicionar novas frases desde que:
  // A frase possua mais de 20 caracteres
  // A frase seja única (não pode haver duplicidade)
  // Usuário pode remover frases
  // Usuário pode editar frases

  const [frase, setFrase] = useState("");
  // const [listaDeFrases, setListaDeFrases] = useState([]);
  const [listaDeFrases, dispatch] = useReducer(reducer, []);

  function salvarFrase(e) {
    e.preventDefault();
    dispatch({
      tipo: ADICIONAR_FRASE,
      frase: frase,
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
