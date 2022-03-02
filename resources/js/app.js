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

let namesText = document.getElementById('names');
let namesArray = namesText.value.split(' ');
let numOfRndNames = document.getElementById('inputNum');
let rndNameGenBtn = document.getElementById('genRndButton');
let clearButton = document.getElementById('clearButton')
let ol = document.getElementById('names-ol');

console.log(`You've entered the following text: ${namesText.value}`);
console.log(`The array is: ${namesArray}`);

// get value of textarea on change
namesText.addEventListener('input', function handleChange(event) {
    console.log(event.target);
    console.log(event.target.value);
    namesText = document.getElementById('names');
    namesArray = namesText.value.split(' ');
    

    console.log(`You've entered the following text: ${namesText.value}`);
    console.log(`The array is: ${namesArray}`);
  });

const generateNames = () => {
    ol.innerHTML = '';

    if(isNaN(numOfRndNames.value) || numOfRndNames.value < 1 || numOfRndNames.value > namesArray.length){
        alert('Please select a natural number smaller than your list of names')
    } else if(numOfRndNames.value <= namesArray.length) {
        for (let i = 0; i < numOfRndNames.value; i++) {
            let rndName = namesArray[Math.floor(Math.random() * namesArray.length)];
            let listItem = document.createElement('li');
            listItem.innerHTML = rndName;
            ol.appendChild(listItem);
        }
    } 
    
}

const clearNames = () => {
    ol.innerHTML = '';

}

rndNameGenBtn.onclick = generateNames;
clearButton.onclick = clearNames;