window.addEventListener('load', main, );

// Functions to start on page load 
function main() {
    addEventListeners();
    initIntro();
    
    initCalendar();
}

// Gloabl variables 
const today = new Date();