export default function showErrorMessage(textarea, error) {
    const textInput = textarea.parentElement;
    const errorMessage = textInput.querySelector("span");
    errorMessage.innerText = error;
    textInput.className = "container__mensagem-entrada erro";
}