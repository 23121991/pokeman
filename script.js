var div = document.createElement("div")
div.style.textAlign = "center";

var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "number");
input.setAttribute("placeholder", "Enter the ID");

const button = document.createElement("button");
button.setAttribute("type", "button");
button.setAttribute("class", "btn btn-primary");
button.innerHTML = "search";
button.addEventListener("click", foo);

let ability = document.createElement("ability");
ability.setAttribute("id", "ability");

let moves = document.createElement("moves");
moves.setAttribute("id", "moves");

let weight = document.createElement("weight");
weight.setAttribute("id", "weight");

div.append(input, button, ability, moves, weight)
document.body.append(div);


async function foo() {
    let res = document.getElementById("number").value;
    let url = `https://pokeapi.co/api/v2/pokemon/${res}/`;
    let result = await fetch(url);
    let result1 = await result.json();
    console.log(result1);

    let a = result1.sprites.back_default;
    for (i = 1; i <= 50; i++){
        let b = `https://raw.githubusercontent.com/PokeAPI/sprites/pokemon/back/${i}.png`
    console.log(b);
    }


    weight.innerHTML = `Weight : ${result1.weight}`;
    moves.innerHTML = `Moves : ${result1.moves[0].move.name}`;
    ability.innerHTML = `Ability : ${result1.abilities[0].ability.name}`;
}