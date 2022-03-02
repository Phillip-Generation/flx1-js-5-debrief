// Your application should meet the requirements listed below:
// 1. Allows users to enter names into a text box.
// 2. Allows users the enter the number of random names they want into a text box.
// 3. A `Generate Random Names` button that intiates the randomization of the name in the text box.
// 4. The selected random names are displayed to the browser.
// 5. Each time the `Generate Random Names` button is pressed, the previous names should be cleared, and a new selection of names should appear (instead of the new selection adding the prior list).
// 5. The application should make sure that number entered by the user does not exceed the amount of names entered for randomization.
// 6. If the numbered entered by the user is larger than the amount of names entered, an alert should appear informting the user of this.
// 7. A button named 'Clear' that removes the populated list from the screen.
// 8. The application should have a simple, visually pleasing design
// Note: Do not spend too much time on design. Focus primarily on functionality(i.e. steps 1-8).
// Be sure to check the helpful links in the README.
var input = document.querySelector("#randName");
var numInput = document.querySelector("#randNum");
var randButton = document.getElementById("randButton");
var deleteButton = document.getElementById("clear");
var nameDiv = document.querySelector("#namelist");

function getRandNames(event) {
  event.preventDefault();

  let randNameInput = document.getElementById("randName").value;
  let randNumInput = document.getElementById("randNum").value;

  let newArray = randNameInput.split(",");

  console.log(newArray);
  console.log(randNumInput);

  if (newArray.length < randNumInput) {
    alert(`Must enter a number less than ${newArray.length}`);
  } else
    for (var i = 0; i < randNumInput; i++) {
      var randomItem = newArray[Math.floor(Math.random() * newArray.length)];
      console.log(randomItem);

      const li = document.createElement("li");

      li.innerHTML = randomItem;

      nameDiv.append(li);
    }
}

function clearTextArea() {
  input.value = "";
  numInput.value = "";
  nameDiv.textContent = "";
}
input.addEventListener("click", clearTextArea);
randButton.addEventListener("click", getRandNames);
deleteButton.addEventListener("click", clearTextArea);
