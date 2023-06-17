//Classe Cliente
//Classe Loja
//Classe Pedido
//Classe Pagamento

class Cliente{
    constructor(nome,tel,endDeEntrega,cpf){
        this.nome = nome;
        this.tel = tel;
        this.endDeEntrega = endDeEntrega;
        this.cpf = cpf;

    }
}
class Loja{
    constructor(nome,cnpj){
        this.nome = nome;
        this.cnpj = cnpj;
    }
}
class Pedido{
    constructor(numPed,data,subTotal,frete,total,cliente,loja,itensDoPedido){
        this.numPed = numPed;
        this.data = data;
        this.subTotal = subTotal;  // valor sem frete
        this.frete = frete;
        this.total = total;        // valor com frete
        this.cliente = cliente; 
        this.loja = loja;
        this.itensDoPedido = itensDoPedido;
    }
    calcularSubTotal(){
        let subTotal = 0;
        for (let i = 0; i < this.itensDoPedido.length; i++) {
            subTotal += this.itensDoPedido[i].calcularTotalItem();
        }
        return subTotal;
    }
    calcularTotal(){
        return calcularSubTotal() + this.frete
    }
}
class Produto{
    constructor(nomeDoProd,valorUni){
        this.nomeDoProd = nomeDoProd;
        this.valorUni = valorUni;
    }
}
class ItemDoPedido{
    constructor(quant,produto){
        this.produto = produto
        this.quant = quant;
    }
    calcularTotalItem(){
        return this.produto.valorUni * this.quant
    }
}

//objetos:
let prod1 = new Produto(
    "Capacete",
     500.00,
)
let prod2 = new Produto(
    "Cotoveleira",
    85.00,
)

let item1 = new ItemDoPedido(1, prod1);
let item2 = new ItemDoPedido(2, prod2)