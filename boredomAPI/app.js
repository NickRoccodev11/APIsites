function suggestion(){
    fetch("https://www.boredapi.com/api/activity")
    .then(res => res.json())

    .then(data => { 
         document.querySelector("#activity").innerHTML = data["activity"];
         document.querySelector("#price").innerHTML = data["price"];
        })
    document.querySelector("h2").classList.remove("hidden")
    
    
}

document.querySelector("#btn").addEventListener("click",suggestion)