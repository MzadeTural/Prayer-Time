async function getPrayerTimes(day, month, year) {
try {
    let apiDate = await fetch(
        `https://api.aladhan.com/v1/calendar?latitude=40&longitude=49&method=2&month=${month}&year=${year}`
    );
    let datas = await apiDate.json();
    let tr = document.querySelector(".table-success");
    var today = datas
        .data[0]
        .timings
        .Imsak
        .toString();
    console.log();

    let remTime = new Date(today.replace(' (+04)', ':00'))
    console.log("hs" + remTime);
    // sound.play();
    tr.innerHTML = ` 
<tr>
<td>Imsak</td>

<td>${datas
        .data[day]
        .timings
        .Imsak}</td>
</tr>
<tr>
<td>Fajr</td>
<td>${datas
        .data[day]
        .timings
        .Fajr}</td>
</tr>
<tr>
<td>Sunrise</td>
<td>${datas
        .data[day]
        .timings
        .Sunrise}</td>
</tr>
<tr>
<td>Dhuhr</td>
<td>${datas
        .data[day]
        .timings
        .Dhuhr}</td>
</tr>
<tr>
<td>Asr</td>
<td>${datas
        .data[day]
        .timings
        .Asr}</td>
</tr>
<tr>
<td>Sunset</td>
<td>${datas
        .data[day]
        .timings
        .Sunset}</td>
</tr>
<tr>
<td>Maghrib</td>
<td>${datas
        .data[day]
        .timings
        .Maghrib}</td>
</tr>
<tr>
<td>Isha</td>
<td>${datas
        .data[day]
        .timings
        .Isha}</td>
</tr>
<tr>
<td>Midnight</td>
<td>${datas
        .data[day]
        .timings
        .Midnight}</td>
</tr>`
console
.log(datas);
} catch (error) {
    console.error("Some occured error!!")
}
       
}
getCurrentTime()
let date = document.querySelector("#Datepicker");

date.addEventListener("change", function () {
    console.log(date.value);
    const d = new Date(date.value);
    let day = d.getDate() - 1;
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    getPrayerTimes(day, month, year);
})
function getCurrentTime() {
    var today = new Date();
    let currentDay = today.getDate() - 1;
    let currentMonth = today.getMonth() + 1;
    let currentYear = today.getFullYear();
    getPrayerTimes(currentDay, currentMonth, currentYear)
}
sound = document.getElementById("alarm-sound");
let curDateHolder=document.querySelector("#CurrentDate");
function myTimer() {
    let today = new Date();
   
   const sec = String(today.getSeconds()).padStart(2, '0');
   const minut = String(today.getMinutes()).padStart(2, '0');
   const hour= String(today.getHours()).padStart(2, '0');
    
    let currentDate=(today.getDate()+":"+ (today.getMonth()+1)+":"+ today.getFullYear()+"  "+hour+":"+ minut+":"+sec)
    curDateHolder.value=currentDate;
  console.log( currentDate)
}
setInterval(myTimer, 1000);


function myFunction() {
 let myVar = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("MyTable").style.display = "block";
}
myFunction()
   