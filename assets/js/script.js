/* Author: 

*/
const loginForm = document.querySelector("form[name=login");
const err = document.querySelectorAll(".err");
const logout = document.querySelector(".btn-logout");
if (loginForm) {
    document.onload = checkUser();
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let valid = true;
        uname = document.forms["login"]["uname"].value;
        let pass = document.forms["login"]["pass"].value;
        err[0].style.display = "none";
        err[1].style.display = "none";
        if (uname == "") {
            valid = false;
            err[0].innerHTML = "Enter username";
            err[0].style.display = "block";
        }
        if (pass == "") {
            valid = false;
            err[1].innerHTML = "Enter username";
            err[1].style.display = "block";
        }
        if (valid) {
            localStorage.setItem("uname", uname);
            location.href = "home.html";
        }
    });

}
if (logout) {
    logout.addEventListener("click", () => {
        localStorage.removeItem("uname");
        location.href = "index.html";
    });
}

function checkUser() {
    if (localStorage.getItem("uname")) {
        uname = localStorage.getItem("uname");
        location.href = "home.html";
    }
}