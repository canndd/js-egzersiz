let counter = 0;
let counterDOM = document.querySelector("#caunter");
let increaseDOM = document.querySelector("#increase");
let decreaseDOM = document.querySelector("#decrease");

counterDOM.innerHTML = counter;

increaseDOM.addEventListener("click",DOMclick);
decreaseDOM.addEventListener("click",DOMclick);

function DOMclick(){

    console.log(this.id)
    if(this.id == "increase"){
        counterDOM.innerHTML = counter +=1
    } else 
    counterDOM.innerHTML= counter -= 1
        


}