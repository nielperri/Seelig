document.addEventListener("DOMContentLoaded", function () {
    // Seu código JavaScript aqui

    // Elementos DOM
    const adminSpaceLink = document.getElementById("admin-space-link");
    const passwordModal = document.getElementById("password-modal");
    const modalClose = document.getElementById("modal-close");
    const passwordInput = document.getElementById("password-input");
    const passwordSubmit = document.getElementById("password-submit");

    // Senha correta (substitua por sua senha real)
    const senhaCorreta = "1911";

    // Função para abrir o modal
    function openPasswordModal() {
        passwordModal.style.display = "block";
    }

    // Função para fechar o modal
    function closePasswordModal() {
        passwordModal.style.display = "none";
    }

    // Evento de clique no link do espaço dos administradores
    adminSpaceLink.addEventListener("click", function (e) {
        e.preventDefault();
        openPasswordModal();
    });

    // Evento de clique no botão "Enviar" no modal
    passwordSubmit.addEventListener("click", function () {
        const senhaDigitada = passwordInput.value;
        if (senhaDigitada === senhaCorreta) {
            // Senha correta, redirecione para a página protegida
            window.location.href = "pagina.protegida.html";
        } else {
            // Senha incorreta, exiba uma mensagem de erro (você pode personalizar isso)
            alert("Senha incorreta. Tente novamente.");
        }
        // Limpe o campo de senha
        passwordInput.value = "";
        // Feche o modal
        closePasswordModal();
    });

    // Evento de clique no botão "Fechar" no modal
    modalClose.addEventListener("click", function () {
        closePasswordModal();
    });

    // Evento para fechar o modal se o usuário clicar fora dele
    window.addEventListener("click", function (e) {
        if (e.target === passwordModal) {
            closePasswordModal();
        }
    });
});
