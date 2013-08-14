/* =============================================================

    Drop v2.1
    Simple, mobile-friendly dropdown menus by Chris Ferdinandi.
    http://gomakethings.com

    Free to use under the MIT License.
    http://gomakethings.com/mit/
    
 * ============================================================= */


/* =============================================================
    MICRO-FRAMEWORK
    Simple vanilla JavaScript functions to handle common tasks.
 * ============================================================= */

// Check if an element has a class
var hasClass = function (elem, className) {
    return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}

// Add a class to an element
var addClass = function (elem, className) {
    if (!hasClass(elem, className)) {
        elem.className += ' ' + className;
    }
}

// Remove a class from an element
var removeClass = function (elem, className) {
    var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}

// Toggle a class on an element
var toggleClass = function (elem, className) {
    if ( hasClass(elem, className) ) {
        removeClass(elem, className);
    }
    else {
        addClass(elem, className);
    }
}

// Return sibling elements
var getSiblings = function (elem) {
    var siblings = [];
    var sibling = elem.parentNode.firstChild;
    var skipMe = elem;
    for ( ; sibling; sibling = sibling.nextSibling ) 
       if ( sibling.nodeType == 1 && sibling != elem )
          siblings.push( sibling );        
    return siblings;
}





/* =============================================================
    DROP FUNCTIONS
    Toggle the navigation menu.
 * ============================================================= */

// Feature Test
if ( 'querySelector' in document && 'addEventListener' in window ) {

    // Function to toggle dropdowns
    var toggleDrop = function (toggle) {
    
        // Define the dropdown menu content, parent element, and siblings
        var toggleMenu = toggle.nextElementSibling;
        var toggleParent = toggle.parentNode;
        var toggleSiblings = getSiblings(toggleParent);

        // Add/remove '.active' class from dropdown item
        toggleClass(toggle, 'active');
        toggleClass(toggleMenu, 'active');
        toggleClass(toggleParent, 'active');

        // Remove '.active' class from all sibling elements
        [].forEach.call(toggleSiblings, function (sibling) {
            var siblingContent = sibling.children;
            removeClass(sibling, 'active');

            // Remove '.active' class from all siblings child elements
            [].forEach.call(siblingContent, function (content) {
                removeClass(content, 'active');
            });

        });
            
    }

    // Function to close all dropdowns
    var closeDrops = function (dropToggle, dropWrapper, dropContent) {

        // For each dropdown toggle, remove '.active' class
        [].forEach.call(dropToggle, function (toggle) {
            removeClass(toggle, 'active');
        });

        // For each dropdown toggle, remove '.active' class
        [].forEach.call(dropWrapper, function (wrapper) {
            removeClass(wrapper, 'active');
        });

        // For each dropdown toggle, remove '.active' class
        [].forEach.call(dropContent, function (content) {
            removeClass(content, 'active');
        });

    }

    // Define the dropdown toggle element, wrapper and content
    var dropToggle = document.querySelectorAll('.dropdown > a');
    var dropWrapper = document.querySelectorAll('.dropdown');
    var dropContent = document.querySelectorAll('.dropdown-menu');


    // When body is clicked, close all dropdowns
    document.addEventListener('click', function(e) {

        // Close dropdowns
        closeDrops(dropToggle, dropWrapper, dropContent);

    }, false);


    // For each toggle
    [].forEach.call(dropToggle, function (toggle) {

        // When the toggle is clicked
        toggle.addEventListener('click', function(e) {

            // Prevent the "close all dropdowns" function
            e.stopPropagation();

            // Prevent default link action
            e.preventDefault();

            // Toggle dropdown menu
            toggleDrop(toggle);

        }, false);
    });


    // For each dropdown menu
    [].forEach.call(dropContent, function (content) {

        // When the menu is clicked
        content.addEventListener('click', function(e) {

            // Prevent the "close all dropdowns" function
            e.stopPropagation();

        }, false);
    });

}




/* =============================================================

    Astro v3.2
    Mobile-first navigation patterns by Chris Ferdinandi.
    http://gomakethings.com

    Free to use under the MIT License.
    http://gomakethings.com/mit/
    
 * ============================================================= */


/* =============================================================
    MICRO-FRAMEWORK
    Simple vanilla JavaScript functions to handle common tasks.
 * ============================================================= */


/* =============================================================
    ASTRO FUNCTIONS
    Toggle the navigation menu.
 * ============================================================= */

// Feature Test
if ( 'querySelector' in document && 'addEventListener' in window ) {

    // Function to toggle navigation menu
    var toggleNav = function (toggle) {

        // Get target navigation menu
        var dataID = toggle.getAttribute('data-target');
        var dataTarget = document.querySelector(dataID);

        // Toggle the '.active' class on the menu
        toggleClass(dataTarget, 'active');

    }

    // Define the nav toggle
    var navToggle = document.querySelectorAll('.nav-toggle');

    // For each nav toggle
    [].forEach.call(navToggle, function (toggle) {

        // When nav toggle is clicked
        toggle.addEventListener('click', function(e) {

            // Prevent the default link behavior
            e.preventDefault();

            // Toggle the navigation menu
            toggleNav(toggle);
            
        }, false);
    });
}
