// Toggles, shows, or hides elements on the page.  
// @params elements: the JQuery selected elements to be altered
// If all elements are visible or hidden, the visibility is toggled
// If some elements are shown but less than half of all elements are shown, visibility is set to hide
// If some elements are shown but more than half of all elements are shown, visibility is set to show
//div.expand elements have text set to "+" when visible and "-" when hidden
function toggleExpanded(elements) 
{
    // Get the number of the elements that are visible on the page
    var openElements = elements.filter(function() {return $(this).is(":visible");}).length;
    
    // Get the icons for the selected project
    var icons = elements.closest(".project").find(".projectTitle").find(".expand");
    
    // Toggle/hide/show elements based on relative number of open elements
    var time = 275;
    
    if (openElements == 0 || openElements == elements.length) 
    {
        elements.animate({height: "toggle"}, time, function() { });
        toggleIconText(icons);
    }
    else if(openElements < elements.length/2)
    {
        elements.animate({height: "hide"}, time, function() { });
        setExpandIconText(icons, "+");
    }
    else
    {
        elements.animate({height: "show"}, time, function() { });
        setExpandIconText(icons, "-");
    }
}

// Sets the text of the given icons (div.expand) to the specified string value.
// @param icons - List of JQuery selected div.expand elements with either a + or - as text
// @param newText - a string to set the body text of all elements in icons to
function setExpandIconText(icons, newText) 
{
    icons.each(function() {
        $(this).text(newText); 
    }); 
}

// Toggles the expand button icons on project sections between +/-
// If current text is +, text is changed to -
// If current text is -, text is changed to +
// @param icons - List of JQuery selected div.expand elements with either a + or - as text
function toggleIconText(icons) 
{
    icons.each(function() {
        if($(this).text() == "-")
            setExpandIconText($(this), "+");
        else 
            setExpandIconText($(this), "-");
    }); 
}
    
// Allow hiding and showing of projects to prevent clutter as number of projects grows 
$(document).ready(function() {    
    // Toggle visibility of all projects by clicking the project section title
    $(".sectionTitle").click(function() {
        var projects = $(this).closest("#Research").find(".insitution").find(".projectBody");
        toggleExpanded(projects);
    });    
    
    // Toggle visibility of all projects at a given institution by clicking institution title
    $( ".insitutionTitle").click(function() {
        var projects = $(this).closest(".insitution").find(".projectBody");
        toggleExpanded(projects);
    });
    
    // Toggle visibility of individual projects by clicking on the project title    
    $(".projectTitle" ).click(function() {
        var projects = $(this).next(".projectBody");
        toggleExpanded(projects);
    });
});