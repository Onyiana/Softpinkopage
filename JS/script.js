AOS.init();

// this was used to 
const typed = new Typed('.text-slider', {
    strings: ["Start Up", "Business", "Investment"],
    typeSpeed: 90,
    loop: true,
    backDelay: 90,
    backSpeed: 50
});

/*--/ Star Counter /--*/
$('.counter').counterUp({
    delay: 15,
    time: 2000
});