const form = document.querySelector("form");
const login = document.getElementById("login");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const confirmSenha = document.getElementById("confirmSenha");
const loginErro = document.querySelector("#login + span.erro");
const emailErro = document.querySelector("#email + span.erro");
const senhalErro = document.querySelector("#senha + span.erro");
const confirmSenhalErro = document.querySelector("#confirmSenha + span.erro")
const botao = document.getElementById("botao");
const paragrafo = document.querySelector("p");

login.addEventListener("input", (event) => {
    if (login.validity.valid) {
        loginErro.textContent = "";
        loginErro.className = "erro";
    } else {
        mostrarErro(login, loginErro);
    }
});

email.addEventListener("input", (event) => {
    if (email.validity.valid) {
        emailErro.textContent = "";
        emailErro.className = "erro";
    } else {
        mostrarErro(email, emailErro)
    }
})

senha.addEventListener("input", (event) => {
    if (senha.validity.valid) {
        senhalErro.textContent = "";
        senhalErro.className = "erro";
    } else {
        mostrarErro(senha, senhalErro);
    }
});

confirmSenha.addEventListener("input", (event) => {
    if (confirmSenha.validity.valid) {
        confirmSenhalErro.textContent = "";
        confirmSenhalErro.className = "erro";
    } else {
        mostrarErro(confirmSenha, confirmSenhalErro);
    }
});

form.addEventListener("submit", (event) => {
    if (!login.validity.valid) {
        mostrarErro(login, loginErro);
        event.preventDefault();
    } else if (!email.validity.valid) {
        mostrarErro(email, emailErro);
        event.preventDefault();
    } else if (!senha.validity.valid) {
        mostrarErro(senha, senhalErro);
        event.preventDefault();
    } else if (!confirmSenha.validity.valid) {
        mostrarErro(confirmSenha, confirmSenhalErro);
        event.preventDefault();
    } else if (valideConfirmSenha() === true) {
        event.preventDefault();
    }
});

function mostrarErro(input, erroElement) {
    if (input.validity.valueMissing) {
        if (input.id === "login") {
            erroElement.textContent = `Você precisa inserir um ${input.id}.`;
        } else if (input.id === "email") {
            erroElement.textContent = 'Você precisa inserir um e-mail.';
        } else if (input.id === "senha") {
            erroElement.textContent = `Você precisa inserir uma ${input.id}.`;
        } else if (input.id === "confirmSenha") {
            erroElement.textContent = `Você precisa confirmar a senha.`;
        }
    } else if (input.validity.typeMismatch) {
        erroElement.textContent = 'Formato de e-mail inválido.';
    } else if (input.validity.tooShort) {
        if (input.id === "login") {
            erroElement.textContent = `Login precisa ter no mínimo ${input.minLength} caracteres.`;
        } else if (input.id === "senha") {
            erroElement.textContent = `Senha precisa ter no mínimo ${input.minLength} caracteres.`;
        }
    }

    erroElement.className = "erro ativo";
}

function valideConfirmSenha() {
    if (confirmSenha.value !== senha.value) {
        confirmSenhalErro.textContent = "As senhas não coincidem.";
        confirmSenhalErro.className = "erro ativo";
        return true;
    }
}

botao.addEventListener("click", mensagem);


function mensagem() {
    if (email.validity.valueMissing) {
        emailErro.textContent = "Você precisa inserir um email.";
    } else if (email.validity.typeMismatch) {
        emailErro.textContent = 'Formato de e-mail inválido.';
    } else {
        paragrafo.textContent = "E-mail de recuperação de senha enviado!";
    }
}
