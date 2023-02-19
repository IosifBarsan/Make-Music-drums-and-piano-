const pianoKeys = document.querySelectorAll(".key");


function playSound(newURL) {
    let audio = new Audio(newURL);
    audio.currentTime = 0;
    audio.play();
    setTimeout(() => {
      audio.pause();
    }, 750);
  };
  


pianoKeys.forEach((pianoKey, i) => {
    const Number = i < 9 ? "0" + (i + 1) : (i + 1);
    const newURL = "/soundsP/key" + Number + ".mp3";
    pianoKey.addEventListener("click", () => playSound(newURL))
    currentTime = 0;
    
});

 document.addEventListener("keydown", function(event) {
    switch (event.code) {
        case "KeyQ":
            let audio1 = new Audio("/soundsP/key01.mp3");
            audio1.currentTime = 0;
            audio1.play();
            setTimeout(function() {
                audio1.pause();
            }, 750);
            break;

        case "KeyW":
            let audio2 = new Audio("/soundsP/key02.mp3");
            audio2.currentTime = 0;
            audio2.play();
            setTimeout(function() {
                audio2.pause();
            }, 750);
            break;

        case "KeyE":
            let audio3 = new Audio("/soundsP/key03.mp3");
            audio3.currentTime = 0;
            audio3.play();
            setTimeout(function() {
                audio3.pause();
            }, 750);
            break;

        case "KeyR":
            let audio4 = new Audio("/soundsP/key04.mp3");
            audio4.currentTime = 0;
            audio4.play();
            setTimeout(function() {
                audio4.pause();
            }, 750);
            break;
        
        case "KeyT":
            let audio5 = new Audio("/soundsP/key05.mp3");
            audio5.currentTime = 0;
            audio5.play();
            setTimeout(function() {
                audio5.pause();
            }, 750);
            break;
        
        case "KeyY":
            let audio6 = new Audio("/soundsP/key06.mp3");
            audio6.currentTime = 0;
            audio6.play();
            setTimeout(function() {
                audio6.pause();
            }, 750);
            break;
        
        case "KeyU":
            let audio7 = new Audio("/soundsP/key07.mp3");
            audio7.currentTime = 0;
            audio7.play();
            setTimeout(function() {
                audio7.pause();
            }, 750);
            break;

        case "KeyI":
            let audio8 = new Audio("/soundsP/key08.mp3");
            audio8.currentTime = 0;
            audio8.play();
            setTimeout(function() {
                audio8.pause();
            }, 750);
            break;
    
        case "KeyO":
            let audio9 = new Audio("/soundsP/key09.mp3");
            audio9.currentTime = 0;
            audio9.play();
            setTimeout(function() {
                audio9.pause();
            }, 750);
            break;

        case "KeyP":
            let audio10 = new Audio("/soundsP/key10.mp3");
            audio10.currentTime = 0;
            audio10.play();
            setTimeout(function() {
                audio10.pause();
            }, 750);
            break;

        case "KeyA":
            let audio11 = new Audio("/soundsP/key11.mp3");
            audio11.currentTime = 0;
            audio11.play();
            setTimeout(function() {
                audio11.pause();
            }, 750);
            break;

        case "KeyS":
            let audio12 = new Audio("/soundsP/key12.mp3");
            audio12.currentTime = 0;
            audio12.play();
            setTimeout(function() {
                audio12.pause();
            }, 750);
             break; 

        case "KeyD":
            let audio13 = new Audio("/soundsP/key13.mp3");
            audio13.currentTime = 0;
            audio13.play();
            setTimeout(function() {
                audio13.pause();
            }, 750);
            break; 

        case "KeyF":
            let audio14 = new Audio("/soundsP/key14.mp3");
            audio14.currentTime = 0;
            audio14.play();
            setTimeout(function() {
                audio14.pause();
            }, 750);
            break;

        case "KeyG":
            let audio15 = new Audio("/soundsP/key15.mp3");
            audio15.currentTime = 0;
            audio15.play();
            setTimeout(function() {
                audio15.pause();
            }, 750);
            break;

        case "KeyH":
             let audio16 = new Audio("/soundsP/key16.mp3");
            audio16.currentTime = 0;
            audio16.play();
            setTimeout(function() {
                audio16.pause();
            }, 750);
            break; 

        case "KeyJ":
            let audio17 = new Audio("/soundsP/key17.mp3");
            audio17.currentTime = 0;
            audio17.play();
            setTimeout(function() {
                audio17.pause();
            }, 750);
            break;

        case "KeyK":
            let audio18 = new Audio("/soundsP/key18.mp3");
            audio18.currentTime = 0;
            audio18.play();
            setTimeout(function() {
                audio18.pause();
            }, 750);
            break;

        case "KeyL":
            let audio19 = new Audio("/soundsP/key19.mp3");
            audio19.currentTime = 0;
            audio19.play();
            setTimeout(function() {
                audio19.pause();
            }, 750);
            break;

        case "KeyC":
            let audio20 = new Audio("/soundsP/key20.mp3");
            audio20.currentTime = 0;
            audio20.play();
            setTimeout(function() {
                audio20.pause();
            }, 750);
            break;

        case "KeyV":
            let audio21 = new Audio("/soundsP/key21.mp3");
            audio21.currentTime = 0;
            audio21.play();
            setTimeout(function() {
                audio21.pause();
            }, 750);
            break;

        case "KeyB":
            let audio22 = new Audio("/soundsP/key22.mp3");
            audio22.currentTime = 0;
            audio22.play();
            setTimeout(function() {
                audio22.pause();
            }, 750);
            break;

        case "KeyN":
            let audio23 = new Audio("/soundsP/key23.mp3");
            audio23.currentTime = 0;
            audio23.play();
            setTimeout(function() {
                audio23.pause();
            }, 750);
            break;

        case "KeyM":
            let audio24 = new Audio("/soundsP/key24.mp3");
            audio24.currentTime = 0;
            audio24.play();
            setTimeout(function() {
                audio24.pause();
            }, 750);
            break;      
            
    };
});


