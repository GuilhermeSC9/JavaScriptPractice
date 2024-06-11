// A POO ou Programação Orientada ao Objeto nada mais é do que determinar classes para facilitar o uso e reuso de blocos de código, encapsular métodos em objetos para diminuir a quantidade de código solto no seu arquivo, assim também facilitando a compreensão e poder criar heranças para a reutilização de códigos, até mesmo entre arquivos através de export e import.

// Como dito anteriormente, a POO é baseada na filosofia Don't Repeat Yourself (DRY), que visa a criação de códigos dinâmicos para que possam ser usados em mais de um lugar, sem você precisar ficar reescrevendo tudo várias vezes.

// Vamos supor que eu tenha o seguinte objeto:

function crianca(nome:string, idade:number) {
    nome: "";
    idade: ;
    correr();
    brincar();
}

// Aqui nós temos o objeto que armazenará os dados de uma criança, incluindo o seu nome, sua idade e dois métodos, chamados correr e brincar. Logo, temos que definir estes métodos se quisermos usá-los posteriormente em outro objeto
function brincar(){
    console.log("Está brincando!")
}

function correr(){
    console.log("Está correndo!")
}

// Até então, não vemos grandes problemas, certo? Porém imagine que você terá diversas ações para somente este objeto:

function pular(){
    //
}

function estudar(){
    //
}

function dormir(){
    //
}

// Começamos a ter um problema de organização de código e é aí que implementamos o conceito de encapsulamento: Ao invés de criarmos uma função com o objeto, nós criaremos um outro arquivo que armazenará todos estes métodos em uma CLASSE: vá para (crianca.ts)

import { criança } from "./crianca";

// Com este comando, podemos extender nosso objeto completamente de um arquivo para o outro e usar seus métodos aqui também

const myCriança = new criança(); // Aqui, estamos criando uma variável que recebe todas as informações da nossa classe e abaixo podemos utilizar seus métodos:

myCriança.andar();
myCriança.correr();

// Até aqui, vimos os conceitos de encapsulamento, polimorfismo (exportar e importar objetos entre arquivos). Agora temos o conceito de herança.

// A herança nada mais é que você perceber padrões que se repetem (como a necessidade de usar o mesmo método para diferentes objetos) e haver então, a necessidade de criar métodos comuns para uso geral. (vá para communs.ts)

// Eu poderia criar outro objeto, herdando todos os métodos dos objetos anteriores e usá-los aqui, sem precisar reescrever os códigos uma segunda vez:

import { ações } from "./commons";

class Pet extends ações{ // Com o comando "extends", eu estou dizendo que quero extender as informações contidas no objeto "ações" para o meu novo objeto "Pet", assim podendo utilizar todos os métodos lá inseridos.
    private classe:string = "";
}

const meuPet = new Pet()
meuPet.comer()
