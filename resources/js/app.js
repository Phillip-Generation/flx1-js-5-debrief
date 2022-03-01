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
let enterName = document.getElementById('enter-names'); //text-area
let submitButton = document.getElementById('generate-button');
let clearButton = document.getElementById('clear-button');
let numberInput = document.getElementById('number');
let ol = document.getElementById('names-list');


const generateNames = () => {

    ol.innerHTML = '';
    let nameArray = enterName.value.split(' ');

    if (numberInput.value > nameArray.length) {
        alert(' you selected a number that is greater than the number of names you entered! ');
    } else {

        for (let i = 0; i < numberInput.value; i++) {
            let randomName = nameArray[Math.floor(Math.random() * nameArray.length)];
            let listItem = document.createElement('li');
            listItem.innerHTML = randomName;
            ol.appendChild(listItem);
            listItem.style.textAlign = 'center';
            listItem.style.marginLeft = '-10 px';


        }
    }


}
const clearNames = () => {
    ol.innerHTML = '';
    numberInput.value = '';
    enterName.value = '';
}
clearButton.onclick = clearNames;

submitButton.onclick = generateNames;