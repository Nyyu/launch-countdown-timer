const time = new Date().toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
});
const day = new Date().toLocaleString("en-US", {
    day: "numeric",
});

console.log(time.slice(time, time.length - 3));
console.log(day);
