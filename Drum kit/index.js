
document.querySelector('p.key1').addEventListener('click', function(){
   var audio = new Audio('/sounds/tom-1.mp3');
       audio.play();
})

document.querySelector('p.key2').addEventListener('click', function(){
    var audio = new Audio('/sounds/tom-2.mp3');
        audio.play();
})
document.querySelector('p.key3').addEventListener('click', function(){
    var audio = new Audio('/sounds/tom-3.mp3');
        audio.play();
})
document.querySelector('p.key4').addEventListener('click', function(){
    var audio = new Audio('/sounds/tom-4.mp3');
        audio.play();
})
document.querySelector('p.key5').addEventListener('click', function(){
    var audio = new Audio('/sounds/crash.mp3');
        audio.play();
})
document.querySelector('p.key6').addEventListener('click', function(){
    var audio = new Audio('/sounds/snare.mp3');
        audio.play();
})
document.querySelector('p.key7').addEventListener('click', function(){
    var audio = new Audio('/sounds/kick-bass.mp3');
        audio.play();
})


document.addEventListener("keydown",function (event){
   switch (event.key) {
    case 'a':
        var audio = new Audio('/sounds/tom-1.mp3');
       audio.play();
        
        break;
        
        case 'd':
        var audio = new Audio('/sounds/tom-2.mp3');
       audio.play();
        
        break;

        case 's':
        var audio = new Audio('/sounds/tom-3.mp3');
       audio.play();
        
        break;

        case 'f':
        var audio = new Audio('/sounds/tom-4.mp3');
       audio.play();
        
        break;
        case 'g':
        var audio = new Audio('/sounds/crash.mp3');
       audio.play();
        
        break;

        case 'h':
        var audio = new Audio('/sounds/snare.mp3');
       audio.play();
        
        break;
        case 'k':
        var audio = new Audio('/sounds/kick-bass.mp3');
       audio.play();
        
        break;
        
        
        
        
        
        
   
    default:
        break;
   }



});



