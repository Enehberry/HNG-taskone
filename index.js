function updateTime() {
    const currentTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const utcTime = `${hours}:${minutes}:${seconds}`;
    currentTimeElement.textContent = utcTime;
  }
  
  updateTime();
  setInterval(updateTime, 1000);
  