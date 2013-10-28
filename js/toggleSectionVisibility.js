// Allow hiding and showing of projects to prevent clutter as number of projects grows 
$(document).ready(function() {    
    // Toggle visibility of all projects by clicking the project section title
    $(".sectionTitle").click(function() {
        $(this).closest("#Projects").find(".insitution").find(".projectBody").animate({
            height: "toggle"}, 300, function() { });
    });    
    
    // Toggle visibility of all projects at a given institution by clicking institution title
    $(".projectTitle" ).click(function() {
        $(this).next(".projectBody").animate({
            height: "toggle"}, 300, function() { });
    });
    
    // Toggle visibility of individual projects by clicking on the project title
    $( ".insitutionTitle").click(function() {
        $(this).closest(".insitution").find(".projectBody").animate({
            height: "toggle"}, 300, function() { });
    });
});