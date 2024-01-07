const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

let countdownDate = new Date("2023-12-25T00:00").getTime();

function updateTime() {
    let now = new Date().getTime();

    let difference = countdownDate - now;

    if (difference <= 0) {
        clearInterval(updateTime);

        // Countdown is over, display Merry Christmas message
        document.getElementById("main").innerHTML = `
            <h1> Merry Christmas from NexMarket! 🎄✨🎅🎁 </h1>
            <h5>Embrace the festive joy with us. 🌟 Join our WhatsApp group for exclusive holiday deals and a community of fellow shoppers. Let's celebrate the season of giving together! Click here to join: <a href="https://chat.whatsapp.com/JKtkIuZUhbuJV1qJL7P9J1">Group Link</a>🤶🎉 
            </h5>
            <br>
            <br>
            <br>
            <h5>Explore the creator's website: <a href="https://ogheneminestaticwebsite.netlify.app">Oghenemine Omonefe</a>🤶🎉 
            </h5>
        `;
    } else {
        let daysValue = Math.floor(difference / (1000 * 60 * 60 * 24));
        let hoursValue = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutesValue = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        let secondsValue = Math.floor((difference % (1000 * 60)) / 1000);

        days.innerHTML = daysValue < 10 ? "0" + daysValue : daysValue;
        hours.innerHTML = hoursValue < 10 ? "0" + hoursValue : hoursValue;
        minutes.innerHTML = minutesValue < 10 ? "0" + minutesValue : minutesValue;
        seconds.innerHTML = secondsValue < 10 ? "0" + secondsValue : secondsValue;
    }
}

let updateInterval = setInterval(updateTime, 1000);
