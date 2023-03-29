document.getElementById("mainTitle").appendChild(document.createTextNode("Point And Click Adventure"));
document.getElementById("mainTitle").style.textAlign = "center";

const offsetCharacter = 16;

const mainCharacter = document.getElementById("mainCharacter");
const gameWindow = document.getElementById("gameWindow");
const characterAudio = document.getElementById('characterAudio');
const mainCharacterSpeech = document.getElementById("mainCharacterSpeech");

const counterSpeech = document.getElementById("counterSpeech");


gameWindow.onclick = function (e) {
    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    mainCharacter.style.left = x - offsetCharacter + "px";
    mainCharacter.style.top = y - offsetCharacter + "px";
    console.log(x);


    switch (e.target.id) {
        case "object1":
            showSpeech(mainCharacterSpeech,characterAudio,"This is a secret door, <br> but its locked...")
            break;
        
        case "demon":
            showSpeech(mainCharacterSpeech,characterAudio,"wow demon...");
            setTimeout(showSpeech, 4000, counterSpeech, characterAudio, "No you are the demon..");
            

            break;
        default:
            hideSpeech();
            break;
    }

};

function showSpeech(targetBubble, targetAudio, dialog) {
    targetBubble.style.opacity = 1;
    targetBubble.innerHTML = dialog;
    targetAudio.currentTime = 0;
    targetAudio.play();
    setTimeout(hideSpeech, 4000,targetBubble,targetAudio );

}

function hideSpeech(targetBubble, targetAudio) {
    targetBubble.style.opacity = 0;
    targetBubble.innerHTML = "...";
    targetAudio.pause();
}