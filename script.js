var bar = document.getElementById("bar");
var dropdownList = document.getElementById("dropdown-list");
var isDropdownListOpen = false;

bar.addEventListener('click', () => {
    if (isDropdownListOpen) {
        dropdownList.style.display = "none";
        isDropdownListOpen = false;
    } else {
        dropdownList.style.display = "block";
        dropdownList.style.position = "absolute";
        dropdownList.style.right = "3%";
        isDropdownListOpen = true;
    }
});