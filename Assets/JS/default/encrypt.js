import showErrorMessage from "./errorMessages.js";
export default function encrypt() {
    const exitMessageContainer = document.querySelector(".container__mensagem-saida");
    const encryptedMessageContainer = document.querySelector(".container__mensagem-resultado");
    let messageOutput = document.querySelector(".mensagem-decodificada");
    const pattern = /^[a-z\s.,!?:;()]+$/;
    let messageInput = document.querySelector(".entrada-texto");
    let message = messageInput.value;
    let encryptedMessage = message.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    if(message === "") {
        showErrorMessage(messageInput, "Digite ou cole algo para criptografar. \nRecarregando em 2 segundos.");
        message = "";
        setTimeout(function(){
			window-location.reload();
		}, 2000);
    }else if(pattern.test(message) == false){
        showErrorMessage(messageInput, "Use apenas letras minúsculas e não use acentos.");
        message = "";
        setTimeout(function(){
			window-location.reload();
		}, 2000);
    }else{
        exitMessageContainer.style.display = "none";
        encryptedMessageContainer.style.display = "block";
        messageOutput.innerHTML = encryptedMessage;
    }
}
