/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
let containerCount = document.querySelectorAll('section[data-nav]');
let unorderedList = document.getElementById('navbar__list');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function addSectionToNav(item) {
    let lineText = item.getAttribute('data-nav');
    let newLiComponent = document.createElement("li");
    newLiComponent.setAttribute("class", "nav-list-item");
    newLiComponent.innerHTML = lineText;

    addOnClickEvent(newLiComponent, item)

    unorderedList.appendChild(newLiComponent);
}

function isInView(item) {
    let bounding = item.getBoundingClientRect();

    console.log(bounding.top, bounding.bottom, item.getAttribute('data-nav'));
    return (
        bounding.top >= 30 && bounding.bottom <= window.innerHeight
    );
};

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
for (const item of containerCount) {
    addSectionToNav(item);
}

// Add class 'active' to section when near top of viewport
window.addEventListener('scroll', function () {
    for (const item of containerCount) {
        if (isInView(item)) {
            item.classList.add('your-active-class')
        }
        else {
            item.classList.remove('your-active-class')
        }
    }
})

// Scroll to anchor ID using scrollTO event

function addOnClickEvent(liElement, section) {
    liElement.addEventListener('click', function (e) {
        e.preventDefault();
        section.scrollIntoView();
    })
}

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
