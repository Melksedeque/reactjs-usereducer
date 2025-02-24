import "./App.css";
import { useReducer, useState } from "react";
import reducer, {
  ADICIONAR_FRASE,
  EDITAR_FRASE,
  REMOVER_FRASE,
} from "./reducer";
import { FaCheck, FaEdit, FaTrash } from "react-icons/fa";

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
      <form className="formFrases" onSubmit={salvarFrase}>
        <label for="fraseDoUsuario">Digite uma frase:</label>
        <input
          value={frase}
          onChange={(evento) => setFrase(evento.target.value)}
          placeholder="Digite uma frase"
          id="fraseDoUsuario"
          required
        />
        <button type="submit" className="btn salvar">
          <FaCheck />
          <span>Salvar frase</span>
        </button>
      </form>
      {listaDeFrases.length > 0 && (
        <table className="tabelaFrases">
          <thead>
            <th>ID</th>
            <th>Frase</th>
            <th>Opções</th>
          </thead>
          <tbody>
            {listaDeFrases.map((frase, index) => (
              <tr key={index}>
                <td>{index}</td>
                <td>
                  <em>{frase}</em>
                </td>
                <td className="opcoes">
                  <button
                    onClick={() => {
                      editarFrase(frase);
                    }}
                    className="btn editar"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => {
                      excluirFrase(frase);
                    }}
                    className="btn remover"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
