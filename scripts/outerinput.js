let apt=document.getElementById("apt");
let apttoggle=document.getElementById("apartmenttoggle");
apt.addEventListener("mouseover",(e)=>{
    
    e.preventDefault();
 //    home.style.color="red";
    apttoggle.style.display="flex";
    apttoggle.style.flexDirection="column";
    apttoggle.style.alignItems="center";
    apttoggle.style.justifyContent="space-around";
    apttoggle.style.cursor="pointer";
 })
 apt.addEventListener("mouseout",(e)=>{
     e.preventDefault();
 apttoggle.addEventListener("mouseover",(e)=>{
         e.preventDefault();
         apttoggle.style.display="flex";
         apttoggle.style.flexDirection="column";
         apttoggle.style.alignItems="center";
         apttoggle.style.justifyContent="space-around";
         apttoggle.style.cursor="pointer";
        //  proptoggle.style.display="block";
     });
     apttoggle.addEventListener("mouseout",(e)=>{
         e.preventDefault();
         apttoggle.style.display="none";
        //  proptoggle.style.display="none";
     });
  apttoggle.style.display="none";
 
  })

  let apt1=document.getElementById("ap1");
  let apt2=document.getElementById("ap2");
  let apt3=document.getElementById("ap3");
  let apt4=document.getElementById("ap4");
  let apt5=document.getElementById("ap5");

 apt1.addEventListener("mouseover",(e)=>{
    e.preventDefault();
    apt1.style.backgroundColor="lightsalmon";
 })
 apt1.addEventListener("mouseout",(e)=>{
    e.preventDefault();
    apt1.style.backgroundColor="transparent";
 })

 apt2.addEventListener("mouseover",(e)=>{
    e.preventDefault();
    apt2.style.backgroundColor="lightsalmon";
 })
 apt2.addEventListener("mouseout",(e)=>{
    e.preventDefault();
    apt2.style.backgroundColor="transparent";
 })

 apt3.addEventListener("mouseover",(e)=>{
    e.preventDefault();
    apt3.style.backgroundColor="lightsalmon";
 })
 apt3.addEventListener("mouseout",(e)=>{
    e.preventDefault();
    apt3.style.backgroundColor="transparent";
 })
 apt4.addEventListener("mouseover",(e)=>{
    e.preventDefault();
    apt4.style.backgroundColor="lightsalmon";
 })
 apt4.addEventListener("mouseout",(e)=>{
    e.preventDefault();
    apt4.style.backgroundColor="transparent";
 })
 apt5.addEventListener("mouseover",(e)=>{
    e.preventDefault();
    apt5.style.backgroundColor="lightsalmon";
 })
 apt5.addEventListener("mouseout",(e)=>{
    e.preventDefault();
    apt5.style.backgroundColor="transparent";
 })