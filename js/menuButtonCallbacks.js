$(document).ready(function() { 
    // Smooth scrolling functionality for each navigation button
    var scrolltime = 250; // time spent scrolling to id
    $("#BioButton").on('click', function() {
        $('html, body').animate({
        scrollTop: $("#Bio").offset().top}, scrolltime);
    });
    
    
    $("#ResearchButton").on('click', function() {
        $('html, body').animate({
        scrollTop: $("#Research").offset().top}, scrolltime);
    });
    
    $("#ProjectsButton").on('click', function() {
        $('html, body').animate({
        scrollTop: $("#Projects").offset().top}, scrolltime);
    });
    
    $("#CVButton").on('click', function() {
        $('html, body').animate({
        scrollTop: $("#CV").offset().top}, scrolltime);
    });
});