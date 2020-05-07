/*
function allowDrop(ev) {
    "use strict";
    ev.preventDefault();
}

function drag(ev) {
    "use strict";
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    "use strict";
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}


function wait(ms) {
    "use strict";
    return new Promise(r => setTimeout(r, ms));
};
*/

var playDeath = function() {
    var chars = [
		"AmazonDead",
		"AssassinDead",
		"BarbarianDead",
		"DruidDead",
		"NecromancerDead",
		"PaladinDead",
        "SorceressDead"
    ];
    var randSound = Math.floor((Math.random() * 3) + 1); 
    var randChar = Math.floor(Math.random() * (chars.length));

    var filePath = "sounds/DeathSounds/" + chars[randChar] + randSound + ".flac";

    var audio = new Audio(); // create audio wo/ src
    audio.preload = "auto"; // intend to play through
    audio.autoplay = true; // autoplay when loaded
  
    audio.src = filePath;
    audio.play();
};

var playSound = function(url) {
    return new Promise(function(resolve, reject) {
      // return a promise
      var audio = new Audio(); // create audio wo/ src
      audio.preload = "auto"; // intend to play through
      audio.autoplay = true; // autoplay when loaded
      audio.onerror = reject; // on error, reject
      audio.onended = resolve; // when done, resolve
  
      audio.src = url;
    });
};
  
function onClick(charName) {
    var rand = Math.floor((Math.random() * 6) + 1);
    var filePath = "sounds/Common/" + charName + "/" + charName + rand + ".flac";

    playSound(filePath).then(function() {
        setTimeout(function() {(playDeath())}, 100);
    })
    .catch(function() {
        alert('Error');
    })
}

async function playDeathSoundDebug() {
    "use strict";
	var chars = [
		"AmazonDead",
		"AssassinDead",
		"BarbarianDead",
		"DruidDead",
		"NecromancerDead",
		"PaladinDead",
		"SorceressDead"], randSound = Math.floor((Math.random() * 3) + 1), randChar = Math.floor(Math.random() * (chars.length)),
        elemDeath = document.getElementById("audio-death-chaos"), randSoundEntrance = Math.floor((Math.random() * 28) + 1), elemWelcome = document.getElementById("audio-welcome");
        
    elemWelcome.src = "sounds/Entrance/Welcome" + randSoundEntrance + ".wav";
    elemWelcome.play();
    
    if (elemDeath === null) {
        elemDeath = document.createElement("audio");
        document.getElementById("page-body").appendChild(elemDeath);
    }
    
    elemDeath.id = "audio-death-chaos";
    elemDeath.src = "sounds/DeathSounds/" + chars[randChar] + randSound + ".wav";
    
    elemDeath.play();
    
    elemDeath = null;
    randChar = null;
    randSound = null;

    return false;
}

function playSoundChaosDebug() {
    "use strict";
    var chars = [
		"Amazon",
		"Assassin",
		"Barbarian",
		"Druid",
		"Necromancer",
		"Paladin",
		"Sorceress",
        "Baal",
        "Cain",
        "Diablo",
        "Mephisto",
        "Meshif",
        "Tyrael",
        "Warriv"], randChar = Math.floor(Math.random() * (chars.length)), randSound = Math.floor((Math.random() * 3) + 1), elem = document.getElementById("audio-chaos");

    if (elem === null) {
        elem = document.createElement("audio");
        document.getElementById("page-body").appendChild(elem);
    }

    elem.id = "audio-chaos";
    elem.src = "sounds/Common/" + chars[randChar] + "/" + chars[randChar] + randSound + ".flac";
    
    elem.onended = function() {
        playDeathSoundDebug();
        playSoundChaosDebug();
    };
    
    elem.play();
    
    elem = null;
    randSound = null;

    return false;
}

function playTyrael(charName) {
    "use strict";
	var rand = Math.floor((Math.random() * 9) + 1), elemTyrael = document.getElementById("audio-tyrael");

    if (elemTyrael === null) {
        elemTyrael = document.createElement("audio");
        document.getElementById("page-body").appendChild(elemTyrael);
    }

    elemTyrael.id = "audio-tyrael";
    elemTyrael.src = "sounds/Common/" + charName + "/" + charName + rand + ".flac";

    elemTyrael.play();

    elemTyrael = null;
    rand = null;

    return false;
}

function playCain(charName) {
    "use strict";
	var rand = Math.floor((Math.random() * 11) + 1), elemCain = document.getElementById("audio-cain");

    if (elemCain === null) {
        elemCain = document.createElement("audio");
        document.getElementById("page-body").appendChild(elemCain);
    }

    elemCain.id = "audio-cain";
    elemCain.src = "sounds/Common/" + charName + "/" + charName + rand + ".flac";

    elemCain.play();

    elemCain = null;
    rand = null;

    return false;
}

function playPrime(charName) {
    "use strict";
	var rand = Math.floor((Math.random() * 3) + 1), elemPrime = document.getElementById("audio-prime");

    if (elemPrime === null) {
        elemPrime = document.createElement("audio");
        document.getElementById("page-body").appendChild(elemPrime);
    }

    elemPrime.id = "audio-prime";
    elemPrime.src = "sounds/Common/" + charName + "/" + charName + rand + ".flac";

    elemPrime.play();

    elemPrime = null;
    rand = null;

    return false;
}