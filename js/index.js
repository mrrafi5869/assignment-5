// player section
const listArray = [];

function display(playerList) {
    const playersName = document.getElementById("players-name");
    playersName.innerText = ""
    const length = listArray.length;

    if (length > 5) {
        alert('you can not select more than 5 players');
    }
    
    for(let i = 0; i < length; i++) {
        
        const name = playerList[i];

        const li = document.createElement("li");
        li.innerText = name

        playersName.appendChild(li);
        
    }

}


function addToList (element) {
    const parentElement = element.parentNode.children[0].innerText;
    element.disabled = true;
    listArray.push(parentElement);
    display(listArray);
    const length = listArray.length;

    if(length > 5){
        element.disabled = false;
    }
    
}


// budget section starts here

document.getElementById("per-player-btn").addEventListener("click", function() {
    const perPlayerInput = document.getElementById("per-player-input");
    const perPlayerInputString = perPlayerInput.value;
    const perPlayerInputNumber = parseInt(perPlayerInputString);
    if(isNaN(perPlayerInput)){
            alert("please enter a valid number")
        }

    const playersName = document.getElementById("players-name");
    const playersNameChild = playersName.children.length;

    const cost = playersNameChild * perPlayerInputNumber;
    
    totalCost("players-expenses", cost)
});

// total calculation
document.getElementById("calculate-total").addEventListener('click',function () {
    const perPlayerInput = document.getElementById("per-player-input");
    const perPlayerInputString = perPlayerInput.value;
    const perPlayerInputNumber = parseInt(perPlayerInputString);    
    
    const manager = document.getElementById("manager");
    const managerString = manager.value;
    const managerNumber = parseInt(managerString);

    const coach = document.getElementById('coach');
    const coachString = coach.value;
    const coachNumber = parseInt(coachString);

    const totalCostNumber =perPlayerInputNumber + managerNumber + coachNumber;

    totalCost("total", totalCostNumber)
})