// Your application should meet the requirements listed below:
// 1. Allows users to enter names into a text box.
// 2. Allows users the enter the number of random names they want into a text box.
// 3. A `Generate Random Names` button that intiates the randomization of the names in the text box.
// 4. The selected random names are displayed to the browser.
// 5. Each time the `Generate Random Names` button is pressed, the previous names should be cleared, and a new selection of names should appear (instead of the new selection adding the prior list).
// 5. The application should make sure that number entered by the user does not exceed the amount of names entered for randomization.
// 6. If the numbered entered by the user is larger than the amount of names entered, an alert should appear informting the user of this.
// 7. A button named 'Clear' that removes the populated list from the screen. 
// 8. The application should have a simple, visually pleasing design
// Note: Do not spend too much time on design. Focus primarily on functionality(i.e. steps 1-8).
// Be sure to check the helpful links in the README.

const textAreaEl = document.getElementById("name-text-area");
const numberEl = document.getElementById("num-of-names");
const generatorButtonEl = document.getElementById("generator-button");
const clearButtonEl = document.getElementById("clear-button");
const listEl = document.getElementById("name-list");


/* Button Function
1. Parse text area into name array
2. Compare array length to number selection
    a. if greater, exit and give error message
    b. else, print as many random names as there were selected */

function generateNames () {
    let nameArray = textAreaEl.value.split(" ");
    let numOfNames = numberEl.value;
    if(numOfNames > nameArray.length) {
        alert(`Please select no more than ${nameArray.length} names`);
    } else {
        for(let i = 0; i < numOfNames; i++) {
            let randomIndex = Math.floor(Math.random()*nameArray.length);
            let name = nameArray[randomIndex];
            let newName = document.createElement("li");
            newName.innerHTML = name;
            listEl.appendChild(newName);
        }
    }
}

function clearNames () {
    while (listEl.firstChild) {
        listEl.removeChild(listEl.lastChild);
    }
}

generatorButtonEl.onclick = generateNames;
clearButtonEl.onclick = clearNames;
