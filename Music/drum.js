let cymbalDrum1 = document.getElementById("cymbal1");
let tomDrum1 = document.getElementById("tom1");
let snareDrum1 = document.getElementById("snare1");
let kickDrum = document.getElementById("kick");
let snareDrum2= document.getElementById("snare2");
let tomDrum2 = document.getElementById("tom2");
let cymbalDrum2 = document.getElementById("cymbal2");


cymbalDrum1.addEventListener("click", function(){

    let audio = new Audio("/soundsD/cymbal-hit.mp3");
    audio.currentTime = 0;
    audio.play();
});

tomDrum1.addEventListener("click", function(){

    let audio = new Audio("/soundsD/tom-high-1.mp3");
    audio.currentTime = 0;
    audio.play();
});

snareDrum1.addEventListener("click", function(){

    let audio = new Audio("/soundsD/snare-hit.mp3");
    audio.currentTime = 0;
    audio.play();
});

kickDrum.addEventListener("click", function(){

    let audio = new Audio("/soundsD/drum-hit.mp3");
    audio.currentTime = 0;
    audio.play();
});

snareDrum2.addEventListener("click", function(){

    let audio = new Audio("/soundsD/snare hit 2.mp3");
    audio.currentTime = 0;
    audio.play();
});

tomDrum2.addEventListener("click", function(){

    let audio = new Audio("/soundsD/tom-low-2.mp3");
    audio.currentTime = 0;
    audio.play();
});

cymbalDrum2.addEventListener("click", function(){

    let audio = new Audio("/soundsD/cymbal-hit-1.mp3");
    audio.currentTime = 0;
    audio.play();
});




document.addEventListener("keydown", function(event) {
    switch (event.code) {
        case "KeyA":
            let audio1 = new Audio("/soundsD/cymbal-hit.mp3");
            audio1.currentTime = 0;
            audio1.play();
            break;

        case "KeyS":
            let audio2 = new Audio("/soundsD/tom-high-1.mp3");
            audio2.currentTime = 0;
            audio2.play();
            break;

        case "KeyD":
            let audio3 = new Audio("/soundsD/snare-hit.mp3");
            audio3.currentTime = 0;
            audio3.play();
            break;

        case "Space":
            let audio4 = new Audio("/soundsD/drum-hit.mp3");
            audio4.currentTime = 0;
            audio4.play();
            break;
        
        case "KeyJ":
            let audio5 = new Audio("/soundsD/snare hit 2.mp3");
            audio5.currentTime = 0;
            audio5.play();
            break;
        
        case "KeyK":
            let audio6 = new Audio("/soundsD/tom-low-2.mp3");
            audio6.currentTime = 0;
            audio6.play();
            break;
        
        case "KeyL":
            let audio7 = new Audio("/soundsD/cymbal-hit-1.mp3");
            audio7.currentTime = 0;
            audio7.play();
            break;
    
    };
});


document.addEventListener("keydown", function(change){
    switch(change.code) {
        case "KeyA":
            cymbalDrum1.style.color = "red";
            cymbalDrum1.style.boxShadow = "0 0 15px red";
            break;

        case "KeyS":
            tomDrum1.style.color = "red";
            tomDrum1.style.boxShadow = "0 0 15px red";
            break;

        case "KeyD":
            snareDrum1.style.color = "red";
            snareDrum1.style.boxShadow = "0 0 15px red";
            break;

        case "Space":
            kickDrum.style.color = "red";
            kickDrum.style.boxShadow = "0 0 15px red";
            break;
        
        case "KeyJ":
            snareDrum2.style.color = "red";
            snareDrum2.style.boxShadow = "0 0 15px red";
            break;
        
        case "KeyK":
            tomDrum2.style.color = "red";
            tomDrum2.style.boxShadow = "0 0 15px red";
            break;
        
        case "KeyL":
            cymbalDrum2.style.color = "red";
            cymbalDrum2.style.boxShadow = "0 0 15px red";
            break;
    }


});

document.addEventListener("keyup", function(alter){
    switch(alter.code) {
        case "KeyA":
            cymbalDrum1.style.color = "black";
            cymbalDrum1.style.boxShadow = "0 0 15px rebeccapurple";
            break;

        case "KeyS":
            tomDrum1.style.color = "black";
            tomDrum1.style.boxShadow = "0 0 15px rebeccapurple";
            break;

        case "KeyD":
            snareDrum1.style.color = "black";
            snareDrum1.style.boxShadow = "0 0 15px rebeccapurple";
            break;

        case "Space":
            kickDrum.style.color = "black";
            kickDrum.style.boxShadow = "0 0 15px rebeccapurple";
            break;
        
        case "KeyJ":
            snareDrum2.style.color = "black";
            snareDrum2.style.boxShadow = "0 0 15px rebeccapurple";
            break;
        
        case "KeyK":
            tomDrum2.style.color = "black";
            tomDrum2.style.boxShadow = "0 0 15px rebeccapurple";
            break;
        
        case "KeyL":
            cymbalDrum2.style.color = "black";
            cymbalDrum2.style.boxShadow = "0 0 15px rebeccapurple";
            break;
    }


});