


function getFighters(){
fetch(`https://pokeapi.co/api/v2/pokemon/${document.querySelector("input").value}`)
.then(res => res.json())

.then(data => {
    console.log(data)

document.querySelector("#player1").src=`${data.sprites.front_default}`;
document.querySelector("#stats1").innerHTML=`${data.name}`;
document.querySelector("h2").innerHTML=`${data.types[0].type.name}`;


})
}

    
//     document.querySelector("#player1")).src=data

// data => document.querySelector("").innerHTML=
// data => document.querySelector("").innerHTML=
        
// }

// function displayWinner(){
//     getFighters()
//     setTimeout(()=>{
       
//         ){
//             document.querySelector("#draw").innerHTML="draw an"
//         }else{
//             document.querySelector("#draw").innerHTML="draw a"

//         }
//         document.querySelector("h2").classList.toggle("hidden")
//     }, 1000)

document.querySelector("button").addEventListener('click',getFighters)


// abilities: (2) [{…}, {…}]
// base_experience: 101
// forms: [{…}]
// game_indices: (20) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// height: 3
// held_items: (2) [{…}, {…}]
// id: 132
// is_default: true
// location_area_encounters: "https://pokeapi.co/api/v2/pokemon/132/encounters"
// moves: [{…}]
// name: "ditto"
// order: 214
// past_types: []
// species: {name: 'ditto', url: 'https://pokeapi.co/api/v2/pokemon-species/132/'}
// sprites: {back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png', back_female: null, back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/132.png', back_shiny_female: null, front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png', …}
// stats: (6) [{…}, {…}, {…}, {…}, {…}, {…}]
// types: [{…}]
// weight: 40