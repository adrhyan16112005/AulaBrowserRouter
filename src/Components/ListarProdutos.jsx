import { Link } from "react-router-dom";

import React from 'react';

export default function ListarProdutos({ produtos, title }) {
    return (
        <div className="bloco-principal">
            <h1>{title}</h1>
            <div className="bloco-produtos">
                {produtos.map((produto) => (
                    <div key={produto.id} className="produto-item">
                        <img src={produto.imagem} alt={produto.nome} />
                        <p>{produto.nome}</p>
                        <p>{produto.preco}</p>
                        <p>{produto.descricao}</p>
                        {/* Se você precisar adicionar um botão "Quero", ele deve ser manipulado pelo componente pai */}
                    </div>
                ))}
            </div>
        </div>
    );
}

    
    
    return(
        <p>{title}</p>
    )
