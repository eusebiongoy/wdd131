document.getElementById("lastModified").innerHTML = document.lastModified;
const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");


range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}