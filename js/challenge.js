let counter = document.getElementById('counter');
const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const heartButton = document.getElementById('heart');
const pauseButton = document.getElementById('pause');
const input = document.querySelector('input');
const submitButton = document.getElementById('submit');


function incrementCounter(){
    return counter.textContent++;
}

function decrementCounter(){
    return counter.textContent--;
}

const timer = setInterval(incrementCounter, 1000);


minusButton.addEventListener('click', decrementCounter)

plusButton.addEventListener('click', incrementCounter)

heartButton.addEventListener('click', function(){
    const heartNumber = document.createElement('div');
    heartNumber.textContent = counter.textContent
    document.querySelector('h1').appendChild(heartNumber);
})

function disableButton (){
    minusButton.disabled = true;
    plusButton.disabled = true;
    heartButton.disabled = true;
}

function resumeButton(){
    minusButton.disabled = false;
    plusButton.disabled = false;
    heartButton.disabled = false;
}


function pause(){
    clearInterval(timer);
    disableButton();
    pauseButton.textContent = 'resume';
    pauseButton.removeEventListener('click', pause);
    pauseButton.addEventListener('click', resume);
}

pauseButton.addEventListener('click', pause);

function resume(){
    setInterval(incrementCounter, 1000);
    resumeButton();
    pauseButton.textContent = 'pause';
    pauseButton.removeEventListener('click', resume);
    pauseButton.addEventListener('click', pause);
    timer = setInterval(incrementCounter, 1000);
}

function displayText(e){
    e.preventDefault();
    const text = document.createElement('div');
    text.textContent = input.value;
    document.querySelector('h1').appendChild(text);
}

pauseButton.addEventListener('click', pause);
submitButton.addEventListener('click', displayText);



  
 