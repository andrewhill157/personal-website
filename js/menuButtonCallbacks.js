$(document).ready(function() {
    $("#BioButton").on('click', function() {
        document.getElementById("Bio").scrollIntoView();
    });
    
    $("#ResearchButton").on('click', function() {
        document.getElementById("Research").scrollIntoView();
    });
    
    $("#ProjectsButton").on('click', function() {
        document.getElementById("Projects").scrollIntoView();
    });
    
    $("#CVButton").on('click', function() {
        document.getElementById("CV").scrollIntoView();
    });
});