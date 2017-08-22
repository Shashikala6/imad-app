console.log('Loaded!');
// change the text of new value
var element = document.getElementById('main-text');
element.innerHTML =' NEW VALUE';
// move the image
var img = document.getElementById('madi');
img.onclick = function() {
    img.style.margineLeft='100px';
};