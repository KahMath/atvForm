const form = document.querySelector("form");
const login = document.getElementById("login");
const senha = document.getElementById("senha");
const loginError = document.querySelector("#login + span.error");
const senhaError = document.querySelector("#senha + span.error");
const botao = document.getElementById("botao");
const paragrafo = document.querySelector("p");

login.addEventListener("input", (event) => {
    if (login.validity.valid) {
        loginError.textContent = "";
        loginError.className = "error";
    } else {
        showError(login, loginError);
    }
});

senha.addEventListener("input", (event) => {
    if (senha.validity.valid) {
        senhaError.textContent = "";
        senhaError.className = "error";
    } else {
        showError(senha, senhaError);
    }
});

form.addEventListener("submit", (event) => {
    if (!login.validity.valid) {
        showError(login, loginError);
        event.preventDefault();
    } else if (!senha.validity.valid) {
        showError(senha, senhaError);
        event.preventDefault();
    }
});

function showError(input, errorElement) {
    if (input.validity.valueMissing) {
        errorElement.textContent = `Você precisa inserir um ${input.id === "login" ? "login" : "senha"}.`;
    } else if (input.validity.tooShort) {
        errorElement.textContent = `${input.id === "login" ? "Login" : "Senha"} precisa ter no mínimo ${input.minLength} caracteres.`;
    }

    errorElement.className = "error active";
}

botao.addEventListener("click", mensagem);

function mensagem() {
    if (login.validity.valueMissing) {
        loginError.textContent = "Você precisa inserir um login.";
    } else if (login.validity.tooShort) {
        loginError.textContent = `Login precisa ter no mínimo ${login.minLength} caracteres.`;
    } else if (botao.value === "Esqueceu a senha?") {
        paragrafo.textContent = "E-mail de recuperação de senha enviado!";
    }
}