// const nameInput = document.getElementById('nameinput');

const generateButton = document.getElementById('generate');
const clearButton = document.getElementById('clear');
const listOfNames = document.getElementById('namelist');
  
  function makeList() {
    listOfNames.innerHTML = "";
    const nameArray = document.getElementById('nameinput').value.split(", ");
    const amount = document.getElementById('amount').value;
    if (amount > nameArray.length) {
      alert("Please enter a number below " + (nameArray.length + 1))
    } else {
      for (let i = 0; i < amount; i++) {
        const randomNames = nameArray[Math.floor(Math.random() * nameArray.length)];
        const li = document.createElement('li');
        li.innerHTML = randomNames;
        listOfNames.appendChild(li);
      }
    }
  }
  
  function clearList() {
    listOfNames.innerHTML = "";
  }

generateButton.onclick = makeList;
clearButton.onclick = clearList;
