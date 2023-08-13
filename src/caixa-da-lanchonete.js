class CaixaDaLanchonete {
  constructor() {
    // Define o cardápio da lanchonete com código, descrição e valor
    this.cardapio = [
      { codigo: "cafe", descricao: "Café", valor: 3.0 },
      { codigo: "chantily", descricao: "Chantily (extra do Café)", valor: 1.5 },
      { codigo: "suco", descricao: "Suco Natural", valor: 6.2 },
      { codigo: "sanduiche", descricao: "Sanduíche", valor: 6.5 },
      {
        codigo: "queijo",
        descricao: "Queijo (extra do Sanduíche)",
        valor: 2.0,
      },
      { codigo: "salgado", descricao: "Salgado", valor: 7.25 },
      { codigo: "combo1", descricao: "1 Suco e 1 Sanduíche", valor: 9.5 },
      { codigo: "combo2", descricao: "1 Café e 1 Sanduíche", valor: 7.5 },
    ];

    // Define as formas de pagamento
    this.formasDePagamento = ["dinheiro", "debito", "credito"];
  }

  calcularValorDaCompra(metodoDePagamento, itens) {
    // Verifica se a forma de pagamento é válida
    if (!this.formasDePagamento.includes(metodoDePagamento)) {
      return "Forma de pagamento inválida!";
    }

    // Verifica se há itens a serem comprados
    if (itens.length === 0) {
      return "Não há itens no carrinho de compra!";
    }

    let valorTotal = 0;
    let itensPrincipais = [];

    // Itera pelos itens do carrinho para calcular o valor total da compra
    for (const itemPedido of itens) {
      const [codigoItem, quantidade] = itemPedido.split(",");
      // Encontra o item no cardápio pelo código
      const itemCardapio = this.cardapio.find(
        (item) => item.codigo === codigoItem
      );

      // Verifica se o item do pedido é válido
      if (!itemCardapio) {
        return "Item inválido!";
      }

      //Verifica se a quantidade é válida
      const quantidadeValida = parseInt(quantidade);

      if (quantidadeValida === 0) {
        return "Quantidade inválida!";
      }

      // Calcula o valor do item multiplicado pelo seu valor unitário e somado ao valor total
      valorTotal += itemCardapio.valor * quantidadeValida;

      // Verifica se o item possui extras e adiciona o valor deles
      if (codigoItem !== "chantily" && codigoItem !== "queijo") {
        itensPrincipais.push(codigoItem);
      } else {
        // Verifica se o item extra tem o item principal correspondente
        if (!itensPrincipais.includes("cafe") && codigoItem === "chantily") {
          return "Item extra não pode ser pedido sem o principal";
        }
        if (!itensPrincipais.includes("sanduiche") && codigoItem === "queijo") {
          return "Item extra não pode ser pedido sem o principal";
        }
      }
    }

    // Aplica desconto se for pagamento em dinheiro
    if (metodoDePagamento === "dinheiro") {
      valorTotal *= 0.95; // 5% de desconto
    }

    // Aplica acréscimo se for pagamento a crédito
    if (metodoDePagamento === "credito") {
      valorTotal *= 1.03; // 3% de acréscimo
    }

    // Arredonda e formata o valor total como moeda
    const valorFormatado = valorTotal.toFixed(2).replace(".", ",");

    return `R$ ${valorFormatado}`;
  }
}

export { CaixaDaLanchonete };
