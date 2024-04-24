let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");
let ampm = document.querySelector(".ampm");

const updateTime = ()=> {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampmEl = "AM";
    if(h > 12){
        h = h-12;
        ampmEl = "PM"
    }

    h = h < 10 ? "0" + h : h;
    m = h < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hour.innerText = h;
    minute.innerText= m;
    second.innerText = s;
    ampm.innerText = ampmEl;
}

setInterval(updateTime,1000);