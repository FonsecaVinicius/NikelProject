const myModal = new bootstrap.Modal("#register-modal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("Session");

checkLogged();

//LOGAR NO SISTEMA
document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email-input").value;
    const password = document.getElementById("password-input").value;
    const checkSession = document.getElementById("session-check").checked;

    const account = getAccount(email);

    if(!account) {
        alert("Oops! Verifique o usuário ou senha.");
        return;
    }

    if(account.password !== password) {
        alert("Oops! Verifique o usuário ou a senha.");
        return;
    }


    saveSession(email, checkSession);

    window.location.href = "home.html";
});

function checkLogged() {
    if(session) {
        sessionStorage.setItem("logged", session);
        logged = session;
    }

    if(logged) {
        saveSession(logged, session);

        window.location.href = "Home.html";
    }
}






function saveAccount(data) {
    localStorage.setItem(data.login, JSON.stringify(data));
}

function saveSession(data, saveSession) {
    if(saveSession) {
        localStorage.setItem("session", data);
    }

    sessionStorage.setItem ("logged", data);
}


function getAccount(key) {
    const account = localStorage.getItem(key);


if(account) {
    return JSON.parse(account);
}



return"";

}








  

