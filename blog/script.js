var menuList = document.getElementById('menuList');
menuList.style.maxHeight = "0px";

function toggleMenu() {
  if (menuList.style.maxHeight == "0px") {
    menuList.style.maxHeight = "500px";
  }
  else {
    menuList.style.maxHeight = "0px";
  }
}

function clockTime(){
    var today = new Date();
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();

    if (hour<10) {
      document.getElementById('hours').innerHTML = "0" + hour;
    }
    else {
      document.getElementById('hours').innerHTML = hour;
    }
    if (minute<10) {
      document.getElementById('minutes').innerHTML = "0" + minute;
    }
    else {
      document.getElementById('minutes').innerHTML = minute;
    }
    if (second<10) {
      document.getElementById('seconds').innerHTML = "0" + second;
    }
    else {
      document.getElementById('seconds').innerHTML = second;
    }


}
setInterval(clockTime, 100);



const moment = new Date();

const calendarAction = () => {
  moment.setDate(1);

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    moment.getFullYear(),
    moment.getMonth() + 1,
    0
  ).getDate();


  const prevLastDay = new Date(
    moment.getFullYear(),
    moment.getMonth(),
    0
  ).getDate();


  const firstDayIndex = moment.getDay() - 1;


  const lastDayIndex = new Date(
    moment.getFullYear(),
    moment.getMonth() + 1,
    0
  ).getDay() - 1;


  const nextDays = 7 - lastDayIndex - 1;


  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.querySelector(".date h1").innerHTML = months[moment.getMonth()];

  document.querySelector(".date p").innerHTML = new Date().toDateString();

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      moment.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }
};

document.querySelector(".prev").addEventListener("click", () => {
  moment.setMonth(moment.getMonth() - 1);
  calendarAction();
});

document.querySelector(".next").addEventListener("click", () => {
  moment.setMonth(moment.getMonth() + 1);
  calendarAction();
});

calendarAction();
