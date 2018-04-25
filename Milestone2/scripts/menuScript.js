/*
below are the names of the three divs in my html
location
media
about
*/



/* Takes in a div and expands whichever menu item that div relates to*/
function expandMenu(item){
  document.querySelector("."+ item+" .Content").style.display ="grid";
}



/*
expandMenu("about");
expandMenu("location");
expandMenu("media");
*/
