const text = "A Frontend Developer";
const animate =document.getElementById('text');
let index =0;


function animateText(){
animate.textContent = text.slice(0,index);
index++;
    if (index > text.length){
        index = 0;

    }
    setTimeout(animateText,100);
}
animateText();
-


document.addEventListener('DOMContentLoaded', function(){
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.navbar .menu');

    hamburger.addEventListener('click', function(){
        menu.classList.toggle('show');
    });
});
