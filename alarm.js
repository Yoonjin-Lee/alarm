const clockDiv = document.getElementById("time")
const dateDiv = document.getElementById("date")
const clock = clockDiv.querySelector("h1")
const date = dateDiv.querySelector("h1")
const battery = document.getElementById("battery")
const ul = document.getElementById("list")
const form = document.getElementById("form")
var percent = 100

//시간 세팅
function setTime() {
    const dateInfo = new Date();
    const minutes = dateInfo.getMinutes(); 
    const hours = dateInfo.getHours(); 
    const seconds = dateInfo.getSeconds();
    clock.innerText = `${hours}:${minutes}:${seconds}`;
    if(seconds >= 55 && seconds <= 59){
        clock.style.color = "red";
    }else{
        clock.style.color = "black";
    }
}

var timeInterval = setInterval(setTime, 1000);

function startTime() {
    setTime();
    timeInterval();
}

// 날짜 세팅
function setDate() {
    const dateInfo = new Date();
    const year = dateInfo.getFullYear();
    const month = dateInfo.getMonth()+1;
    const day = dateInfo.getDate();
    date.innerText = `${year}-${month}-${day}`
}

// 배터리 세팅
function setBattery() {
    percent -= 1
    battery.innerHTML = `${percent}%`
    if(percent == 0){
        clock.style.backgroundColor = "black";
        clearInterval(batteryInterval)
        clearInterval(timeInterval)
    }
}

var batteryInterval = setInterval(setBattery, 1000)

function startBattery() {
    setBattery();
    batteryInterval();
}

// 제출 버튼 이벤트
function submitHandler(event){
    event.preventDefault(); // 이게 뭔데 반드시 필요한 거지?
    const hour = document.getElementById('hour').value;
    const min = document.getElementById("min").value;
    const sec = document.getElementById("sec").value;
    const newLi = document.createElement("li")
    newLi.innerHTML = `${hour}:${min}:${sec}`
    if(ul.childElementCount < 3){
        ul.append(newLi)
    }else{
        alert("알람은 최대 3개까지만 설정 가능합니다.")
    }
    document.getElementById('hour').value = ""
    document.getElementById('min').value = ""
    document.getElementById('sec').value = ""
}

form.addEventListener("submit", submitHandler)


startTime();
startBattery();