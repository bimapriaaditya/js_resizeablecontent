const button = document.querySelector('button#slider');
var salmon = document.querySelector('#left');
var royal = document.querySelector('#right');

var salmon_width = salmon.offsetWidth;
var royal_width = royal.offsetWidth;

button.addEventListener('mousedown', onMouseDown);

var startMouseX;
var startMouseY;
var startW;
var startH;

function onMouseDown(e) {
  
  e.stopPropagation();
  
  startW = button.offsetWidth;
	startH = button.offsetHeight;
  
  startMouseX = e.screenX;
	startMouseY = e.screenY;
  
  document.addEventListener("mouseup", onMouseUp);
  document.addEventListener("mousemove", onMouseMove);
}

function onMouseUp() {
  
  salmon_width = salmon.offsetWidth;
	royal_width = royal.offsetWidth;
  
	document.removeEventListener("mouseup", onMouseUp);
  document.removeEventListener("mousemove", onMouseMove);
}

function onMouseMove(e) {
	
  var w = startW + e.screenX - startMouseX - 35;
  var h = startH + e.screenY - startMouseY - 35;
  
  if (w > 0) {
  	
    let countMin = royal_width - w;
    
  	salmon.style.width = salmon_width + w + "px";
    royal.style.width = countMin + "px";
  
  } else {
  
  	let countPlus = salmon_width + w;
    
    salmon.style.width = countPlus + "px";
    royal.style.width = royal_width - w + "px";
  
  }
  
}