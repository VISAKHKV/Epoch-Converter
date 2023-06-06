let months = [
  "january",
  "Feruary",
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

function logSubmit(event) {
  console.log("submitted");

  const time = document.getElementById("time").value;
  const turn = document.querySelector("#turn").checked;

  let date;
  if (turn == true) {
    date = new Date((parseInt(time) + 19800) * 1000);
  } else {
    date = new Date(parseInt(time) * 1000);
  }

  let dateStr =
    date.getDate() +
    " - " +
    months[date.getMonth()] +
    " - " +
    date.getFullYear();

  let timeStr =
    date.getHours() +
    " hrs " +
    date.getMinutes() +
    " mins " +
    date.getSeconds() +
    " secs";
  console.log("date : ", dateStr);

  let display = document.getElementById("display");
  if (time == "") {
    display.innerHTML = "Give a valid input...";
  } else {
    display.innerHTML = "Date : " + dateStr + "<br />" + "Time : " + timeStr;
  }

  event.preventDefault();
}

const form = document.getElementById("real_time");

form.addEventListener("submit", (event) => {
  // handle the form data
  logSubmit(event);
});
