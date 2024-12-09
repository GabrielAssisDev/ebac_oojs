class Animal {
    constructor(nome, especie) {
    this.nome = nome;
    this.especie = especie;
    }

    emitirSom() {
    console.log(`${this.nome} está emitindo um som.`);
    }
}

class Cachorro extends Animal {
    constructor(nome, raca) {
        super(nome, "Cachorro"); 
    this.raca = raca;
    }

    emitirSom() {
    console.log(`${this.nome} está latindo: "Au au!"`);
    }
}

class Gato extends Animal {
    constructor(nome, cor) {
        super(nome, "Gato"); 
    this.cor = cor;
    }

    emitirSom() {
    console.log(`${this.nome} está miando: "Miau!"`);
    }
}

const krypto = new Cachorro("Krypto", "Labrador");
const garfild = new Gato("Garfild", "Laranja");
const snoopy = new Cachorro("Snoopy", "Beagle");

    krypto.emitirSom(); 
    garfild.emitirSom(); 
    snoopy.emitirSom(); 

    console.log(krypto); 
    console.log(garfild); 
    console.log(snoopy); 