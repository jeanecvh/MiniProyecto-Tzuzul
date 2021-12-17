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
let totodile = new Pokemon (100, "0,6 m", "TORRENTE",25);

const render = (pokemon,div) =>{
    div.innerHTML = "";
    div.className = "description";
    let templete = `
    <div id= "Caracteristics">
        <div id= "Live">
            <p>VIDA: ${pokemon.vida}</p><br>
        </div>
            <p>TAMAÑO: ${pokemon.tamaño}</p><br>
            <p>ATAQUE: ${pokemon.ataque}</p><br>
    </div>
    `
    div.innerHTML = templete;    
}
render(charmander,dataCharmander);
render(totodile,dataTotodile);

attackButtonTotodile.onclick = function (){
    charmander.vida = charmander.vida - totodile.puntajeAtaque;
    charmander.vida > 1 ? render(charmander,dataCharmander) : (dataCharmander.innerText="Charmander ha sido derrotado",attackButtonCharmander.disabled=true);
}

attackButtonCharmander.onclick = function (){
    totodile.vida = totodile.vida - charmander.puntajeAtaque;
    totodile.vida > 1 ? render(totodile,dataTotodile) : (dataTotodile.innerText="Totodile ha sido derrotado", attackButtonTotodile.disabled=true);
}

    

    




