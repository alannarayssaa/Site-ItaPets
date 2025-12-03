document.addEventListener("DOMContentLoaded", () => {
    const tel = document.querySelector("#telefone");

    if (tel) {
        VMasker(tel).maskPattern("99999-9999");
    }
});
