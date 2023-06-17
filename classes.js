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
    constructor(numPed,itens,valorUni,quant,data){
        this.numPed = numPed;
        this.itens = itens;
        this.valorUni = valorUni;
        this.quant = quant;
        this.data = data;
    }
}
class Pagamento{
    constructor(subTotal,frete,total){
        this.subTotal = subTotal;
        this.frete = frete;
        this.total = total;
    }
}
