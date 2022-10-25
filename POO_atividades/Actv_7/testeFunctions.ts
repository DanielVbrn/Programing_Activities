import {Produto,ProdutoPerecivel,Estoque} from "./5_Produtos"
let estoque:Estoque = new Estoque(new ProdutoPerecivel("35", "sabão em pó", "sabão pra lavar sua roupa", 4, 3.50, new Date("2022-07-23")));


let chocolate: Produto , biscoito: ProdutoPerecivel, petisco:Produto;

chocolate = new Produto('4', 'Sabão', 'chocolate sonho de valsa', 5, 5.0);
biscoito = new ProdutoPerecivel('32', 'Biscoito', 'biscoito de chcolate', 10, 1.50, new Date('2023-01-12'));


petisco = new Produto("12", "petisco sabor cebola","petisco com gosto de cebola", 13, 2.00)
estoque.inserir(chocolate);
estoque.inserir(biscoito);
estoque.inserir(petisco);


console.log('Produtos:');
estoque.mostrarProdutos();
console.log('====================');
estoque.mostrarProdutos();
console.log('====================');

estoque.darBaixa('4', 4);
estoque.darBaixa('32', 5);
estoque.darBaixa('12', 1);

estoque.repor('32', 4);
estoque.repor('12', 2);

estoque.mostrarProdutos();
console.log('Produtos exluídos: ');
estoque.excluir('5');
console.log('======================');
estoque.validarProdutosVencidos();

