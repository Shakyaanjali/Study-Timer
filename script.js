// variables

let workTittle = document.getElementById('study');
let breakTittle = document.getElementById('break');

let studyTime = 30;
let breakTime = 10;

let seconds = "00"

// display
window.onload = () => {
    document.getElementById('minutes').innerHTML = studyTime;
    document.getElementById('seconds').innerHTML = seconds;

    workTittle.classList.add('active');
}

// start timer
function start() {
    // change button
    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "block";

    // change the time
    seconds = 59;

    let studyMinutes = studyTime - 1;
    let breakMinutes = breakTime - 1;

    breakCount = 0;

    // countdown
    let timerFunction = () => {
        //change the display
        document.getElementById('minutes').innerHTML = studyMinutes;
        document.getElementById('seconds').innerHTML = seconds;

        // start
        seconds = seconds - 1;

        if(seconds === 0) {
            workMinutes = workMinutes - 1;
            if(workMinutes === -1 ){
                if(breakCount % 2 === 0) {
                    // start break
                    workMinutes = breakMinutes;
                    breakCount++

                    // change the tab
                    workTittle.classList.remove('active');
                    breakTittle.classList.add('active');
                }else {
                    // continue study
                    studyMinutes = studyTime;
                    breakCount++

                    // change the tab
                    breakTittle.classList.remove('active');
                    workTittle.classList.add('active');
                }
            }
            seconds = 59;
        }
    }

    // start countdown
    setInterval(timerFunction, 1000); // 1000 = 1s
}