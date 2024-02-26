window.addEventListener("scroll", function() {
    if (window.innerWidth >= 1030 && window.innerWidth <= 1550) 
    {
        let header = document.getElementById("nav1");
        let imgchg=this.document.getElementById("imgchg");
        if (window.scrollY > 40) {
            header.style.backgroundColor="white";
            header.style.color="black";
            imgchg.setAttribute("src","../assets/homex-removebg-preview.png");
        } else {
            header.style.backgroundColor="black";
            header.style.color="white";
            imgchg.setAttribute("src","../assets/svg.png");
        }
    }
});

let home=document.getElementById("home");
let listing=document.getElementById("listing");
let property=document.getElementById("property");
let blog=document.getElementById("blog");
let pages=document.getElementById("pages");
let hometoggle=document.getElementById("hometoggle");
let listtoggle=document.getElementById("listtoggle");
let proptoggle=document.getElementById("proptoggle");
let blogtoggle=document.getElementById("blogtoggle");
let pagetoggle=document.getElementById("pagetoggle");
let listhead=document.getElementById("listheading");
let agenttoggle=document.getElementById("agenttoggle");
let dashboardtoggle=document.getElementById("dashboardtoggle");
let mapstyletoggle=document.getElementById("mapstyletoggle");
let singlestyletoggle=document.getElementById("singlestyletoggle");
home.addEventListener("mouseover",(e)=>{
    
   e.preventDefault();
//    home.style.color="red";
   hometoggle.style.display="block";
})
home.addEventListener("mouseout",(e)=>{
    e.preventDefault();
hometoggle.addEventListener("mouseover",(e)=>{
        e.preventDefault();
        hometoggle.style.display="block";
    });
    hometoggle.addEventListener("mouseout",(e)=>{
        e.preventDefault();
        hometoggle.style.display="none";
    });
 hometoggle.style.display="none";

 })
 listing.addEventListener("mouseover",(e)=>{
    
    e.preventDefault();
    // listing.style.color="red";
    listtoggle.style.display="block";
 })
 listing.addEventListener("mouseout",(e)=>{
     e.preventDefault();
 listtoggle.addEventListener("mouseover",(e)=>{
         e.preventDefault();
         listtoggle.style.display="block";
         listhead.style.textDecoration="underline";
     });
     listtoggle.addEventListener("mouseout",(e)=>{
         e.preventDefault();
         listtoggle.style.display="none";
     });
  listtoggle.style.display="none";
 
  })
  property.addEventListener("mouseover",(e)=>{
    
    e.preventDefault();
 //    home.style.color="red";
    proptoggle.style.display="block";
 })
 property.addEventListener("mouseout",(e)=>{
     e.preventDefault();
 proptoggle.addEventListener("mouseover",(e)=>{
         e.preventDefault();
         proptoggle.style.display="block";
     });
     proptoggle.addEventListener("mouseout",(e)=>{
         e.preventDefault();
         proptoggle.style.display="none";
     });
  proptoggle.style.display="none";
 
  })
  blog.addEventListener("mouseover",(e)=>{
    
    e.preventDefault();
 //    home.style.color="red";
    blogtoggle.style.display="block";
 })
 blog.addEventListener("mouseout",(e)=>{
     e.preventDefault();
 blogtoggle.addEventListener("mouseover",(e)=>{
         e.preventDefault();
         blogtoggle.style.display="block";
     });
     blogtoggle.addEventListener("mouseout",(e)=>{
         e.preventDefault();
         blogtoggle.style.display="none";
     });
  blogtoggle.style.display="none";
 
  })
  pages.addEventListener("mouseover",(e)=>{
    
    e.preventDefault();
 //    home.style.color="red";
    pagetoggle.style.display="block";
 })
 pages.addEventListener("mouseout",(e)=>{
     e.preventDefault();
 pagetoggle.addEventListener("mouseover",(e)=>{
         e.preventDefault();
         pagetoggle.style.display="block";
     });
     pagetoggle.addEventListener("mouseout",(e)=>{
         e.preventDefault();
         pagetoggle.style.display="none";
     });
  pagetoggle.style.display="none";
 
  })

  agent.addEventListener("mouseover",(e)=>{
    
    e.preventDefault();
 //    home.style.color="red";
    agenttoggle.style.display="block";
    agent.style.backgroundColor="aqua";
 })
 agent.addEventListener("mouseout",(e)=>{
     e.preventDefault();
 agenttoggle.addEventListener("mouseover",(e)=>{
         e.preventDefault();
         agenttoggle.style.display="block";
         proptoggle.style.display="block";
     });
     agenttoggle.addEventListener("mouseout",(e)=>{
         e.preventDefault();
         agenttoggle.style.display="none";
         proptoggle.style.display="none";
     });
  agenttoggle.style.display="none";
  agent.style.backgroundColor="transparent";
 
  })
  dashboard.addEventListener("mouseover",(e)=>{
    
    e.preventDefault();
 //    home.style.color="red";
    dashboardtoggle.style.display="block";
    dashboard.style.backgroundColor="aqua";

 })
 dashboard.addEventListener("mouseout",(e)=>{
     e.preventDefault();
 dashboardtoggle.addEventListener("mouseover",(e)=>{
         e.preventDefault();
         dashboardtoggle.style.display="block";
         proptoggle.style.display="block";
         

     });
     dashboardtoggle.addEventListener("mouseout",(e)=>{
         e.preventDefault();
         dashboardtoggle.style.display="none";
         proptoggle.style.display="none";
     });
  dashboardtoggle.style.display="none";
  dashboard.style.backgroundColor="transparent";

  })

  mapstyle.addEventListener("mouseover",(e)=>{
    
    e.preventDefault();
 //    home.style.color="red";
    mapstyletoggle.style.display="block";
    mapstyle.style.backgroundColor="aqua";

 })
 mapstyle.addEventListener("mouseout",(e)=>{
     e.preventDefault();
 mapstyletoggle.addEventListener("mouseover",(e)=>{
         e.preventDefault();
         mapstyletoggle.style.display="block";
         proptoggle.style.display="block";
     });
     mapstyletoggle.addEventListener("mouseout",(e)=>{
         e.preventDefault();
         mapstyletoggle.style.display="none";
         proptoggle.style.display="none";
     });
  mapstyletoggle.style.display="none";
  mapstyle.style.backgroundColor="transparent";

  })

  singlestyle.addEventListener("mouseover",(e)=>{
    
    e.preventDefault();
 //    home.style.color="red";
    singlestyletoggle.style.display="block";
    singlestyle.style.backgroundColor="aqua";

 })
 singlestyle.addEventListener("mouseout",(e)=>{
     e.preventDefault();
 singlestyletoggle.addEventListener("mouseover",(e)=>{
         e.preventDefault();
         singlestyletoggle.style.display="block";
         proptoggle.style.display="block";
     });
     singlestyletoggle.addEventListener("mouseout",(e)=>{
         e.preventDefault();
         singlestyletoggle.style.display="none";
         proptoggle.style.display="none";
     });
  singlestyletoggle.style.display="none";
  singlestyle.style.backgroundColor="transparent";

  })
