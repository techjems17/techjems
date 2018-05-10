var modal = document.getElementsByClassName("modal")[0];
var small = document.getElementsByClassName("small-res")[0];
var large = document.getElementsByClassName("large-res")[0];
var close = document.getElementsByClassName("close")[0];

small.onclick = () => {
    modal.style.display = "block";
}

close.onclick = () => {
    modal.style.display = "none";
}