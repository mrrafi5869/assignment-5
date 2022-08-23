// player section
const listArray = [];

function display(playerList) {
    console.log(playerList);
    const playersName = document.getElementById("players-name");
    playersName.innerText = ""
    const length = listArray.length
    for(let i = 0; i < length; i++) {
        
        const name = playerList[i];

        const li = document.createElement("li");
        li.innerText = name

        playersName.appendChild(li);
        
    }

    if(length > 5){
        alert("you can select only 5 players");
    }
}


function addToList (element) {
    const parentElement = element.parentNode.children[0].innerText;
    
    listArray.push(parentElement);
    display(listArray);
}


// budget section starts here

document.getElementById("per-player-btn").addEventListener("click", function() {
    const perPlayerInput = document.getElementById("per-player-input");
    const perPlayerInputString = perPlayerInput.value;
    const perPlayerInputNumber = parseInt(perPlayerInputString);


    const playersName = document.getElementById("players-name");
    const playersNameChild = playersName.children.length;

    const cost = playersNameChild * perPlayerInputNumber;

    
})