class Veiculo {
    constructor(marca, modelo, ano) {
        if (this.constructor === Veiculo) {
            throw new Error("Classe Veiculo é abstrata e não pode ser instanciada diretamente");
        }
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    // Método abstrato
    descrever() {
        throw new Error("Método descrever() deve ser implementado pelas classes filhas");
    }

    // Método comum
    exibirInfo() {
        return `${this.marca} ${this.modelo} (${this.ano})`;
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo, ano, portas) {
        super(marca, modelo, ano);
        this.portas = portas;
    }

    descrever() {
        return `Carro: ${this.exibirInfo()}, ${this.portas} portas`;
    }
}

class Moto extends Veiculo {
    constructor(marca, modelo, ano, cilindradas) {
        super(marca, modelo, ano);
        this.cilindradas = cilindradas;
    }

    descrever() {
        return `Moto: ${this.exibirInfo()}, ${this.cilindradas}cc`;
    }
}

// Criando instâncias
const carro1 = new Carro("Toyota", "Corolla", 2022, 4);
const carro2 = new Carro("Honda", "Civic", 2021, 4);
const carro3 = new Carro("Ford", "Mustang", 2023, 2);
const moto1 = new Moto("Honda", "CB500", 2020, 500);
const moto2 = new Moto("Yamaha", "MT-07", 2021, 700);

// Exemplos no console
console.log("Exemplo 1 - Descrição do Carro 1:");
console.log(carro1.descrever());

console.log("\nExemplo 2 - Descrição do Carro 2:");
console.log(carro2.descrever());

console.log("\nExemplo 3 - Descrição do Carro 3:");
console.log(carro3.descrever());

console.log("\nExemplo 4 - Descrição da Moto 1:");
console.log(moto1.descrever());

console.log("\nExemplo 5 - Descrição da Moto 2:");
console.log(moto2.descrever());
