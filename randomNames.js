let namesList = document.getElementById('txtarea-names');
let namesElement = document.getElementById('button-gen-names');
let clrElement = document.getElementById('button-clr');
let ol = document.getElementById('names-list');


function randomNames(){
ol.innerHTML = " ";
let showNames = namesList.value.split(",");
const num = document.getElementById('text-number').value;
if(num>showNames.length){
    alert( `Number entered should be less than  ${((showNames.length)+1)}`);
} else {
    
    for(let i = 0 ; i < num ; i++){
        let listedName = document.createElement('li');
        listedName.innerHTML = showNames[ Math.floor(Math.random()*showNames.length)];
        ol.appendChild(listedName);
    }
}
}


function clear(){   
  ol.innerHTML = " ";
}

namesElement.addEventListener('click',randomNames);
clrElement.addEventListener('click',clear);
