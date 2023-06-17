create database notaFiscal;
use notaFiscal;

create table cliente(
nome varchar(50),
tel varchar(50),
cpf varchar(14),
endDeEntrega varchar(50),
primary key (cpf)
);
create table loja(
nome varchar(50),
cnpj varchar(18),
primary key (cnpj)
);
create table pedido(
 numPed int,
 diaPed varchar(10),
 frete double,
 FK_cpf_cliente varchar(14),
 FK_cnpj_loja varchar(18),
 FOREIGN KEY (FK_cpf_cliente) REFERENCES cliente(cpf),
 FOREIGN KEY (FK_cnpj_loja) REFERENCES loja(cnpj),
 primary key (numPed)
);
create table produto(
idDoProd int,
nomeDoProd varchar(50),
valorUni double,
primary key (idDoProd)
);

create table itemDoPedido(
produto varchar(50),
quant int,
FK_idDoProd int,
FK_numPed int,
FOREIGN KEY (FK_numPed) REFERENCES pedido(numPed),
FOREIGN KEY (FK_idDoProd) REFERENCES produto(idDoProd),
primary key (FK_numPed,FK_idDoProd)

);
