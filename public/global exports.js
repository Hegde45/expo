const menu = ["Intro", "Expo", "ISO", "Contact"];

$(document).ready(function(){
    menu.forEach((_,i) => $("#menu").append(`<div id=${_}><a class=${menuClass(i, 0)} onclick=activeClass(${i}) id=${'menu-'+i}>${_}</a></div>`));
});

const menuClass = (currentIndex, activeIndex) => `${currentIndex === activeIndex ? "active" : ""} ${currentIndex === 0 ? "" : "pl-1"}`;

const activeClass = (activeIndex) => {
    $("#menu div").children().removeClass("active");
    $("#menu-"+activeIndex).addClass("active");
}