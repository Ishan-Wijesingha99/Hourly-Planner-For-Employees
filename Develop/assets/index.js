// defining HTML elements
const currentTimeElement = document.querySelector('#currentDay');
const textAreaDivsList = document.querySelectorAll('.form-textarea');
const saveHereDivsList = document.querySelectorAll('.save-here');
const saveHereTextList = document.querySelectorAll('.save-here-text');




const localStorageString = localStorage.getItem('hour10');
console.log(typeof localStorageString);




textAreaDivsList.forEach(function(element, i) {
    element.value = localStorage.getItem(`hour${element.dataset.hours}`);
})







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
    } else if(Number(element.dataset.hours) == currentHours) {
        element.style.backgroundColor = '#d3d3d3'
    }

})





saveHereDivsList.forEach(function(element, i) {

    element.addEventListener('click', function(e) {
        let isExecuted = confirm('Would you like to save the text content so that when this page is exited or refreshed, the text content will persist?')
        
        if(isExecuted) {
            let localStorageString = localStorage.setItem(`hour${textAreaDivsList[i].dataset.hours}`, `${textAreaDivsList[i].value}`);
        }

    })

})









