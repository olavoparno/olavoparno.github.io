let converted = 0, lastWololo = 0, randImg = 0;

const callWololo = () => {
    "use strict";
    const randSound = Math.floor((Math.random() * 4) + 1);
    let elemImg = document.getElementsByClassName("wololo-div")[0];
    let elemAudio = document.getElementById("audio");

    while (randImg === lastWololo) {
        randImg = Math.floor((Math.random() * 32) + 1);
    }

    lastWololo = randImg;

    let soundSrc = `sounds/Wololo${randSound}.wav`;

    if (elemAudio === null) {

        elemAudio = document.createElement("audio");
        elemAudio.id = "audio";
        elemAudio.src = soundSrc;

        document.body.appendChild(elemAudio);
        console.log('Created audio');
    }

    createjs.Sound.registerSound(soundSrc, "x");
                                setTimeout(function () {
                                    createjs.Sound.play("x");
                                }, 100);
    
    let imageSrc = `img/Wololo${randImg}.jpg`;
    elemImg.style.backgroundImage = "url('" + imageSrc + "')";

    converted = converted + 1;

    document.getElementById("h1Wololo").innerHTML = "Converted " + converted + "!";
    //elemAudio.play();
}

const runGlobal = () => {
   
        if (annyang) {

            var commands = {
                 
                'rogan': () => (callWololo()),
                
                "alabama's": () => (callWololo()), //Vulgo "Alamas"

                'wololo': () => (callWololo())
            };
            // Add our commands to annyang
            annyang.addCommands(commands);

            // Start listening.
            annyang.start();
        } else {
            $(document).ready(function () {
                "use strict";
                $('#unsupported').fadeIn('fast');
            });
        }
}

window.onload = () => (runGlobal())
