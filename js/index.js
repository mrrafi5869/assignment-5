const listArray = [];
function addToList (element) {
    const parentElement = element.parentNode.children[0].innerText;
    
    const listObj = {
        parentElement: parentElement
    }
    
    listArray.push(listObj);
    console.log(listArray)
    console.log(listArray.length)
}