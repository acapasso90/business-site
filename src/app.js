

//Sets intervel for carousel to change slides
    var myCarousel = document.querySelector('#myCarousel')
    var carousel = new bootstrap.Carousel(myCarousel, {
      interval: 1599,
      wrap: false
    })

//Adds nextSlide/previousSlide functionality to next and previous arrows on carousel
    const next = document.getElementById('next')
    const previous = document.getElementById('previous')

    function nextSlide(){$('.carousel').carousel('next')}
    function previousSlide(){$('.carousel').carousel('prev')}

    next.addEventListener("click", nextSlide)
    previous.addEventListener("click", previousSlide)


//Sets Intersection_Observer_API margin, threshold and area 
    let options = {
        root: document.querySelector('#scrollArea'),
        rootMargin: '0px',
        threshold: 0.25
      }
      
const headers = document.querySelectorAll('.headers')

//Sets Intersection_Observer_API to add headerShown classlist when scrolled to
observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0){
        entry.target.classList.add('headerShown');
        observer.unobserve(entry.target);}
        else {
            entry.target.classList.remove('headerShown');
        }
    });
  });
//Observes all the headers
    headers.forEach(h1 => { observer.observe(h1)});


// Adds display:none from hiddenInfo and removes shown class
function closePopup(){
    const hidden = document.querySelector('.shown');
    const blackout = document.querySelector('.blackout');
    const noScroll = document.querySelector('html');
    noScroll.classList.remove('popUpBody');
    hidden.classList.remove('shown');
    hidden.classList.add('hiddenInfo');
    blackout.classList.remove('blackoutShown');

    }



    

// on click closePopup
const exitButton = document.querySelectorAll('.closeButton');
exitButton.forEach(closeButton => (closeButton.addEventListener("click", closePopup)));


// Removes display:none from hiddenInfo and adds shown class
function showPopup(){
const hidden = document.getElementById('hiddenInfo1');
const blackout = document.querySelector('.blackout');
const noScroll = document.querySelector('html');
noScroll.classList.add('popUpBody');
blackout.classList.add('blackoutShown');
hidden.classList.remove('hiddenInfo');
hidden.classList.add('shown');
}

// Removes display:none from hiddenInfo and adds shown class
function showPopupTwo(){
    const hidden = document.getElementById('hiddenInfo2');
    const noScroll = document.querySelector('html');
    const blackout = document.querySelector('.blackout');
blackout.classList.add('blackoutShown');
    noScroll.classList.add('popUpBody');
    hidden.classList.remove('hiddenInfo');
    hidden.classList.add('shown');
    }

// Removes display:none from hiddenInfo and adds shown class
function showPopupThree(){
    const hidden = document.getElementById('hiddenInfo3');
    const noScroll = document.querySelector('html');
    const blackout = document.querySelector('.blackout');
blackout.classList.add('blackoutShown');
    noScroll.classList.add('popUpBody');
    hidden.classList.remove('hiddenInfo');
    hidden.classList.add('shown');
    }

    // Removes display:none from hiddenInfo and adds shown class
function showPopupFour(){
    const hidden = document.getElementById('hiddenInfo4');
    const noScroll = document.querySelector('html');
    const blackout = document.querySelector('.blackout');
blackout.classList.add('blackoutShown');
    noScroll.classList.add('popUpBody');
    hidden.classList.remove('hiddenInfo');
    hidden.classList.add('shown');
    }

    // Adds display:none from hiddenInfo and removes shown class
    function showPopupFive(){
        const hidden = document.getElementById('hiddenInfo5');
        const noScroll = document.querySelector('html');
        const blackout = document.querySelector('.blackout');
blackout.classList.add('blackoutShown');
        noScroll.classList.add('popUpBody');
        hidden.classList.remove('hiddenInfo');
        hidden.classList.add('shown');
        }
    
    // Adds display:none from hiddenInfo and removes shown class
    function showPopupSix(){
        const hidden = document.getElementById('hiddenInfo6');
        const noScroll = document.querySelector('html');
        const blackout = document.querySelector('.blackout');
blackout.classList.add('blackoutShown');
        noScroll.classList.add('popUpBody');
        hidden.classList.remove('hiddenInfo');
        hidden.classList.add('shown');
        }
    

    


// on click triggers showPopup function
const popupLink = document.querySelector('.popupLink');
popupLink.addEventListener("click", showPopup);  

// on click triggers showPopup function
const popupLinkTwo = document.querySelector('.popupLinkTwo');
popupLinkTwo.addEventListener("click", showPopupTwo);  

// on click triggers showPopup function
const popupLinkThree = document.querySelector('.popupLinkThree');
popupLinkThree.addEventListener("click", showPopupThree);  

// on click triggers showPopup function
const popupLinkFour = document.querySelector('.popupLinkFour');
popupLinkFour.addEventListener("click", showPopupFour);  

// on click triggers showPopup function
const popupLinkFive = document.querySelector('.popupLinkFive');
popupLinkFive.addEventListener("click", showPopupFive);  

// on click triggers showPopup function
const popupLinkSix = document.querySelector('.popupLinkSix');
popupLinkSix.addEventListener("click", showPopupSix);  