function updateWhite(id){
    let white = document.getElementById(id)
    white.style.borderTop = "1px solid #777";
    white.style.borderLeft = "1px solid #999";
    white.style.borderBottom = "1px solid #999";
    white.style.boxShadow = "2px 0 3px rgba(0,0,0,0.1) inset,-5px 5px 20px rgba(0,0,0,0.2) inset,0 0 3px rgba(0,0,0,0.2)";
    white.style.background = "linear-gradient(to bottom,#fff 0%,#e9e9e9 100%)";
};

function updateWhite2(id){
    let white2 = document.getElementById(id)
    white2.style.borderTop = "none";
    white2.style.borderLeft = "none";
    white2.style.borderBottom = "none";
    white2.style.boxShadow = "none";
    white2.style.width = "68px";
    white2.style.height = "280px";
    white2.style.borderRadius - "0 0 5px 5px";
    white2.style.border = "solid black 1px";
    white2.style.background = "white";
};



function updateBlack(id) {
    let black = document.getElementById(id);
    black.style.borderTop = "2px solid #050505";
    black.style.borderLeft = "2px solid #000000";
    black.style.borderBottom = "2px solid #000000";
    black.style.boxShadow = "2px 0 3px rgba(0,0,0,0.1) inset,-5px 5px 20px rgba(0,0,0,0.2) inset,0 0 3px rgba(0,0,0,0.2)";
    black.style.background = "linear-gradient(to bottom,#0a0a0a 0%,#181616 100%)";
  };

