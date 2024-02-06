function darkMode() {
    var element = document.body;
    console.log("clicked")
    element.classList.toggle("dark-mode");
}
function growDiv() {
    var growDiv = document.getElementById('grow');
    if (growDiv.clientHeight) {
        growDiv.style.height = 0;
    } else {
        var wrapper = document.querySelector('.measuringWrapper');
        growDiv.style.height = wrapper.clientHeight + "px";
    }
    document.getElementById("more-button").value = document.getElementById("more-button").value == 'Read more' ? 'Read less' : 'Read more';
}