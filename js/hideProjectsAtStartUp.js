// Only maximize the two most recent projects from each institution at startup.
$(document).ready(function() { 
    $(".insitution").each(function() {
        $(this).find(".projectBody").slice(2).hide();
    });
});