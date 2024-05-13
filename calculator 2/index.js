document.querySelectorAll('#number').forEach (button => {
    button.addEventListener('click', function (){
        const output = document.getElementById('output');
        if ( output.textContent === "0"){
            output.textContent = this.value;

        }else{
            output.textContent += this.value;
        }
       
        
    });
});

document.querySelectorAll('#operator').forEach (operator => {
operator.addEventListener('click', function(){
    const output = document.getElementById('output');
    output.textContent += this.textContent;
})
})
 document.getElementById('clear').addEventListener('click', function (){
    const output = document.getElementById('output');
    output.textContent = '0';
    
 })
document.getElementById('equal').addEventListener('click', function (){
    const output = document.getElementById('output');
    output.textContent = eval(output.textContent); 
})