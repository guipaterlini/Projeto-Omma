import receitasTextos from "../common/receitasTextos.mjs";
import crypto from "crypto";

function criarReceita({
  titulo,
  dificuldade,
  ingredientes,
  instrucoes,
  linkVideo,
  vegana,
}) {
  const id = crypto.randomUUID();

  receitas.push({
    id,
    titulo,
    dificuldade,
    ingredientes,
    instrucoes,
    linkVideo,
    vegana,
  });
}

export { criarReceita };
