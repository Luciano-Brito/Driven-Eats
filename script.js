let prato_selecionado = false;
let sobremesa_selecionada = false;
let bebida_selecionada = false;

function selecionar(item){
    const pai = item.parentElement;
    const selecionado = pai.querySelector(".selecionado");
    const botao_pedir = document.querySelector(".rodape button");
    if(selecionado !== null){
        selecionado.classList.remove("selecionado");
        selecionado.querySelector("ion-icon").classList.add("escondido");
    }
    item.classList.add("selecionado");
    item.querySelector("ion-icon").classList.remove("escondido");

    prato_selecionado = pai.classList.contains("prato") ? true : prato_selecionado;
    sobremesa_selecionada = pai.classList.contains("sobremesa") ? true : sobremesa_selecionada;
    bebida_selecionada = pai.classList.contains("bebida") ? true : bebida_selecionada;

    const faltam = 3-prato_selecionado-sobremesa_selecionada-bebida_selecionada;

    botao_pedir.innerText = `Selecione mais ${faltam} ${faltam > 1 ? "itens": "item"} para fechar o pedido`;

    if(faltam == 0){
        botao_pedir.classList.add("liberado");
        botao_pedir.innerText = "Fechar pedido";
    }
}