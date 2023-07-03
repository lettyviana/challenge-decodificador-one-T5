# **Decodificador de Mensagens (Challenge ONE)**

### **Projeto de Decodificador de Mensagens do Challenge ONE**

Desafio do Programa ONE - Oracle Next Education com a Alura, no qual recebemos a missão de criar um decodificador de textos, decidi fazer outra versão, tentando seguir o modelo disponibilizado no Figma.

<div align="center">
    <img src="./Assets/Img/Readme/demonstra%C3%A7%C3%A3o-challenge-one-decodificador-T5.gif" width="900px" />
</div>

#

## **Índice:**

1. [Requisitos](#1-requisitos) 
2. [Extras](#2-extras)
3. [Minhas implementações](#3-minhas-implementações)
4. [Tecnologias utilizadas](#4-linguagenstecnologias-utilizadas)
5. [Imagens do projeto](#5-imagens-do-projeto)
6. [Como usar](#6-como-usar)
7. [Autora e contato](#7-autora-e-contato)
8. [Licença](#8-licença)
9. [Status do Projeto](#9-status-do-projeto)

#

### **1. Requisitos**

Vamos trabalhar em uma aplicação que criptografa textos, assim você poderá trocar mensagens secretas com outras pessoas que saibam o segredo da criptografia utilizada.

A criptografia deve conter  as seguintes características:
- **As "chaves" de criptografia que utilizaremos são:**
    - A letra **"e"** é convertida para **"enter"**;
    - A letra **"i"** é convertida para **"imes"**;
    - A letra **"a"** é convertida para **"ai"**;
    - A letra **"o"** é convertida para **"ober"**;
    - A letra **"u"** é convertida para **"ufat"**;
- Deve funcionar apenas com letras minúsculas ✔️
- Não devem ser utilizados letras com acentos nem caracteres especiais ✔️
- Deve ser possível converter uma palavra para a versão criptografada e também retornar uma palavra criptografada para a versão original ✔️
- A página deve ter campos para inserção do texto a ser criptografado ou descriptografado, e a pessoa usuária deve poder escolher entre as duas opções ✔️
- O resultado deve ser exibido na tela ✔️

#

### **2. Extras**

- O resultado deve ser exibido na tela.
- Um botão que copie o texto criptografado/descriptografado para a área de transferência - ou seja, que tenha a mesma funcionalidade do ctrl+C ou da opção "copiar" do menu dos aplicativos. ✔️
- Além, é claro, de aprender/se habituar a mexer na ferramenta de organização/gestão Trello.

#

### **3. Minhas implementações**

Tentei manter as mesmas implementações do projeto anterior.

- Design responsivo para desktop (1920 x 1080/1440 x 1024), tablet (768 x 1174) e celular (375 x 933);
- Validação do texto inserido, de modo a permitir apenas letras minúsculas e caracteres sem acento. Caso o usuário insira algum desses, aparecerá um aviso na tela para que o usuário siga as instruções;
- Botão "Copiar" que só aparece após clicar em "Criptografar" ou "Descriptografar";
- Alerta após clicar no botão "Copiar".

#

### **4. Linguagens/tecnologias utilizadas**

<div style="display: inline_block" align="center"><br />
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" height="35px" alt="JavaScript" align="center" />
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" height="36px" alt="CSS3" align="center" />
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" height="35px" alt="HTML5" align="center" />
</div><br />

#

### **5. Imagens do projeto**

<div align="center">
    <img src="./Assets/Img/Readme/pagina-inicial-desktop.png" alt="Página inicial desktop" width="900px"/><br />
    <img src="./Assets/Img/Readme/pagina-com-erro-desktop.png" alt="Página com um dos erros (mensagem em branco) desktop" width="900px" /><br />
    <img src="./Assets/Img/Readme/pagina-mensagem-descriptografada-desktop.png" alt="Página mensagem criptografada desktop" width="900px" /><br />
    <img src="./Assets/Img/Readme/pagina-inicial-tablet.png" alt="Página inicial tablet" width="270px" />
    <img src="./Assets/Img/Readme/pagina-mensagem-descriptografada-tablet.png" alt="Página com um dos erros (mensagem fora dos padrões) tablet" width="270px" />
    <img src="./Assets/Img/Readme/pagina-mensagem-descriptografada-tablet.png" alt="Página mensagem criptografada tablet" width="270px" />
    <img src="./Assets/Img/Readme/pagina-inicial-mobile-360.png" alt="Página inicial mobile" width="150px" />
    <img src="./Assets/Img/Readme/pagina-com-erro-mobile-360.png" alt="Página com um dos erros (mensagem fora dos padrões) mobile" width="150px" />
    <img src="./Assets/Img/Readme/pagina-mensagem-descriptografada-mobile-360.png" alt="Página mensagem criptografada mobile" width="150px" />
</div>

#

### **6. Como usar**

Para acessar e decodificar suas mensagens, clique <a href="https://lettyviana.github.io/challenge-decodificador-one-T5/" target="_blank">aqui</a>.

#

### **7. Autora e contato**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/leticiaviana-trad-dev/)

#

### **8. Licença**
[![License](https://img.shields.io/badge/LICENSE-MIT-success)](https://github.com/lettyviana/challenge-one-decodificador-T5/blob/main/LICENSE)

#

### **9. Status do projeto**

- [x] Funcional;
- [x] Responsivo (desktop (1920 x 1080/1440 x 1024), tablet (768 x 1174) e celular (375 x 933));
- [x] Concluído.
