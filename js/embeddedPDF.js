window.onload = function (){
    var myPDF = new PDFObject({ 
    
        url: "documents/resume.pdf",
        pdfOpenParams: {
            navpanes: 1,
            view: "FitV",
            pagemode: "thumbs"
        }
    
    }).embed("pdf");
};