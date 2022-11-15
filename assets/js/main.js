let contenarImage = document.getElementById("contenar-image");
let navbar = document.getElementById("navbar");
window.onscroll= ()=>{
    if(window.scrollY >= contenarImage.offsetTop){
        navbar.style.background = "#8d33b6"
        navbar.style.borderRadius = '0px 0px 6px 6px'
    }else{
        navbar.style.background = "transparent"
        navbar.style.borderRadius = '0px 0px 0px 0px'
    }
}


var user = 'Mostafa';
var showUser = ()=>{
    console.log(`user is ${user}`);
    var user = 'Ahmed';
    console.log(`user is ${user}`);
}
console.log(`user is ${user}`);

showUser()