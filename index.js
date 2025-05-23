//Declarando a classe userHeroi
//A classe userHeroi tem um construtor que recebe três parâmetros: nome, idade e tipo
class userHeroi{
    //O construtor inicializa as propriedades nome, idade e tipo do objeto
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    //O método tipoAtaque recebe um parâmetro tipo e retorna uma string com o tipo de ataque correspondente
    tipoAtaque(tipo){
        if(tipo === "mago"){
            return "usando magia";
        }else if(tipo === "guerreiro"){
            return "usando espada";
        }else if(tipo === "monge"){
            return "usando artes marciais";
        }else if(tipo === "ninja"){
            return "usando shuriken";
        }else{
            return "usando um ataque desconhecido";
        }
    }

    //O método heroiAtaca recebe um parâmetro tipo e chama o método tipoAtaque para obter o tipo de ataque correspondente
    heroiAtaca(tipo) {
        switch(tipo){
            case "mago":
                console.log(`o ${this.tipo} ${this.nome} atacou ${this.tipoAtaque(tipo)}`);
                break
            case "guerreiro":
                console.log(`o ${this.tipo} ${this.nome} atacou ${this.tipoAtaque(tipo)}`);
                break
            case "monge":
                console.log(`o ${this.tipo} ${this.nome} atacou ${this.tipoAtaque(tipo)}`);
                break
            case "ninja":   
                console.log(`o ${this.tipo} ${this.nome} atacou ${this.tipoAtaque(tipo)}`);
                break
            default:
                console.log(`o ${this.tipo} ${this.nome} atacou ${this.tipoAtaque(tipo)}`);
                break 
        }
    }
}

//Criando instâncias da classe userHeroi
//Cada instância representa um herói com nome, idade e tipo
//É chamando o método heroiAtaca para cada herói
const heroi1 = new userHeroi("Gandalf", 100, "mago");
heroi1.heroiAtaca(heroi1.tipo);

const heroi2 = new userHeroi("Conan", 30, "guerreiro");
heroi2.heroiAtaca(heroi2.tipo);

const heroi3 = new userHeroi("Goku", 20, "monge");
heroi3.heroiAtaca(heroi3.tipo);

const heroi4 = new userHeroi("Naruto", 15, "ninja");
heroi4.heroiAtaca(heroi4.tipo);

const heroi5 = new userHeroi("Batman", 35, "detetive");
heroi5.heroiAtaca(heroi5.tipo);