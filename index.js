

// function clock() {
//     d = new Date();
//     h = d.getHour();
//     m = d.getMinutes();
//     s = d.getSeconds();

//     hrotation = 30 * h + m / 2;
//     mrotation = 6 * m;
//     srotation = 6 * s;

//     hour.style.transform = `rotate(${hrotation}deg)`;
//     minute.style.transform = `rotate(${mrotation}deg)`;
//     second.style.transform = `rotate(${srotation}deg)`;

// }
var str1;
var str2;
var clr;

function fnc1() {
    str1 = document.getElementById("text1").value;
    str2 = document.getElementById("text2").value;

}

function Alarm() {
    window.alert("Alarm initiated");
    setTimeout(closeAlert(), 2000);
}
function alarmOff() {
    clr = clearTimeout();
}


setInterval(() => {
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();

    if (h == str1) {
        if (str2 == m) {
            if (s == 00) {
                setTimeout(Alarm(), 0);
            }
           
        }
    }

    console.log(d);
    hrotation = 30 * h + m / 2;
    mrotation = 6 * m;
    srotation = 6 * s;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;


}, 1000);