function updateBlack2(id){
    let black2 = document.getElementById(id);
    black2.style.width = "38px";
    black2.style.height = "160px";
    black2.style.borderTop = "none";
    black2.style.borderLeft = "none";
    black2.style.borderBottom = "none";
    black2.style.boxShadow = "none";
    black2.style.borderRadius = "0 0 5px 5px" ;
    black2.style.boxSizing = "border-box";
    black2.style.position = "absolute";
    black2.style.background = "rgb(0, 0, 0)";
};


  
  document.addEventListener("keydown", function(change) {
    switch (change.code) {
      case "KeyQ":
        updateBlack("black_1");
        break;
  
      case "KeyW":
        updateBlack("black_2");
        break;
  
      case "KeyE":
        updateBlack("black_3");
        break;
  
      case "KeyR":
        updateBlack("black_4");
        break;
  
      case "KeyT":
        updateBlack("black_5");
        break;
  
      case "KeyY":
        updateBlack("black_6");
        break;
  
      case "KeyU":
        updateBlack("black_7");
        break;
  
      case "KeyI":
        updateBlack("black_8");
        break;

      case "KeyO":
        updateBlack("black_9");
        break;

      case "KeyP":
        updateBlack("black_10");
        break; 
    }
  });
  

  document.addEventListener("keyup", function(change) {
    switch (change.code) {
      case "KeyQ":
        updateBlack2("black_1");
        break;
  
      case "KeyW":
        updateBlack2("black_2");
        break;
  
      case "KeyE":
        updateBlack2("black_3");
        break;
  
      case "KeyR":
        updateBlack2("black_4");
        break;
  
      case "KeyT":
        updateBlack2("black_5");
        break;
  
      case "KeyY":
        updateBlack2("black_6");
        break;
  
      case "KeyU":
        updateBlack2("black_7");
        break;
  
      case "KeyI":
        updateBlack2("black_8");
        break;

      case "KeyO":
        updateBlack2("black_9");
        break;

      case "KeyP":
        updateBlack2("black_10");
        break; 
    }
  });
  
  document.addEventListener("keydown", function(change) {
    switch (change.code) {
      case "KeyA":
        updateWhite("white_1");
        break;
  
      case "KeyS":
        updateWhite("white_2");
        break;
  
      case "KeyD":
        updateWhite("white_3");
        break;
  
      case "KeyF":
        updateWhite("white_4");
        break;
  
      case "KeyG":
        updateWhite("white_5");
        break;
  
      case "KeyH":
        updateWhite("white_6");
        break;
  
      case "KeyJ":
        updateWhite("white_7");
        break;
  
      case "KeyK":
        updateWhite("white_8");
        break;

      case "KeyL":
        updateWhite("white_9");
        break;

      case "KeyC":
        updateWhite("white_10");
        break; 

      case "KeyV":
        updateWhite("white_11");
        break;

      case "KeyB":
        updateWhite("white_12");
        break;

      case "KeyN":
        updateWhite("white_13");
        break;
       
      case "KeyM":
        updateWhite("white_14");
        break;  
    }
  });

  document.addEventListener("keyup", function(change) {
    switch (change.code) {
      case "KeyA":
        updateWhite2("white_1");
        break;
  
      case "KeyS":
        updateWhite2("white_2");
        break;
  
      case "KeyD":
        updateWhite2("white_3");
        break;
  
      case "KeyF":
        updateWhite2("white_4");
        break;
  
      case "KeyG":
        updateWhite2("white_5");
        break;
  
      case "KeyH":
        updateWhite2("white_6");
        break;
  
      case "KeyJ":
        updateWhite2("white_7");
        break;
  
      case "KeyK":
        updateWhite2("white_8");
        break;

      case "KeyL":
        updateWhite2("white_9");
        break;

      case "KeyC":
        updateWhite2("white_10");
        break; 

      case "KeyV":
        updateWhite2("white_11");
        break;

      case "KeyB":
        updateWhite2("white_12");
        break;

      case "KeyN":
        updateWhite2("white_13");
        break;
       
      case "KeyM":
        updateWhite2("white_14");
        break;  
    }
  });