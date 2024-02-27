let heading1 = document.getElementById('heading1');
let heading2 = document.getElementById('heading2');
let heading3 = document.getElementById('heading3');
var interval = 5; 
 var currentValue = 1;
 var currentValue1 = 1;
 var currentValue2 = 1;
 function updateHeading1Text() {

   heading1.textContent = currentValue;

   if (currentValue < 400) {
     currentValue++;
   } else {
     clearInterval(textInterval); 
   }
 }
 updateHeading1Text();
 var textInterval = setInterval(updateHeading1Text, interval);
 
 function updateHeading2Text() {

  heading2.textContent = `${currentValue1}+`;
  

  if (currentValue < 201) {
    currentValue1++;
  } else {
    clearInterval(textInterval); 
  }
}
updateHeading2Text();
var textInterval = setInterval(updateHeading2Text, interval);


function updateHeading3Text() {

  heading3.textContent = currentValue2+ "K+";

  if (currentValue < 1001) {
    currentValue2++;
  } else {
    clearInterval(textInterval); 
  }
}
updateHeading3Text();
var textInterval = setInterval(updateHeading3Text, interval);
