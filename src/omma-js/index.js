import receitasTextos from "../common/receitasTextos.mjs";
import crypto from "crypto";

const uuid = crypto.randomUUID();

const nomeEmpresa = "Omma";
console.log(nomeEmpresa);

var receitas = [
  {
    id: uuid,
    titulo: "Risoto de abobora",
    dificuldade: "simples",
    ingredientes: receitasTextos.ingredientesRisotto,
    instrucoes: receitasTextos.modoPreparoRisotto,
    linkVideo: "https://www.youtube.com/embed/Mxc3RQE4yAg",
    vegana: false,
  },
];

console.log(`============= ${nomeEmpresa} =============`);
console.log("Bem vinde a nossa página de receitas");
