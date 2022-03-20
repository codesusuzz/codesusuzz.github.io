const loginForm = document.querySelector("form#loginForm");
const loginInput = document.querySelector("#loginInput");
const greetingText = document.querySelector("#greeting");

const logoutBtn = document.getElementById("logoutbtn");

function loginSubmit(e){
    e.preventDefault();
    loginForm.classList.add("hidden");
    const loginValue = loginInput.value;
    localStorage.setItem("username", loginValue);
    display();
}

function display(){
    greetingText.classList.remove("hidden");
    const name = localStorage.getItem("username");
    greetingText.innerText = `Welcome, ${name}!`
    logoutBtn.classList.remove("hidden");
}

function loginFunc(){
    logoutBtn.classList.add("hidden");
    loginForm.classList.remove("hidden");
    greetingText.classList.add("hidden");
    loginForm.addEventListener("submit", loginSubmit);
}

function logoutFunc(){
    localStorage.removeItem("username");
    loginForm.classList.remove("hidden");
    loginFunc();
}

if (localStorage.getItem("username") === null){
    loginFunc()
} else{
    loginForm.classList.add("hidden");
    display();
    }

logoutBtn.addEventListener("click", logoutFunc);