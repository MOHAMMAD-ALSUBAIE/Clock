let Typenumber = "arab";

const clock = document.querySelector(".clock");
const Arabic = document.querySelector("#Arabic");
const English = document.querySelector("#English");

Arabic.addEventListener("click", function () {
    Typenumber = "arab";
});
English.addEventListener("click", function () {
    Typenumber = "english";
});

setInterval(() => {
    const now = new Date();

    clock.textContent = new Intl.DateTimeFormat(navigator.Date, {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        dayPeriod: "short",
        numberingSystem: Typenumber,
    }).format(now);
}, 1000);
