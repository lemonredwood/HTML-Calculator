display = document.getElementById("#display")
buttons = document.getElementsByClassName(".row").innerHTML

//Initializaiton
currentValue=''
prevValue=''
currentoperator=null
console.log("JS running")

//numbers input
function numinput(number){
    console.log("function running")
    currentValue+=number;
    updatedisplay();
    console.log("input accepted")
}

//operators input
function opinput(operator){

}

//equals input
function finalres(){

}

//clear and delete
function clearspace(){

}


//update display
function updatedisplay(){
    diplay.value=currentValue;
    console.log("updated")
}


//Event listener
buttons.addEventListener('click',function(event){
    const clicked=event.target;
    if (clicked.classList.contains('number')){
        numinput();
    }
});