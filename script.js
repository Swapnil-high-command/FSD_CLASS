let angle = 0;

function rotate(deg) {
    angle += deg;
    document.getElementById('image').style.transform = `rotate(${angle}deg)`;
}
