document.getElementById("mainTitle").appendChild(document.createTextNode("Point And Click Adventure"));
document.getElementById("mainTitle").style.textAlign = "center";

const offsetCharacter = 16;

const mainCharacter = document.getElementById("mainCharacter");
const gameWindow = document.getElementById("gameWindow");

gameWindow.onClick = function (e) {
    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    mainCharacter.style.left - offsetCharacter +"px";
    mainCharacter.style.top - offsetCharacter +"px";
    Console.log(x);
    
};