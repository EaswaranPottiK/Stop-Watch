const timerTag = document.getElementById('timer');
const startBtnTag = document.getElementById('startBtn');
const stopBtnTag = document.getElementById('stopBtn');
const resetBtnTag = document.getElementById('resetBtn');
const lap = document.getElementById('lap');

startBtnTag.addEventListener('click', startTimer);
stopBtnTag.addEventListener('click', stopTimer);
resetBtnTag.addEventListener('click', resetTimer);
lap.addEventListener('click', addLap);

let intervalId;
let startTime = 0;
let watchTime = 0;



function startTimer() {
    startTime = Date.now() - watchTime; 
    console.log(startTime)

    intervalId = setInterval(() => {
        watchTime = Date.now() - startTime;
        // console.log(watchTime);

        showTimeInFormate(watchTime);
    }, 100);
}

function showTimeInFormate(watchTime) {

    let milisecond = "0"+ watchTime%10;

    let second =  "0"+ Math.floor(watchTime / 1000) % 60;

    let minimutes =  "0"+ Math.floor(Math.floor(watchTime / 1000) / 60) % 60;

    let hrs =  "0"+ Math.floor(Math.floor(Math.floor(watchTime / 1000) / 60) / 60);

    timerTag.textContent = hrs + ':' + minimutes + ':' + second + ':' + milisecond;
    
}

function stopTimer() {
    clearInterval(intervalId);
}

function resetTimer() {
    clearInterval(intervalId);
    startTime = 0;
    watchTime = 0;
    showTimeInFormate(watchTime)
    document.getElementById('lapPrinter').textContent = 'Lap : 00:00:00'
}

function addLap(){
    let milisecond = "0"+ watchTime%10;

    let second =  "0"+ Math.floor(watchTime / 1000) % 60;

    let minimutes =  "0"+ Math.floor(Math.floor(watchTime / 1000) / 60) % 60;

    let hrs =  "0"+ Math.floor(Math.floor(Math.floor(watchTime / 1000) / 60) / 60);

    document.getElementById('lapPrinter').textContent = 'Lap : '+hrs + ':' + minimutes + ':' + second + ':' + milisecond;
}
