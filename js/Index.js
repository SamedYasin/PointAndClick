document.getElementById("mainTitle").appendChild(document.createTextNode("Point And Click Adventure"));
document.getElementById("mainTitle").style.textAlign = "center";

const offsetCharacter = 16;

const mainCharacter = document.getElementById("mainCharacter");
const gameWindow = document.getElementById("gameWindow");
const characterAudio = document.getElementById('characterAudio');



gameWindow.onclick = function (e) {
    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    mainCharacter.style.left = x - offsetCharacter +"px";
    mainCharacter.style.top = y - offsetCharacter +"px";
    console.log(x);

    console.log(e.target.id);

    switch(e.target.id){
        case "object1":
            console.log('This is a secret door but its locked...');
            characterAudio.play()
            break;
        case "object2":
            console.log('This is a secret door but its locked...');
            characterAudio.play()
            break;
        default:

            break;
    }
    
};