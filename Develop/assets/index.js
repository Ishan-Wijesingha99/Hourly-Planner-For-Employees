// defining HTML elements
const currentTimeElement = document.querySelector('#currentDay');
const textAreaDivsList = document.querySelectorAll('.form-textarea');



// defining dates
const locale = navigator.language;
const currentTime = new Date();
const currentDay = currentTime.toLocaleString(locale, {weekday: 'long'});
const currentDate = currentTime.getDate();
const currentMonth = currentTime.toLocaleString(locale, {month: 'long'})

const currentHours = currentTime.getHours();




currentTimeElement.textContent = `${currentDay} ${currentDate} ${currentMonth} `




textAreaDivsList.forEach(function(element, i) {

    if(Number(element.dataset.hours) < currentHours) {
        element.style.backgroundColor = 'red';
    }




})



