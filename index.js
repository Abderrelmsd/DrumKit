document.querySelectorAll(".drum").forEach((button) => button.addEventListener('click', function() {
    playSound(this.textContent);
    animateButton(this.textContent);
}));
document.addEventListener('keydown', function(event) {
    playSound(event.key);
    animateButton(event.key);
});

function playSound(drum){
    var filepath;
    switch(drum){
        case 'w':
            filepath = "sounds/tom-1.mp3";
            var tom1 = new Audio(filepath);
            tom1.play();
        break;
        case "a":
            filepath = "sounds/tom-2.mp3";
            var tom2 = new Audio(filepath);
            tom2.play();
        break;
        case "s":
            filepath = "sounds/tom-3.mp3";
            var tom3 = new Audio(filepath);
            tom3.play();
        break;
        case "d":
            filepath = "sounds/tom-4.mp3";
            var tom4 = new Audio(filepath);
            tom4.play();
        break;
        case "j":
            filepath = "sounds/snare.mp3";
            var snare = new Audio(filepath);
            snare.play();
        break;
        case "k":
            filepath = "sounds/crash.mp3";
            var crash = new Audio(filepath);
            crash.play();
        break;
        case "l":
            filepath = "sounds/kick-bass.mp3";
            var kick_bass = new Audio(filepath);
            kick_bass.play();
        break;
        default:
            console.log(this.textContent+" is not linked to a key")
    }
}

function animateButton(activeKey) {
    document.querySelector("."+activeKey).classList.add("pressed");
    setTimeout(function() {
        document.querySelector("."+activeKey).classList.remove("pressed");
    }, 100)
}