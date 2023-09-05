class personagensDC{
    constructor(nome, superpoderes){
        this.nome = nome;
        this.superpoderes = superpoderes;
    }

    usarSuperpoderes(){
        console.log(`${this.nome} usou seus superpoderes: ${this.superpoderes}`);
    }
}

class Heroi extends personagensDC{
    constructor(nome, superpoderes){
        super(nome, superpoderes);
        this.alinhamento = 'Heroi';
    }

    salvarDia(){
        console.log(`${this.nome} salvou o dia!`);
    }
}

class Vilao extends personagensDC{
    constructor(nome, superpoderes){
        super(nome, superpoderes);
        this.alinhamento = 'Vilão';
    }

    causarCaos(){
        console.log(`${this.nome} está causando caos!`);
    }
}

const batman = new Heroi("Batman", ['Inteligência', 'Preparo']);
const coringa = new Vilao("Coringa", ['Inteligência',  'Trapaças']);

batman.usarSuperpoderes();
batman.salvarDia();

coringa.usarSuperpoderes();
coringa.causarCaos();