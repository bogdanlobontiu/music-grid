//variabile sa tina datele pentru cronometru
console.log("alooo");
let seconds = 0;
let minutes = 0;
let hours = 0;
//variabile de afisat
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

let interval = null;

//var pentru status cronometru
let status = "oprit";
function cronometru() {
    seconds++;
    if (seconds / 60 == 1) {
        seconds = 0;
        minutes++;
        if (minutes / 60 == 1) {
            minutes = 0;
            hours++;
        }

    }
    if (seconds < 10) {
        displaySeconds = "0" + seconds.toString();
    }
    else {
        displaySeconds = seconds;
    }

    if (minutes < 10) {
        displayMinutes = "0" + minutes.toString();
    }
    else {
        displayMinutes = minutes;
    }

    if (hours < 10) {
        displayHours = "0" + hours.toString();
    }
    else {
        displayHours = hours;
    }

    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
}

function startStop() {
    if (status === "oprit") {
        interval = window.setInterval(cronometru, 1000);
        document.getElementById("startStop").innerHTML = "Stop";
        status = "pornit";
    }
    else {
        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        status = "oprit"
    }
}
function reset() {

    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("startStop").innerHTML = "Start"
}
