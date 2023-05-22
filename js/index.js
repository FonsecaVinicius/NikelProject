const myModal = new bootstrap.Modal("#register-modal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("Session");

checkLogged();

//LOGAR NO SISTEMA
document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email-input").value;
    const password = document.getElementById("password-input").value;
    const CheckSession = document.getElementById("session-check").checked;

    const account = getAccount(email);

    if(!account) {
        alert("Oops! Verifique o usuário ou senha.");
        return;
    }

    if(account) {
        if(account.password !== password) {
            alert("Oops! Verifique o usuário ou a senha.");
            return;
        }

        saveSession(email, CheckSession);

    
        window.location.href = "home.html";

    }

 




});

//CRIAR CONTA
document.getElementById("create-form").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const email = document.getElementById("email-create-input").value;
    const password = document.getElementById("password-create-input").value;
  
    if(email.length <5) {
        alert("Preencha o campo com um e-mail válido.");
        return;
    }

    if(password.lenght <4) {
        alert("Preencha uma senha com no mínimo 4 dígitos.");
        return;
    }

    saveAccount({
        login: email,
        password: password,
        transactions: []
    });

    myModal.hide();

    alert("Conta criada com sucesso!");
  });
  

  function checkLogged() {
    if(session) {
        sessionStorage.setItem("Logged", session);
        logged = session;
    }

        if(logged) {
            saveSession(Logged, session)

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

    sessionStorage.setItem ("Logged", data);
}


function getAccount(key) {
    const account = localStorage.getItem(key);


if(account) {
    return JSON.parse(account);
}



return"";

}








  

