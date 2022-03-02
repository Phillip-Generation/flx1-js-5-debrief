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
const generate = document.getElementById('generate-button');
const clear = document.getElementById('clear-button');
let names = document.getElementById('names');
let inputElement = document.getElementById('how-many');
let namesListElement = document.getElementById('names-list');

const callOnMe = { generateRandomName: () => {
        
        let myArray = names.value.split(" ");
        let numOfNames = inputElement.value;
        namesListElement.innerHTML = "";
        
        if (numOfNames > myArray.length) { alert('Please enter a number less than ' + myArray.length);
        } else {
            for (let i = 0; i < numOfNames; i++) {
                let randomName = myArray[Math.floor(Math.random() * myArray.length)];
                const li = document.createElement('li');
                li.innerHTML = randomName;
                li.classList.add('alert', 'alert-primary');
                namesListElement.appendChild(li);
            }}},
    
    clearNames: () => { namesListElement.innerHTML = "";
        }};

    generate.addEventListener('click', callOnMe.generateRandomName);
    clear.addEventListener('click', callOnMe.clearNames);


