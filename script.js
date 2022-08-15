let Typenumber = "arab";

const clock = document.querySelector(".clock");
const Arabic = document.querySelector("#Arabic");
const English = document.querySelector("#English");
const option = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
};
if (window.innerWidth > 850) {
    Arabic.addEventListener("click", function () {
        Typenumber = "arab";
        option.numberingSystem = Typenumber;
        clockStart();
    });
    English.addEventListener("click", function () {
        Typenumber = "english";
        option.numberingSystem = Typenumber;
        clockStart();
    });
}
//MobliePhone actions

Arabic.addEventListener("touchend", function (e) {
    e.preventDefault();

    Typenumber = "arab";
    option.numberingSystem = Typenumber;
    clockStart();
});
English.addEventListener("touchend", function (e) {
    e.preventDefault();
    Typenumber = "english";
    option.numberingSystem = Typenumber;
    clockStart();
});

const clockStart = function () {
    const now = new Date();
    clock.textContent = new Intl.DateTimeFormat(
        navigator.language,
        option
    ).format(now);
};
clockStart();
setInterval(clockStart, 1000);
