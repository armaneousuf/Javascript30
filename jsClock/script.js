const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDeg = (seconds / 60) * 360;
  secondHand.style.transform = `translateX(-50%) rotate(${secondsDeg}deg)`;

  const minutes = now.getMinutes() + seconds / 60;
  const minutesDeg = (minutes / 60) * 360;
  minuteHand.style.transform = `translateX(-50%) rotate(${minutesDeg}deg)`;
  const hours = (now.getHours() % 12) + minutes / 60;
  const hoursDeg = (hours / 12) * 360;
  hourHand.style.transform = `translateX(-50%) rotate(${hoursDeg}deg)`;
}

setInterval(setDate, 1000);
