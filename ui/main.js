console.log('Loaded!');
// change the text of new value
var element = document.getElementById('main-text');
element.innerHTML =' NEW VALUE';
// move the image
var img = document.getElementById('madi');
var marginLeft=0;
function  moveRight() {
    marginLeft=marginLeft+1;
    img.style.marginLeft = marginLeft + 'px';
}

img.onclick = function() {
   // img.style.marginLeft='100px';
   var interval=setInterval(moveRight, 50);
};