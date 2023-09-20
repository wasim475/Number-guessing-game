let input1 = document.querySelector('.input1')
let input2 = document.querySelector('.input2')
let check = document.querySelector('.check')
let submit = document.querySelector('.submit')
let h2 = document.querySelector('h2')
let h3 = document.querySelector('h3')
let count = document.querySelector('.count')
let err = document.querySelector('.err')
let main = document.querySelector('.main')
let user = document.querySelector('.user')
let userName = document.querySelector('.userName')
let userbtn = document.querySelector('.userbtn')
let player2name = document.querySelector('.player2name')
let player2 = document.querySelector('.player2')
let winner = document.querySelector('.winner')
let wName = document.querySelector('.wName')
let lName = document.querySelector('.lName')
let loser = document.querySelector('.loser')
let userErr = document.querySelector('.userErr')
let note = document.querySelector('.note')
let nopn = document.querySelector('.nopn')
let snp = document.querySelector('.snp')
let Sn = document.querySelector('.Sn')


userbtn.addEventListener('click', function(){
  if(!userName.value){
    userErr.innerHTML = 'Empty field.'
    userName.value = ''
    userErr.style.fontSize = '15px'
    input1.focus()
  }
  else if((userName.value-11) ){
    h2.style.display = 'block'
    userErr.innerHTML = 'Number not allow as a player name.'
    userName.value = ''
    userErr.style.fontSize = '15px'
    input1.focus()
  }
  else if(userName.value.length<3){
    userErr.innerHTML = 'Player name must be at least 3 characters long...'
    userName.value = ''
    userErr.style.fontSize = '15px'
    input1.focus()
  }
  
  else{
    user.style.display = 'none'
    main.style.display = 'block'
    userErr.style.display = 'none'
    nopn.innerHTML = userName.value.toLowerCase()
    input1.focus()

  }

})

submit.addEventListener('click',function(){
    if(!input1.value){
        h2.innerHTML = 'Field is empty.';
        h2.style.display = 'block';
        h2.style.fontSize = '15px'
        input1.focus()
      

    }
    else if((input1.value-11==0)? false:!(input1.value-11) ){
        h2.innerHTML = 'Characters not allow. Enter a number between 1 to 10. '
        h2.style.display = 'block';
        h2.style.fontSize = '15px'
        input1.value = ''
        input1.focus()
    }
    else if(!(input1.value>0 && input1.value<=10)){
        
        h2.innerHTML = 'Please enter a number between 1 to 10.'
        h2.style.display = 'block';
        h2.style.fontSize = '15px'
        input1.value = ''
        input1.focus()
    }
    else{
        input1.style.display = 'none';
        check.style.display = 'inline-block';
        submit.style.display = 'none';
        input2.style.display = 'inline'
        h3.style.display = 'block'
        h2.style.display = 'none'
        player2name.innerHTML = userName.value
        player2.style.display = 'block'
        player2name.style.color = 'white'
        note.style.display = 'none'
        input2.focus()
    }
})

let counter = 3

check.addEventListener('click',function(){
    
    if(!input2.value){
        err.innerHTML ='Empty field';
        err.style.fontSize = '15px'
        input2.value = ''
        input2.focus()
    }
    else if(input2-20== 0 ? false: !(input2.value-20)){
        err.innerHTML= 'Try to guess a number between 1 to 10.'
        input2.value = ''
        err.style.fontSize = '15px'
        input2.focus()
    }
    else if(!(input2.value>0 && input2.value<=10)){
        err.innerHTML= 'The number you have to guess is between 1 to 10.'
        input2.value = ''
        input2.focus()
        err.style.fontSize = '15px'
    }
    else if(input2.value==input1.value){
        counter --
        count.innerHTML = counter;
        winner.style.display = 'block'
        wName.innerHTML = userName.value
        winner.style.fontSize = '54px'
        h3.style.display = 'none'
        h2.style.display = 'none'
        input2.style.display = 'none'
        check.style.display = 'none'
        input2.style.display = 'none'
        player2.style.display = 'none'
        input2.value = ''
        userName.value = ''
        input2.focus()
    }
    else{
        err.style.display = 'none'
        counter --
        count.innerHTML = counter;
        input2.value = ''
        if(counter<1 || input1.value == input2.value){
            h3.style.display = 'none'
            loser.style.display = 'block'
            lName.innerHTML = userName.value
            winner.style.fontSize= '54px'
            h2.style.display = 'none'
            input2.style.display = 'none'
            check.style.display = 'none'
            err.style.display = 'none'
            input2.style.display = 'none'
            player2.style.display = 'none'
            input2.value = ''
            userName.value = ''
            input2.focus()
            snp.style.display = 'inline-block'
            Sn.innerHTML = input1.value
        }
    }
   

})