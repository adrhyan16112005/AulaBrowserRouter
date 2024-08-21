import React, { useState } from 'react';
import ListarProdutos from '../components/ListarProdutos';

export default function MinhaOferta() {
    const [listaProdutos, setProdutos] = useState([
        {
            id: 1,
            item: "Volkswagen Parati Cl 1.8",
            imagem: "https://http2.mlstatic.com/D_NQ_NP_813899-MLB74110126265_012024-O.webp",
            preco: "R$29.990. 1992. "
        },
        {
            id: 2,
            item: "Fercar Porshe Spider 911. Turbo.",
            imagem: "https://http2.mlstatic.com/D_NQ_NP_813297-MLB73447040107_122023-O.webp",
            preco: "R$85.000. ."
        },
        {
            id: 3,
            item: "Volkswagen Karmann Ghia Ghia.",
            imagem: "https://http2.mlstatic.com/D_NQ_NP_992113-MLB76245013840_052024-O.webp",
            preco: "R$180.000"
        },
        {
            id: 4,
            item: "Willys Rural 3.0",
            imagem: "https://http2.mlstatic.com/D_NQ_NP_913811-MLB77053130834_062024-O.webp",
            preco: "R$40.000"
        },
        {
            id: 5,
            item: "Jeep Wrangler Tj 1999",
            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyDbvGrf5zD0YOh1ej_7hWpOTyPnVbwcm14w&s",
            preco: 'R$110.000'
        },
    ]);

    return (
        <div>
            <h1>Minhas Ofertas</h1>
            <ListarProdutos produtos={listaProdutos} title="Ofertas Especiais" />
        </div>
    );
}
