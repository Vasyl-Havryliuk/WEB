document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger-icon").addEventListener("click", function()
    {
        document.querySelector(".hdr").classList.toggle("open")
    })
});


window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.querySelector(".hdr").classList.remove("open")
    }
});

document.getElementById("menu").addEventListener('click', event => {
    event._isClickWithInMenu = true;
})
document.getElementById("burger-icon").addEventListener('click', event => {
    event._isClickWithInMenu = true;
})
document.body.addEventListener('click', event => {
    if (event._isClickWithInMenu) return;
    document.querySelector(".hdr").classList.remove("open")
})
