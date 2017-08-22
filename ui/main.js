console.log('Loaded!');
// change the text of new value
var element = document.getElementById('main-text');
element.innerHTML =' NEW VVALUE';
// move the image
var img = document.getElementById('madi');
img.onclick = function(_) {
    img.style.margineLeft='100px';
};