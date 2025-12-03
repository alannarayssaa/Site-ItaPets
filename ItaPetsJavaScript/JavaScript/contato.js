document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector(".form-contato");
    const campos = form.querySelectorAll("input, textarea");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        Swal.fire({
            title: "Mensagem enviada!",
            text: "Seu e-mail foi enviado com sucesso.",
            icon: "success",
            confirmButtonText: "OK"
        });

        setTimeout(() => {
            form.submit();
        }, 1000);
    });

    campos.forEach(campo => {
        campo.addEventListener("blur", () => {
            if (!campo.checkValidity()) {
                campo.style.border = "2px solid #f7007fff";  
            } else {
                campo.style.border = "2px solid #003c81ff";  
            }
        });
    });

});
