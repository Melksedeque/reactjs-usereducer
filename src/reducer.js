export const ADICIONAR_FRASE = "ADICIONAR_FRASE";
export const EDITAR_FRASE = "EDITAR_FRASE";
export const REMOVER_FRASE = "REMOVER_FRASE";

const reducer = (estado, acao) => {
  switch (acao.tipo) {
    case ADICIONAR_FRASE:
      if (acao.frase.length < 20) {
        alert("A frase deve ter mais de 20 caracteres");
        return estado;
      } else if (estado.includes(acao.frase)) {
        alert("Não são permitidas frases duplicadas");
        return estado;
      } else {
        alert("Frase salva com sucesso!");
      }
      return [...estado, acao.frase];

    case EDITAR_FRASE:
      if (acao.fraseNova.length < 20) {
        alert("A frase deve ter mais de 20 caracteres");
        return estado;
      } else if (estado.includes(acao.fraseNova)) {
        alert("Não são permitidas frases duplicadas");
        return estado;
      }
      return estado.map((frase) =>
        frase === acao.fraseAntiga ? acao.fraseNova : frase
      );

    case REMOVER_FRASE:
      return estado.filter((frase) => frase !== acao.frase);

    default:
      return estado;
  }
};

export default reducer;
