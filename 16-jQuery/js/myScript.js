/* JavaScript */
// let esconder = document.getElementById("esconder")
// esconder.onclick = function() {
//     let elemDiv = document.getElementById("box");
//     elemDiv.style.transition = "all 2s ease-in-out";
//     elemDiv.style.height = "0px";
//     elemDiv.style.width = "0px";
// }

// function slideDown(el) {
//     var elem = document.getElementById(el);
//     elem.style.transition = "all 2s ease-in-out";
//     elem.style.height = "200px";
//     elem.style.width = "400px";
// }

/* jQuery */
$("#esconder").click(function() {
    $("div").slideUp();
})
$("#mostrar").click(function() {
    $("div").slideDown();
})

