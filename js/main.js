window.onscroll = function(){scrollFunction()};
function scrollFunction() {
    // if ( document.documentElement.scrollTop > 10) {
    //     document.getElementById("header").style.fontSize = "30px";
    // } 
    // else {
    //     document.getElementById("header").style.fontSize = "90px";  
    // }
    document.documentElement.scrollTop > 10 ?  document.getElementById("header").style.fontSize = "30px" :  document.getElementById("header").style.fontSize = "90px";  
}