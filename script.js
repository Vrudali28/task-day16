const div = document.getElementById('main');
function countdown(callback) {
    let count = 10;

    function startCountdown() {
        if (count >= 1) {
            div.innerHTML = (`Countdown: ${count}`);
            console.log(`Countdown: ${count}`);
            count--;
            setTimeout(startCountdown, 1000);
        } else {
            callback();
        }
    }

    startCountdown();
}

function displayMessage() {
   
    

    div.innerHTML=("Happy Independence Day!");
    console.log("Happy Independence Day!");
    
}

countdown(displayMessage);