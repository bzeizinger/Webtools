function displayDateTime() {
  const dateElement = document.getElementById("date");
  const timeElement = document.getElementById("time");
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const date = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  dateElement.textContent = `${date}.${month}.${year}`;
  timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(displayDateTime, 1000);
displayDateTime();
