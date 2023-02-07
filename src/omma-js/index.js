import receitasTextos from "../common/receitasTextos.mjs";
import crypto from "crypto";
import { criarReceita } from "../utils/criarReceita.mjs";
import { exibirReceitas } from "../utils/exibirReceitas.mjs";

const uuid = crypto.randomUUID();

const nomeEmpresa = "Omma";

global.receitas = [
  {
    id: uuid,
    titulo: "Risoto de soja",
    dificuldade: "simples",
    ingredientes: "",
    instrucoes: "",
    linkVideo: "",
    vegana: false,
  },
];

console.log(`============= ${nomeEmpresa} =============`);
console.log("Bem vinde a nossa página de receitas");

criarReceita({
  titulo: "Risoto de abobora",
  dificuldade: "simples",
  ingredientes: receitasTextos.ingredientesRisotto,
  instrucoes: receitasTextos.modoPreparoRisotto,
  linkVideo: "https://www.youtube.com/embed/Mxc3RQE4yAg",
  vegana: false,
});

exibirReceitas();
