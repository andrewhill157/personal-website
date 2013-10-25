/* Gets the time in milliseconds it will take to reach a given target id on the page 
 * from the top of the viewable screen at a specified velocity. 
 * @params id: a string with the id of the target element (e.g. #myID)
 * @params scrollVelocity: velocity in pixels per second 
 * @returns: Time in milliseconds it will take to reach the target ID from the top of the 
 *           viewable screen at the specified velocity.
*/
function getScrollTime(id, scrollVelocity) 
{    
    // Distance from current top of screen to the target id on page
    var distanceToTarget = $(id).offset().top - $(window).scrollTop();
    
    // Calculate time to reach target id given velocity
    scrolltime = distanceToTarget/scrollVelocity;
    return scrolltime;
}

/* Animates scrolling from the top of the current viewable screen to the target id in the
 * specified duration.
 * @params id: a string with the id of the target element (e.g. #myID)
 * @params scrollVelocity: duration of scroll animation in milliseconds
*/
function scrollToID(id, scrolltime) 
{
    $('html, body').animate({
    scrollTop: $(id).offset().top}, scrolltime);    
}

// Smooth scrolling functionality for each navigation buttons
$(document).ready(function() { 
    var scrollVelocity = 1;
    
    $("#BioButton").on('click', function() {
        var id = "#Bio";
        var scrolltime = getScrollTime(id, 1);
        scrollToID(id, scrolltime);
    });
    
    
    $("#ResearchButton").on('click', function() {
        var id = "#Research";
        var scrolltime = getScrollTime(id, scrollVelocity);
        scrollToID(id, scrolltime);
    });
    
    $("#ProjectsButton").on('click', function() {
        var id = "#Projects";
        var scrolltime = getScrollTime(id, scrollVelocity);
        scrollToID(id, scrolltime);
    });
    
    $("#CVButton").on('click', function() {
        var id = "#CV";
        var scrolltime = getScrollTime(id, scrollVelocity);
        scrollToID(id, scrolltime);
    });
});

