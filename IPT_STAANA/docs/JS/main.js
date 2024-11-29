const spans = document.querySelectorAll('.progress-bar span');

spans.forEach((span) => {
    span.style.width = span.dataset.width;
    span.innerHTML = span.dataset.width;
});
function downloadCV() {
    const cvUrl = 'C:\Users\Isaac\Desktop\cv.pdf'; 
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Your_CV.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
