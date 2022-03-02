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
function myFunction() { 

    let nameArea = document.getElementById("namesRandom").value;
    let numberArea = document.getElementById("numberRandom").value;  
    const myArray = nameArea.split(" ");
    let result = "";

    if (numberArea > myArray.length) {
        document.getElementById("nameArea1").innerHTML = "The numbered entered by the user is larger than the amount of names entered";
        return;
    }   else if (numberArea <= 0) {
        document.getElementById("nameArea1").innerHTML = "The numbered entered by the user is less or equals 0";
        return;
    } else {
        document.getElementById("nameArea1").innerHTML=""; 
    }

    for (let i = 0; i < numberArea; i++)    {
        let j = Math.floor(Math.random() * myArray.length);
        result += myArray[j] + "<br>";
        console.log(result);
    }
    document.getElementById("randomNames").innerHTML = result;   
  }

  function myFunction1()    {
    document.getElementById("randomNames").innerHTML = ""; 
    document.getElementById("inform").reset();
  }