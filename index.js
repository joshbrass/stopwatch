//global variables
const time_el = document.querySelector('.watch .time')
const start_btn = document.getElementById('start');
const stop_btn = document.getElementById('stop');
const reset_btn = document.getElementById('reset');


let seconds = 0;
let interval= null;

//event listeners
start_btn.addEventListener('click', start);


//update the timer
function timer(){
  seconds++;

 // format our time
 let hrs = Math.floor(seconds / 3600);
 let min = Math.floor(seconds - (hrs * 3600) / 60);
 let secs = seconds % 60;

 let (secs < 10)secs = '0' + secs;
 let (min < 10)secs = '0' + secs;
 let (hrs < 10)secs = '0' + secs;

 
 time_el.innerText = '${hrs}:${mins}:${secs}';
}
 
function start(){
  if (interval){
    return
  }
  
  interval = setinterval(timer, 1000);
}
