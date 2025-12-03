const barraPesquisa = document.querySelector("#barra-pesquisa");
const produtos = document.querySelectorAll(".products-grid article");

barraPesquisa.addEventListener("input", () => {
    const termo = barraPesquisa.value.toLowerCase();

    produtos.forEach(produto => {
        const titulo = produto.querySelector("h3").textContent.toLowerCase();

        if (titulo.includes(termo)) {
            produto.style.display = "block";
        } else {
            produto.style.display = "none";
        }
    });
});
