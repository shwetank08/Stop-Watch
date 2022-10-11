const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const reset = document.querySelector('#reset');
const time = document.querySelector('#time');

let curTime;
let sec = 0;

let hours = 0;
let min = 0;
let ms = 0;
function startTime(){

    if(ms > 99){
        ms = 0;
        sec+=1;
    }
    if(sec > 59){
        min+=1;
        sec=0;
    }
    if(min>59){
        hours += 1;
        min=0;
    }
    let secD = "";
    let minD = "";
    let hoursD = "";
    let msD = "";
    if(sec<10){
        secD = "0"+sec;
    }else{
        secD = sec;
    }
    if(ms<10){
        msD = "0"+ms;
    }else{
        msD = ms;
    }
    if(min<10){
        minD = "0"+min;
    }else{
        minD = min;
    }
    if(hours<10){
        hoursD = "0"+hours;
    }else{
        hoursD = hours;
    }
    let stopWatchTime = hoursD+":"+minD+":"+secD+":"+msD;
    time.innerHTML = stopWatchTime;
    ms++;
}

start.addEventListener('click',()=>{
   clearInterval(curTime);
   curTime = setInterval(startTime,10) 
});

stop.addEventListener('click',()=>{
    clearInterval(curTime);
});

reset.addEventListener('click',()=>{
    clearInterval(curTime);
    sec = 0;
    time.innerHTML = "00:00:00:00";
})

