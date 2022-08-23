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
    
    // const listObj = {
    //     parentElement: parentElement
    // }
    
    listArray.push(parentElement);
    display(listArray);
}


