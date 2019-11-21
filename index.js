"use strict";
const test = [20, "test"];
var testt;
(function (testt) {
    testt[testt["domingo"] = 0] = "domingo";
    testt[testt["segunda"] = 1] = "segunda";
    testt[testt["terca"] = 2] = "terca";
    testt[testt["quarta"] = 3] = "quarta";
    testt[testt["quinta"] = 4] = "quinta";
    testt[testt["sexta"] = 5] = "sexta";
})(testt || (testt = {}));
function te(x, y) {
    return x + y;
}
let somaa = te;
const namee = "marlon";
const age = 20;
let obg = {
    namee,
    age
};
const funcionarios = {
    supervisor: [],
    ponto: hora => (hora <= 8 ? "ponto normal" : "fora do horario")
};
const funcionarios2 = {
    supervisor: [],
    ponto: hora => (hora <= 8 ? "ponto normal" : "fora do horario")
};
funcionarios.supervisor.push("marlon");
funcionarios.supervisor.push("lucas");
funcionarios.supervisor.push("ricardo");
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: "Ana Silva",
    contaBancaria,
    contatos: ["34567890", "98765432"]
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
