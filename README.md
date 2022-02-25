# **The Wheel!**

## js-5-debrief

<img src="resources/img/wheel.png" height="100" width="100")

## In this exercise you will create your own Random Name Generator!

### **Directions:**

### _Create a Random Name Generator using HTML, CSS, and JavaScript._

### **Your application should meet the requirements listed below:**

 1. Allows users to enter names into a text box.
 2. Allows users the enter the number of random names they want into a text box.
 3. A `Generate Random Names` button that intiates the randomization of the name in the text box.
 4. The selected random names are displayed to the browser.
 5. Each time the `Generate Random Names` button is pressed, the previous names should be cleared, and a new selection of names should appear (instead of the new selection adding the prior list).
 5. The application should make sure that number entered by the user does not exceed the amount of names entered for randomization.
 6. If the numbered entered by the user is larger than the amount of names entered, an alert should appear informting the user of this.
 7. A button named 'Clear' that removes the populated list from the screen. 
 8. The application should have a simple, visually pleasing design
 Note: Do not spend too much time on design. Focus primarily on functionality(i.e. steps 1-8).

### Helpful Links

- Info `textarea`: https://www.w3schools.com/tags/tag_textarea.asp
- Info on `array.split()`: https://www.w3schools.com/jsref/jsref_split.asp
- Info on `.value`: https://www.w3schools.com/jsref/prop_text_value.asp
- Info on `alert()`: https://www.w3schools.com/jsref/met_win_alert.asp

## Part 1 - Fork and Clone the project

- Begin by _forking_ this project into a personal repository.
  - To do this, click the `Fork` button located at the top right of this page.
- Navigate to your github profile to find the _newly forked repository_.
- Clone the repository from **your account** into the directory on your computer that you use to keep your projects (ex. `dev` directory).
  - Remember this from the lessons on Git and Github?
    - Go to the green `Code` button in the top right of this repository
    - Select `https` and then COPY that url
    - Open Git Bash on your computer, `cd` to a directory where you wish to save this assignment to work on
    - Type `git clone ` followed by the URL you copied from Github
    - `cd` into the repository for this assignment that you have just cloned.
- Open the newly cloned project in a code editor (ex. Visual Studio Code).

### Part 2 - Edit the _cloned_ project

- from a text editor (i.e. - Visual Studio Code, Notepad ++, etc...), select:
  - `File` > `Add Folder to WorkSpace`
    - Select the directory you use to store your projects (ex. `dev` directory)
    - From the text editor,in the directory you use to store your projects (ex. `dev` directory), locate the newly cloned project folder.
    - Expand the project from the _project explorer (may just be called `explorer`)_
    - Modify the `app.js`file to complete the assignment.

### Part 3 - _Pushing_ new changes to repository

- From a _terminal_ navigate to the root directory of the _cloned_ project.
- From the root directory of the project, execute the following commands:
  - `git add .`
    - Add all files in current directory to the staging area
  - `git commit -m 'I have made an edit to a file!'`
    - Save all staged changes to local repository
  - `git push -u origin main`
    - Push changes from local repository to remote repository

### Part 4 - Submitting assignment

- From the browser, navigate to the _forked_ project from **your** Github account.
- Click the `Pull Requests` tab.
- Select `New Pull Request`
