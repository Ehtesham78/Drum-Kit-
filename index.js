//Detecting Button Press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrumButtons; i++){
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        
        var buttonInnerHTML = this.innerHTML;
            
        makeSound(buttonInnerHTML);    

        buttonAnimantion(buttonInnerHTML);
    
    });

}


//Detecting KeyBoard press

document.addEventListener("keypress" , function(event){
    
    makeSound(event.key);

    buttonAnimantion(event.key);

});

function makeSound(key){

    switch(key){
        case "w":
            const tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "a":
            const tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        
        case "s":
            const tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        
        case "d":
            const tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        
        case "f":
            const hihit = new Audio("sounds/hi-hit.mp3");
            hihit.play();
            break;
        
        case "j":
            const snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        
        case "k":
            const crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        
        case "l":
            const kickbass = new Audio("sounds/kick-bass.mp3");
            kickbass.play();
            break;
    
        default: console.log(buttonInnerHTML);
    
    
    }
}

function buttonAnimantion(currentKey){
    
    var activeButton = document.querySelector("." + currentKey);
    
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}