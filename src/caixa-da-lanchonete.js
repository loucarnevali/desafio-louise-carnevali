class CaixaDaLanchonete {
  //Definindo o carápio e o método de pagamento
  constructor(itens, metodoDePagamento) {
    this.itens = {
      cafe: { descricao: "Café", valor: 3.0 },
      chantily: { descricao: "Chantily (extra do Café)", valor: 1.5 },
      suco: { descricao: "Suco Natural", valor: 6.2 },
      sanduiche: { descricao: "Sanduíche", valor: 6.5 },
      queijo: { descricao: "Queijo (extra do Sanduíche)", valor: 2.0 },
      salgado: { descricao: "Salgado", valor: 7.25 },
      combo1: { descricao: "1 Suco e 1 Sanduíche", valor: 9.5 },
      combo2: { descricao: "1 Café e 1 Sanduíche", valor: 7.5 },
    };

    this.metodoDePagamento = ["dinheiro", "debito", "credito"];
  }

  calcularValorDaCompra(metodoDePagamento, itens) {
    //Verifica se a forma de pagamento é válida
    if (!this.metodoDePagamento.includes(metodoDePagamento)) {
      return "Forma de pagamento inválida!";
    }

    //Verifica se há itens no carrinho de compra
    if (itens.length == 0) {
      return "Não há itens no carrinho de compra!";
    }

    return;
  }
}

export { CaixaDaLanchonete };
