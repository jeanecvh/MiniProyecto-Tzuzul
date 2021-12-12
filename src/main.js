let dataCharmander =document.getElementById("data_charmander");
let dataTotodile = document.getElementById("data_totodile");
let attackButtonCharmander = document.getElementById("attack-button-charmander");
let attackButtonTotodile = document.getElementById("attack-button-totodile");

class Pokemon {
    constructor (vida,tamaño,ataque,puntajeAtaque) {
        this.vida = vida
        this.tamaño = tamaño
        this.ataque = ataque
        this.puntajeAtaque = puntajeAtaque
    }        
}

let charmander = new Pokemon (100, "0,6 m", "LAZA LLAMAS",20);
    console.log(charmander)
let totodile = new Pokemon (100, "0,6 m", "TORRENTE",25);
    console.log(totodile)

    let divCharmander = document.createElement("div");
    divCharmander.className = "description"
    let charmanderTemplete = `
    <p>VIDA: ${charmander.vida}</p><br>
    <p>TAMAÑO: ${charmander.tamaño}</p><br>
    <p>TAMAÑO: ${charmander.ataque}</p><br>
    `
    divCharmander.innerHTML = charmanderTemplete
    dataCharmander.appendChild(divCharmander);

    let divTotodile = document.createElement("div");
    divTotodile.className = "description"
    let totodileTemplete = `
    <p>VIDA: ${totodile.vida}</p><br>
    <p>TAMAÑO: ${totodile.tamaño}</p><br>
    <p>TAMAÑO: ${totodile.ataque}</p><br>
    `
    divTotodile.innerHTML = totodileTemplete
    dataTotodile.appendChild(divTotodile);


attackButtonCharmander.onclick = function (pokemonVida = 100){
    vidaAcumulada
    for (let i=0; i < pokemonVida; i--)

}

