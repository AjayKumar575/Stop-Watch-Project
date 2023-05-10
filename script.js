const start=document.querySelector('.start');
const stop=document.querySelector('.stop');
const reset=document.querySelector('.reset');

let hrs=min=sec=ms=0,start_timer;

start.addEventListener(('click'),()=>{

    start.classList.add('start-active');
    stop.classList.remove('stop-active');

    start_timer=setInterval(()=>{
     ms++;
     if(ms==100){
        sec++;
        ms=0;
     } 
     if(sec==60){
        min++;
        sec=0;
     } 
    if(min==60){
        hrs++;
        min=0;
     }
     
    update();
    },10)
});

stop.addEventListener(('click'),()=>{
    clearInterval(start_timer);

    start.classList.remove('start-active');
    stop.classList.add('stop-active');
});

reset.addEventListener(('click'),()=>{
    hrs=min=sec=ms=0;
    clearInterval(start_timer); 
    update();
    start.classList.remove('start-active');
    stop.classList.remove('stop-active');
});

function update(){
    
    ahrs=hrs<10?'0'+hrs:hrs;
    amin=min<10?'0'+min:min;
    asec=sec<10?'0'+sec:sec;
    ams=ms<10?'0'+ms:ms;
    
    document.querySelector('.hrs').innerText=ahrs;
    document.querySelector('.min').innerText=amin;
    document.querySelector('.sec').innerText=asec;
    document.querySelector('.ms').innerText=ams;
};