// Countdown to Oct 26, 2025 at local midnight
(function(){
  const target = new Date(2025, 9, 26); // local midnight Oct 26, 2025

  const els = {
    days: document.getElementById('days'),
    hours: document.getElementById('hours'),
    minutes: document.getElementById('minutes'),
    seconds: document.getElementById('seconds')
  };

  function pad(n){return String(n).padStart(2,'0')}

  function tick(){
    const now = new Date();
    const diff = target - now;

    if(diff <= 0){
      els.days.textContent = '00';
      els.hours.textContent = '00';
      els.minutes.textContent = '00';
      els.seconds.textContent = '00';
      return;
    }

    const s = Math.floor(diff/1000);
    const days = Math.floor(s/86400);
    const hours = Math.floor((s%86400)/3600);
    const minutes = Math.floor((s%3600)/60);
    const seconds = s%60;

    els.days.textContent = pad(days);
    els.hours.textContent = pad(hours);
    els.minutes.textContent = pad(minutes);
    els.seconds.textContent = pad(seconds);
  }

  tick();
  setInterval(tick, 1000);
})();