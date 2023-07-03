export default function copyMessage() {
    let messageOutput = document.querySelector(".mensagem-decodificada");
    let text = messageOutput.innerHTML;
    const copyBtn = document.querySelector(".botao-copiar");
    navigator.clipboard.writeText(text);
    copyBtn.style.backgroundColor = "var(--azul-escuro-300)";
    copyBtn.style.color = "var(--branco)";
    copyBtn.innerHTML = "Texto copiado!";
    setTimeout(function(){
        copyBtn.style.backgroundColor = "transparent";
        copyBtn.style.color = "var(--azul-escuro-300)";
        copyBtn.innerHTML = "Copiar";
    }, 1000);
}