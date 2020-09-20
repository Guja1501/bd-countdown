// Date.now() milliseconds from 1970.01.01 to now

function dateDiff(a, b) {
  const diff = Math.floor(Math.abs(a - b) / 1000);

  const seconds = diff % 60;
  const minutes = Math.floor(diff / 60) % 60;
  const hours = Math.floor(diff / 3600) % 24;
  const days = Math.floor(diff / 3600 / 24);

  return {
    seconds: seconds,
    minutes: minutes,
    hours: hours,
    days: days
  };
}

setInterval(function(newYear) {
  const diff = dateDiff(newYear, Date.now());
  let result = "";

  if (diff.days > 0) {
    result = result + diff.days + " days ";
  }

  if (diff.hours > 0) {
    result = result + diff.hours + " hours ";
  }

  if (diff.minutes > 0) {
    result = result + diff.minutes.toString().padStart(2, 0) + " minutes ";
  }

  if (diff.seconds > 0) {
    result = result + diff.seconds.toString().padStart(2, 0) + " seconds";
  }

  console.clear();
  console.log(result);
}, 1000, new Date("1 jan 2021").getTime());

if (typeof window !== "undefined") {
  const showDiffInWindow = function(newYear) {
    const diff = dateDiff(newYear, Date.now());

    document.querySelector("#date-container .days").textContent = diff.days;
    document.querySelector("#date-container .hours").textContent = diff.hours;
    document.querySelector("#date-container .minutes").textContent =
      diff.minutes.toString().padStart(2, 0);
    document.querySelector("#date-container .seconds").textContent =
      diff.seconds.toString().padStart(2, 0);
  };
  const newYear = new Date("1 jan 2021").getTime();

  showDiffInWindow(newYear);
  setInterval(showDiffInWindow, 1000, newYear);
}
