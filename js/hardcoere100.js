// Various javascript for www.hardcoere100.com site, 2010/10/24
//
// Copyright (c) 2010 Dirk De Bruyker
//

function collapse(obj){

  if("none" == obj.style.display){
    obj.style.display = "block";
    } else {
    obj.style.display = "none";
    }
}


function doMenu(item) {
 obj=document.getElementById(item);
 col=document.getElementById("x" + item);
 if (obj.style.display=="none") {
  obj.style.display="block";
  col.innerHTML="[-]";
 }
 else {
  obj.style.display="none";
  col.innerHTML="[+]";
 }
}