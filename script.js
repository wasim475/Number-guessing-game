let input1 = document.querySelector('.input1')
let input2 = document.querySelector('.input2')
let check = document.querySelector('.check')
let submit = document.querySelector('.submit')
let h2 = document.querySelector('h2')
let h3 = document.querySelector('h3')
let count = document.querySelector('.count')
let err = document.querySelector('.err')

submit.addEventListener('click',function(){
    if(!input1.value){
        h2.innerHTML = 'Field is empty';
        h2.style.display = 'block';
    }
    else if((input1.value-11==0)? false:!(input1.value-11) ){
        h2.innerHTML = 'String not allow'
        h2.style.display = 'block';
    }
    else if(!(input1.value>0 && input1.value<=10)){
        
        h2.innerHTML = 'Please inter a number between 1 to 10.'
        h2.style.display = 'block';
    }
    else{
        input1.style.display = 'none';
        check.style.display = 'inline-block';
        submit.style.display = 'none';
        input2.style.display = 'inline'
        h3.style.display = 'block'
        h2.style.display = 'none'


    }
})

let counter = 3

check.addEventListener('click',function(){
    
    if(!input2.value){
        err.innerHTML ='Empty field';
        input2.value = ''
    }
    else if(input2-20== 0 ? false: !(input2.value-20)){
        err.innerHTML= 'String not allow'
        input2.value = ''
    }
    else if(!(input2.value>0 && input2.value<=10)){
        err.innerHTML= 'please enter a value between 1 to 10'
        input2.value = ''
    }
    else if(input2.value==input1.value){
        counter --
        count.innerHTML = counter;
        err.innerHTML = 'Congrats! You win.'
        err.style.fontSize = '54px'
        h3.style.display = 'none'
        input2.style.display = 'none'
        check.style.display = 'none'
    }
    else{
        err.style.display = 'none'
        counter --
        count.innerHTML = counter;
        input2.value = ''
        if(counter<1 || input1.value == input2.value){
            h3.style.display = 'none'
            h2.innerHTML = 'Ops! You lose'
            h2.style.fontSize= '54px'
            h2.style.display = 'block'
            input2.style.display = 'none'
            check.style.display = 'none'
            err.style.display = 'none'
            
        }
    }
   

})