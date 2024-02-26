let navicon=document.getElementById("navicon");
let navtoggle=document.getElementById("navtoggle");
let count=0;
if(count==0){
navicon.addEventListener("click",(e)=>{
    
    e.preventDefault();
 //    home.style.color="red";
  if(count==0){
    navtoggle.style.display="block";
    count=1;
  }
  else{
    navtoggle.style.display="none";
    count=0;
  }
 })
}

