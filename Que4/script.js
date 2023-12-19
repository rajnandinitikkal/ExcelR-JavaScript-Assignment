let sessionLength = 25;
let breakLength = 5;
let timer;
let isRunning = false;
let minutes;
let seconds;
function updateTimerDisplay(){
    document.getElementById('timer').textcontent = formatTime(minutes, seconds);
}

function formatTime(min, sec){
    return `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}
function changeSessionLength(amount){
    sessionLength += amount;
    if (sessionLength <1){
    sessionLength =1;
    }
    document.getElementById('sessionLength').textContent = sessionLength;
}

function changeBreakLength(amount){
    breakLength += amount;
    if (breakLength <1){
    breakLength =1;
    }
    document.getElementById('breakLength').textContent = breakLength;
}

function startTimer(){
    if (!isRunning){
        minutes = sessionLength;
        seconds = 0;
        updateTimerDisplay();
        timer = srtInterval(updateTimer,1000)
        isRunning = true;
    }
}

function updateTimer(){
    if (minutes === 0 && seconds === 0){
        clearInterval(timer);
        isRunning = false;
        alert('Timer completed!');
    }
    else{
        if (seconds === 0){
            minutes--;
            seconds = 59;
        } else{
            seconds--;
        }
        updateTimerDisplay();
    }
}
