// defining HTML elements
const currentTimeElement = document.querySelector('#currentDay');


// defining dates
const locale = navigator.language;
const currentTime = new Date();
const currentDay = currentTime.toLocaleString(locale, {weekday: 'long'});
const currentDate = currentTime.getDate();
const currentMonth = currentTime.toLocaleString(locale, {month: 'long'})



currentTimeElement.textContent = `${currentDay} ${currentDate} ${currentMonth} `






