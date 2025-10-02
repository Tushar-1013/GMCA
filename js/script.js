let workexp = document.getElementById("workexp");
let optional = document.querySelectorAll(".optional")

function show() {

    (workexp.value == "yes") ? optional.forEach((e) => e.style.display = "") :
        optional.forEach((e) => e.style.display = "none");
}