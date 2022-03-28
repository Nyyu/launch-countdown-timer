const days = document.querySelector("#days span");
const hours = document.querySelector("#hours span");
const minutes = document.querySelector("#minutes span");
const seconds = document.querySelector("#seconds span");
const base = Date.parse("6/30/2022, 3:38:35 AM");
let day, hour, minute, second, now, diff;

function updateTime() {
    now = new Date().toLocaleString("en-US");
    diff = base - Date.parse(now);

    day = String(Math.floor(diff / (1000 * 60 * 60 * 24)));
    hour = String(
        Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    minute = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)));
    second = String(Math.floor((diff % (1000 * 60)) / 1000));

    days.innerHTML = day.length === 1 ? "0" + day : day;
    hours.innerHTML = hour.length === 1 ? "0" + hour : hour;
    minutes.innerHTML = minute.length === 1 ? "0" + minute : minute;
    seconds.innerHTML = second.length === 1 ? "0" + second : second;
}

function loop() {
    setTimeout(() => {
        updateTime();
        if (!(new Date().toLocaleString("en-US") > base)) {
            loop();
        }
    }, 1000);
}

loop();
