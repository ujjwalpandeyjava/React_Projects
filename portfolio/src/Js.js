document.addEventListener("DOMContentLoaded", function (event) {
    //  Hiding the scroller more indicator when page scrolled 80px
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        // console.log('current sctoll pos = ' + currentScrollPos);
        if (currentScrollPos > 80){
            document.getElementById("scroller").style.opacity = "0";
        }
        else
            document.getElementById("scroller").style.opacity = "1";
    }
    //  Fun 2
});