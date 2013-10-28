// Toggles, shows, or hides elements on the page.  
// @params elements: the JQuery selected elements to be altered
// If all elements are visible or hidden, the visibility is toggled
// If some elements are shown but less than half of all elements are shown, visibility is set to hide
// If some elements are shown but more than half of all elements are shown, visibility is set to show
function toggleHeight(elements) {
    // Get the number of the elements that are visible on the page
    var openElements = elements.filter(function() {return $(this).is(":visible");}).length;
    
    // Toggle/hide/show elements based on relative number of open elements
    var time = 275;
    
    if (openElements == 0 || openElements == elements.length) 
        elements.animate({height: "toggle"}, time, function() { });  
    else if(openElements < elements.length/2)
        elements.animate({height: "hide"}, time, function() { });
    else
        elements.animate({height: "show"}, time, function() { });
}

// Allow hiding and showing of projects to prevent clutter as number of projects grows 
$(document).ready(function() {    
    // Toggle visibility of all projects by clicking the project section title
    $(".sectionTitle").click(function() {
        var projects = $(this).closest("#Research").find(".insitution").find(".projectBody");
        toggleHeight(projects);
    });    
    
    // Toggle visibility of all projects at a given institution by clicking institution title
    $( ".insitutionTitle").click(function() {
        var projects = $(this).closest(".insitution").find(".projectBody");
        toggleHeight(projects); 
    });
    
    // Toggle visibility of individual projects by clicking on the project title    
    $(".projectTitle" ).click(function() {
        var projects = $(this).next(".projectBody");
        toggleHeight(projects);
    });
});