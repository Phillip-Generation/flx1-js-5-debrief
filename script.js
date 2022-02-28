let names;
let vectNames;

const randomNames = (namesStr,num) => {
   let newVectNames = [];  
   for(let i=0; i<num; i++ ) {
      newVectNames[i] = namesStr[Math.floor(Math.random() * namesStr.length)]
   };
   return newVectNames.join(' ');
}

document.getElementById("genButton").onclick = function () {
   
   names=document.getElementById("texArea").value;
   vectNames = names.split(", "); 
   if( document.getElementById("numNames").value<=vectNames.length){
      alert(randomNames(vectNames,document.getElementById("numNames").value));   
   } else {
      alert('Number random names is greater of names that you entered');
   }
   
};

document.getElementById("clearButton").onclick = function () {
   document.getElementById("texArea").value = "";  
};
