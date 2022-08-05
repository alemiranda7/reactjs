import React from "react";

let alex = {
  cliente: "Alex",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Celular", preco: "R$ 3000" },
    { nome: "Geladeira", preco: "R$ 1500" },
  ],
  situacao: true,
};

let joyce = {
  cliente: "Joyce",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Celular", preco: "R$ 5600" },
    { nome: "Geladeira", preco: "R$ 8000" },
  ],
  situacao: false,
};

let dados = joyce;

const App = () => {
  let total = dados.compras
    .map((item) => +item.preco.replace("R$ ", ""))
    .reduce((a, b) => a + b);

  return (  
    <>
      <div>
        <p>Nome: {dados.cliente}</p>
        <p>Idade: {dados.idade}</p>
        <p>
          Situação: {' '}
          <span style={{ color: dados.situacao ? "green" : "red" }}>
            {dados.situacao ? "Ativo" : "Inativo"}
          </span>
        </p>
        <p>Total: {total}</p>
        <p>{total > 10000 && ''}</p>
      </div>
    </>
  );
};

export default App;
