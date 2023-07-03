import showErrorMessage from "./errorMessages.js";
export default function decrypt() {
    const exitMessageContainer = document.querySelector(".container__mensagem-saida");
    const encryptedMessageContainer = document.querySelector(".container__mensagem-resultado");
    let messageOutput = document.querySelector(".mensagem-decodificada");
    const pattern = /^[a-z\s.,!?:;()]+$/;
    let messageInput = document.querySelector(".entrada-texto");
    let message = messageInput.value;
    let decryptedMessage = message.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    if(message === "") {
        showErrorMessage(messageInput, "Digite ou cole algo para descriptografar. \nRecarregando em 2 segundos.");
        message = "";
        setTimeout(function(){
			window-location.reload();
		}, 2000);
        messageInput.focus();
    }else if(pattern.test(message) == false){
        showErrorMessage(messageInput, "Use apenas letras minúsculas e não use acentos.");
        setTimeout(function(){
			window-location.reload();
		}, 2000);
        message = "";
        messageInput.focus();
    }else{
        exitMessageContainer.style.display = "none";
        encryptedMessageContainer.style.display = "block";
        messageOutput.innerHTML = decryptedMessage;
    }
}