function view() {
    var fileUrl = 'assets/PORTFOLIO.pdf';
    var desiredFileName = 'NM_Portfolio.pdf';

    var element = document.createElement('a');
    element.setAttribute('href', fileUrl);
    element.setAttribute('download', desiredFileName);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

}

var instagram = document.getElementById("instagram");
instagram.addEventListener('click', function () {
    window.location.href = 'https://www.instagram.com/_nm_editzz_/';
});

var twitter = document.getElementById("twitter");
twitter.addEventListener("click",function(){
    window.location.href='https://twitter.com/Mugunthan177';
});

var github = document.getElementById("github");
github.addEventListener("click",function(){
    window.location.href='https://github.com/mugunthan17';
});

var linkedin = document.getElementById("linkedin");
linkedin.addEventListener("click",function(){
    window.location.href='https://www.linkedin.com/in/mugunthan-n-3532b0248';
});

var dribbble = document.getElementById("dirbbble");
dribbble.addEventListener("click",function(){
    window.location.href='https://dribbble.com/Mugunthan177';
});

var dribbbleprofile = document.getElementById("dirbbbleprofile");
dribbbleprofile.addEventListener("click",function(){
    window.location.href='https://dribbble.com/Mugunthan177';
});

var vectorbtn = document.getElementById("vectorbtn");
vectorbtn.addEventListener("click",function(){
    window.location.href="vector.html";
});

var psbtn = document.getElementById("psbtn");
psbtn.addEventListener("click",function(){
    window.location.href="ps.html";
});


