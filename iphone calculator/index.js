document.querySelectorAll('p.number').forEach(paragraph => {
    paragraph.addEventListener('click', function (){
        const output = document.querySelector('.output');
        if (output.textContent ==='0'){
            output.textContent = this.textContent;

        }else {
            output.textContent += this.textContent;


        }
        
    });
});

    document.querySelector('.clear').addEventListener('click', function (){

        const output = document.querySelector('.output');
        output.textContent = '0';

});
document.querySelectorAll('p.operator').forEach(paragragh => {
    paragragh.addEventListener('click', function (){
        const output = document.querySelector('.output');
        output.textContent += this.textContent;

    })
})
document.querySelector('.equal').addEventListener('click', function (){
    const output = document.querySelector('.output');
    output.textContent = eval(output.textContent);
    
});