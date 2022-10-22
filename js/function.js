let counter = localStorage.getItem("counter") ? Number(localStorage.getItem("counter")) : 0;
let counterDOM = document.querySelector("#caunter");
let increaseDOM = document.querySelector("#increase");
let decreaseDOM = document.querySelector("#decrease");

counterDOM.innerHTML = counter;

increaseDOM.addEventListener("click",DOMclick);
decreaseDOM.addEventListener("click",DOMclick);

function DOMclick(){

    console.log(this.id)
   /*
    // ------------------YÖNTEM 1------------------
    if(this.id == "increase"){
        counterDOM.innerHTML = counter +=1
    } else 
    counterDOM.innerHTML= counter -= 1
    */
  
    /*
   //--------------------YÖNTEM 2-------------------
   
    this.id == "increase" ? counterDOM.innerHTML = counter += 1 : counterDOM.innerHTML = counter -= 1; 
    */

    //-------------------YÖNTEM 3-------------------
    /*
    this.id == "increase" ? counter += 1 : counter -= 1; 
    counterDOM.innerHTML = counter
    */

    //-----------------localstroge-------------------
    this.id == "increase" ? counter += 1 : counter -= 1; 
    localStorage.setItem("counter" , counter);
    counterDOM.innerHTML = counter;
}