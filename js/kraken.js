/* =============================================================
 * ios-orientation-change-fix.js v1.0.0
 * Fixes zoom on rotation bug in iOS.
 * Script by @scottjehl, rebound by @wilto
 * https://github.com/scottjehl/iOS-Orientationchange-Fix
 * MIT / GPLv2 License
 * ============================================================= */

(function(w){
	
	// This fix addresses an iOS bug, so return early if the UA claims it's something else.
	var ua = navigator.userAgent;
	if( !( /iPhone|iPad|iPod/.test( navigator.platform ) && /OS [1-5]_[0-9_]* like Mac OS X/i.test(ua) && ua.indexOf( "AppleWebKit" ) > -1 ) ){
		return;
	}

    var doc = w.document;

    if( !doc.querySelector ){ return; }

    var meta = doc.querySelector( "meta[name=viewport]" ),
        initialContent = meta && meta.getAttribute( "content" ),
        disabledZoom = initialContent + ",maximum-scale=1",
        enabledZoom = initialContent + ",maximum-scale=10",
        enabled = true,
		x, y, z, aig;

    if( !meta ){ return; }

    function restoreZoom(){
        meta.setAttribute( "content", enabledZoom );
        enabled = true;
    }

    function disableZoom(){
        meta.setAttribute( "content", disabledZoom );
        enabled = false;
    }
	
    function checkTilt( e ){
		aig = e.accelerationIncludingGravity;
		x = Math.abs( aig.x );
		y = Math.abs( aig.y );
		z = Math.abs( aig.z );
				
		// If portrait orientation and in one of the danger zones
        if( (!w.orientation || w.orientation === 180) && ( x > 7 || ( ( z > 6 && y < 8 || z < 8 && y > 6 ) && x > 5 ) ) ){
			if( enabled ){
				disableZoom();
			}        	
        }
		else if( !enabled ){
			restoreZoom();
        }
    }
	
	w.addEventListener( "orientationchange", restoreZoom, false );
	w.addEventListener( "devicemotion", checkTilt, false );

})( this );





/* =============================================================
 * drop.js v1.0.0
 * Simple, progressively enhanced dropdown menus.
 * Script by Chris Ferdinandi - http://gomakethings.com
 * Licensed under WTFPL - http://www.wtfpl.net
 * ============================================================= */

$(function () {
    // Close dropdown menus when you click outside of them    
    $(document).click(function(){
      $('.dropdown > a').removeClass('active'); // Remove any '.active' classes from dropdown links
      $('.dropdown').removeClass('active'); // Remove any '.active' classes from dropdown list items
      $('.dropdown-menu').removeClass('active'); // Hide any visible dropdown menus
    });

    // When a dropdown menu link is clicked
    $('.dropdown > a').click(function(e) {
        e.stopPropagation(); // Stop the "close all dropdowns" function
        e.preventDefault(); // Prevent the default link action
        $(this).toggleClass('active').next($('.dropdown-menu')).toggleClass('active'); // If the dropdown menu is hidden, show it. Otherwise, hide it.
        $(this).parent('.dropdown').toggleClass('active'); // Add/remove '.active' class to the dropdown list item
        $(this).parent().siblings('.dropdown').removeClass('active').children('a').removeClass('active').next($('.dropdown-menu')).removeClass('active'); // Hide all other dropdown menus
    });

    // When click inside a dropdown menu
    $('.dropdown-menu').click(function(e) {
        e.stopPropagation(); // Stop the "close all dropdowns" function
    });
});





/* =============================================================
 * astro.js v1.0.0
 * Mobile-first navigation patterns.
 * Script by Chris Ferdinandi - http://gomakethings.com
 * Licensed under WTFPL - http://www.wtfpl.net/
 * ============================================================= */

$(function () {
    $('.nav-toggle').click(function(e) { // When a link or button with the .nav-toggle class is clicked
        e.preventDefault(); // Prevent the default action from occurring

        // Set Variables
        var dataID = $(this).attr('data-target'); // dataID is the data-target value
        var hrefID = $(this).attr('href'); // hrefID is the href value

        // Toggle the Active Class
        if (dataID)  { // If the clicked element has a data-target
            $(dataID).toggleClass('active'); // Add or remove the .active class from the element whose ID matches the data-target value
        }
        else { // Otherwise
            $(hrefID).toggleClass('active'); // Add or remove the .active class from the element whose ID matches the href value
        }
    });
});





/* =============================================================
 * js-accessibility.js v1.0.0
 * Adds .js class to <body> for progressive enhancement.
 * Script by Chris Ferdinandi - http://gomakethings.com
 * Licensed under WTFPL - http://www.wtfpl.net
 * ============================================================= */

$(function () {
    $('body').addClass('js'); // On page load, add the .js class to the <body> element.
});
