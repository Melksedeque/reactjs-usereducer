import "./App.css";
import { useState } from "react";

function App() {
  // Lista de frases (estado)
  // O usuário pode adicionar novas frases desde que:
  // A frase possua mais de 20 caracteres
  // A frase seja única (não pode haver duplicidade)
  // Usuário pode remover frases
  // Usuário pode editar frases

  const [frase, setFrase] = useState("");
  const [listaDeFrases, setListaDeFrases] = useState([]);

  function salvarFrase(e) {
    e.preventDefault();
    if (frase.length < 20) {
      alert("A frase deve ter mais de 20 caracteres");
      return;
    } else if (listaDeFrases.includes(frase)) {
      alert("Não são permitidas frases duplicadas");
      return;
    } else {
      setListaDeFrases([...listaDeFrases, frase]);
      alert("Frase salva com sucesso!");
    }
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
              setListaDeFrases(listaDeFrases.filter((f) => f !== frase));
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
