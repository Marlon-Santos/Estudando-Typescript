const test: [number, string] = [20, "test"];

enum testt {
    domingo,
    segunda,
    terca,
    quarta,
    quinta,
    sexta
}

function te(x: number, y: number): number {
    return x + y;
}

let somaa: (x: number, y: number) => number = te;

const namee = "marlon";
const age = 20;

let obg: { namee: string; age: number } = {
    namee,
    age
};

// criaar um obj funcionarios com:
// - array de strings com os nomes dos supervisores
// -funcao de bater ponto que receba a hora (numero) e retorna uma string
// -> ponto normal (<= 8)
// -> fora do horario (>8)

type funcionario = {
    supervisor: string[];
    ponto: (hora: number) => string;
};
const funcionarios: funcionario = {
    supervisor: [],
    ponto: hora => (hora <= 8 ? "ponto normal" : "fora do horario")
};
const funcionarios2: funcionario = {
    supervisor: [],
    ponto: hora => (hora <= 8 ? "ponto normal" : "fora do horario")
};
funcionarios.supervisor.push("marlon");
funcionarios.supervisor.push("lucas");
funcionarios.supervisor.push("ricardo");

type correntista = {
    nome: string;
    contaBancaria: {
        saldo: number;
        depositar: (valor: number) => void;
    };
    contatos: string[];
};

let contaBancaria: { saldo: number; depositar: (valor: number) => void } = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    }
};

let correntista: correntista = {
    nome: "Ana Silva",
    contaBancaria,
    contatos: ["34567890", "98765432"]
};

correntista.contaBancaria.depositar(3000);
console.log(correntista);
