let prato_selecionado = false;
let sobremesa_selecionada = false;
let bebida_selecionada = false;
let telefone = "5587988156550"

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
        botao_pedir.removeAttribute("disabled");
        botao_pedir.classList.add("liberado");
        botao_pedir.innerText = "Fechar pedido";
    }
}
function pedir(){
    const selecionados = document.querySelectorAll(".selecionado"); //Encontra todos os elementos com a classe "selecionado"
    let pratos = [];
    let precos = [];
    let total = 0;
    selecionados.forEach(element => {
        pratos.push(element.querySelector("p").innerText); //dentro dos elementos com a classe 'selecionado' seleciona o primeiro parágrafo (título)
        precos.push(element.querySelector("p:nth-child(4)").innerText); //dentro dos elementos com a classe 'selecionado' seleciona o último parágrafo (preço)
    });
    precos.forEach(element => { //calcula o total
        let temp = element.replace('R$ ','');
        temp = temp.replace(',','.');
        temp = Number(temp);
        total += temp;
    });
    total = total.toFixed(2);
    let nome = prompt("Informe seu nome:");
    while(nome == ''){
        nome = prompt("Você precisa informar seu nome!");
    }
    let endereco = prompt("Informe o endereço para entrega!");
    while(endereco == ''){
        endereco = prompt("Informe o endereço para que possamos fazer a entrega!");
    }
    const mensagem = `Olá, gostaria de fazer o pedido:\n- Prato: ${pratos[0]}\n- Bebida: ${pratos[1]}\n- Sobremesa: ${pratos[2]}\nTotal: R$ ${(total.toString()).replace('.',',')}\n\nNome: ${nome}\nEndereço: ${endereco}`;
    window.open(`https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`, "_blank")
}