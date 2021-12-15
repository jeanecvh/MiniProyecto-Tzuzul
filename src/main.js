let dataCharmander =document.getElementById("data_charmander");
let dataTotodile = document.getElementById("data_totodile");
let attackButtonCharmander = document.getElementById("attack-button-charmander");
let attackButtonTotodile = document.getElementById("attack-button-totodile");
let attackName = '';


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

attackButtonCharmander.onclick = function (){
        totodile.vida = (totodile.vida - charmander.puntajeAtaque);{
            let divCharmander = document.createElement("div");
            divCharmander.className = "description"
            let charmanderTemplete = `
            <div id= "charmanderCaracteristics">
                <div id= "charmanderLive">
                    <p>VIDA: ${charmander.vida}</p><br>
                </div>
                    <p>TAMAÑO: ${charmander.tamaño}</p><br>
                    <p>ATAQUE: ${charmander.ataque}</p><br>
            </div>
            `
        divCharmander.innerHTML = charmanderTemplete
        dataCharmander.appendChild(divCharmander);
        }
}

attackButtonTotodile.onclick = function (){
    charmander.vida = (charmander.vida - totodile.puntajeAtaque);{
        let divTotodile = document.createElement("div");
        divTotodile.className = "description"
        let totodileTemplete = `
            <div div id= "totodileCaracteristics">
                <div id= "charmanderLive">
                    <p>VIDA: ${totodile.vida}</p><br>
                </div> 
                    <p>TAMAÑO: ${totodile.tamaño}</p><br>
                    <p>ATAQUE: ${totodile.ataque}</p><br>
            </div> 
        `
        divTotodile.innerHTML = totodileTemplete
        dataTotodile.appendChild(divTotodile);
    }
}

    

    




