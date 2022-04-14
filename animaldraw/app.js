

function chooseAnimal() {
   
    fetch("https://random-word-form.herokuapp.com/random/animal")
        .then(res => res.json())

        .then(data => document.querySelector("#ani").innerHTML = data);

    fetch("https://random-word-form.herokuapp.com/random/adjective")
        .then(res => res.json())

        .then(data => document.querySelector("#adj").innerHTML = data);
   
       
       
    document.querySelector("#resetbtn").classList.toggle("hidden")
    document.querySelector("#btn").classList.toggle("hidden")
    document.querySelector("p").classList.toggle("hidden")

}

function displayAnimal(){
    chooseAnimal()
    setTimeout(()=>{
        if(document.querySelector("#adj").innerHTML[0] ==="a" ||
        document.querySelector("#adj").innerHTML[0] ==="e" ||
        document.querySelector("#adj").innerHTML[0] ==="i" ||
        document.querySelector("#adj").innerHTML[0] ==="o" ||
        document.querySelector("#adj").innerHTML[0] ==="u"
        ){
            document.querySelector("#draw").innerHTML="draw an"
        }else{
            document.querySelector("#draw").innerHTML="draw a"

        }
        document.querySelector("h2").classList.toggle("hidden")
    }, 1000)
    
}

function reset() {
    document.querySelector("h2").classList.toggle("hidden")
    document.querySelector("#resetbtn").classList.toggle("hidden")
    document.querySelector("#btn").classList.toggle("hidden")
    document.querySelector("p").classList.toggle("hidden")
}


document.querySelector("#btn").addEventListener("click", displayAnimal)
document.querySelector("#resetbtn").addEventListener("click", reset)