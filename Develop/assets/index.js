// defining HTML elements
const currentTimeElement = document.querySelector('#currentDay');
const textAreaDivsList = document.querySelectorAll('.form-textarea');
const saveHereDivsList = document.querySelectorAll('.save-here');
const saveHereTextList = document.querySelectorAll('.save-here-text');
const deleteBtn = document.querySelector('#delete-btn');



// defining dates
const locale = navigator.language;
const currentTime = new Date();
const currentDay = currentTime.toLocaleString(locale, {weekday: 'long'});
const currentDate = currentTime.getDate();
const currentMonth = currentTime.toLocaleString(locale, {month: 'long'})

const currentHours = currentTime.getHours();



// When the page loads, set the textarea values to whatever the localStorage values are
textAreaDivsList.forEach(function(element, i) {
    element.value = localStorage.getItem(`hour${element.dataset.hours}`);
})



// set the current date at the top of the page
currentTimeElement.textContent = `${currentDay} ${currentDate} ${currentMonth}`;



// compare the data-hours value given to each row element in HTML, to the currentHours variable. Do this to determine which textareas should be red, which should be grey, and which should be green
textAreaDivsList.forEach(function(element, i) {

    if(Number(element.dataset.hours) < currentHours) {
        element.style.backgroundColor = 'red';
    } else if(Number(element.dataset.hours) == currentHours) {
        element.style.backgroundColor = '#d3d3d3'
    }

})



// loop through all the "save here" elements and add an event listener to each one of them
// we are utilising event delegation here as well, clicking the "Save here" text will also trigger an event in the "save here" div element
saveHereDivsList.forEach(function(element, i) {

    element.addEventListener('click', function(e) {
        // ask user if they're sure they want to save the textarea value
        let isExecuted = confirm('Would you like to save the text content so that when this page is exited or refreshed, the text content will persist?')
        
        // save textarea value to local storage
        if(isExecuted) {
            let localStorageString = localStorage.setItem(`hour${textAreaDivsList[i].dataset.hours}`, `${textAreaDivsList[i].value}`);
        }

    })

})



// adding functionality to the delete button, so that when it is clicked, all values in local storage are cleared
deleteBtn.addEventListener('click', function() {
    // ask user if they're sure they want to delete all locally stored values
    let confirmMessage = confirm('Are you sure you want to delete all saved text content?');
    
    // delete locally stored values and alert user that it's been done
    if(confirmMessage) {
        localStorage.clear();
        alert('All saved text content has been deleted');
    }
})









