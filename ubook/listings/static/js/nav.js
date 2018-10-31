let dropDownDisplayed = false;

function dropDown() {
    document.querySelector("#dropdown-content").style.display = "block";
    dropDownDisplayed = true;
}

window.onclick = function(e) {
    if (dropDownDisplayed && !e.target.matches('#user-dropdown-button')) {
        document.querySelector("#dropdown-content").style.display = "none";
        dropDownDisplayed = false;
    }
}
