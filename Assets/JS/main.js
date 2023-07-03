import encrypt from "./default/encrypt.js";
import decrypt from "./default/decrypt.js";
import copyMessage from "./default/copy.js";
(() => {
    const encryptBtn = document.querySelector(".botao-criptografar");
    const decryptBtn = document.querySelector(".botao-descriptografar");
    const copyBtn = document.querySelector(".botao-copiar");
    encryptBtn.addEventListener("click", encrypt);
    decryptBtn.addEventListener("click", decrypt);
    copyBtn.addEventListener("click", copyMessage);
})();
