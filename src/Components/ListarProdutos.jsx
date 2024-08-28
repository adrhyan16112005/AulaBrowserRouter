import React from 'react';

export default function ListarProdutos({ produtos, title}) {
    return (
        <div className="bloco-principal">
            <h1>{title}</h1>
            <div className="bloco-produtos">
                {produtos.map((produto) => (
                    <div key={produto.id} className="produto-item">
                        <img src={produto.imagem} alt={produto.nome} />
                        <p>{produto.nome}</p>
                        <p>{produto.preco}</p>
                        <p>Ano: {produto.ano}</p>
                        <p>Cor: {produto.cor}</p>
            
                    </div>
                ))}
            </div>
        </div>
    );
}