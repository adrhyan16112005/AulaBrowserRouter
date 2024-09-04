import React, { useState } from 'react';
import Header from "../Components/Header";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "../globals.css";
import Footer from "../Components/Footer";
import ListarProdutos from "../Components/ListarProdutos";

export default function Minhaprodutos() {
    const [listaProdutos, setProdutos] = useState([
        {
            id: 1,
            nome: "Tesla Model 3",
            imagem: "https://img.olx.com.br/images/66/664438198050714.jpg",
            preco: "R$250.000",
            ano: 2024,
            cor: "Branco"
        },
        {
            id: 2,
            nome: "Porsche Taycan",
            imagem: "https://robbreport.com/wp-content/uploads/2020/04/1-6.jpg",
            preco: "R$1.200.000",
            ano: 2025,
            cor: "Preto"
        },
        {
            id: 3,
            nome: "BMW iX",
            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSiQ-D0VyDRhgSZ5yjs5aOcKS13dtZa5R-hg",
            preco: "R$950.000",
            ano: 2024,
            cor: "Azul"
        },
        {
            id: 4,
            nome: "Mercedes-Benz EQS",
            imagem: "https://blog.jocar.com.br/wp-content/uploads/2019/06/willys_rural_4-990x660.jpg",
            preco: "R$1.300.000",
            ano: 2025,
            cor: "Cinza"
        },
        {
            id: 5,
            nome: "Audi e-tron GT",
            imagem: "https://img.olx.com.br/images/57/573483542372272.jpg",
            preco: "R$1.100.000",
            ano: 2024,
            cor: "Vermelho"
        },
        {
            id: 6,
            nome: "Tesla Model S Plaid",
            imagem: "https://img.olx.com.br/images/66/664438198050714.jpg",
            preco: "R$1.500.000",
            ano: 2025,
            cor: "Branco"
        },
        {
            id: 7,
            nome: "Rivian R1T",
            imagem: "https://robbreport.com/wp-content/uploads/2020/04/1-6.jpg",
            preco: "R$800.000",
            ano: 2024,
            cor: "Verde"
        },
        {
            id: 8,
            nome: "Lucid Air",
            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSiQ-D0VyDRhgSZ5yjs5aOcKS13dtZa5R-hg",
            preco: "R$1.000.000",
            ano: 2025,
            cor: "Prata"
        },
        {
            id: 9,
            nome: "Polestar 3",
            imagem: "https://blog.jocar.com.br/wp-content/uploads/2019/06/willys_rural_4-990x660.jpg",
            preco: "R$900.000",
            ano: 2024,
            cor: "Azul"
        },
        {
            id: 10,
            nome: "Cadillac Lyriq",
            imagem: "https://img.olx.com.br/images/57/573483542372272.jpg",
            preco: "R$950.000",
            ano: 2025,
            cor: "Preto"
        },
        {
            id: 11,
            nome: "Fisker Ocean",
            imagem: "https://img.olx.com.br/images/66/664438198050714.jpg",
            preco: "R$700.000",
            ano: 2024,
            cor: "Verde"
        },
        {
            id: 12,
            nome: "Hyundai Ioniq 6",
            imagem: "https://robbreport.com/wp-content/uploads/2020/04/1-6.jpg",
            preco: "R$750.000",
            ano: 2025,
            cor: "Azul"
        },
        {
            id: 13,
            nome: "Volvo EX90",
            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSiQ-D0VyDRhgSZ5yjs5aOcKS13dtZa5R-hg",
            preco: "R$800.000",
            ano: 2024,
            cor: "Branco"
        },
        {
            id: 14,
            nome: "Jaguar I-PACE",
            imagem: "https://blog.jocar.com.br/wp-content/uploads/2019/06/willys_rural_4-990x660.jpg",
            preco: "R$850.000",
            ano: 2025,
            cor: "Preto"
        },
        {
            id: 15,
            nome: "Ford Mustang Mach-E",
            imagem: "https://img.olx.com.br/images/57/573483542372272.jpg",
            preco: "R$900.000",
            ano: 2024,
            cor: "Vermelho"
        }
    ]);

    return (
        <>
            <div className="cabecalho">
                <Header />
                <h1>Loja de Carros Novos</h1>
            </div>
            <Carousel
                infiniteLoop
                useKeyboardArrows
                autoPlay
                showArrows={true}
                showStatus={false}
                showThumbs={false}
                dynamicHeight
            >
                <div>
                    <img src="https://static1.topspeedimages.com/wordpress/wp-content/uploads/2023/07/1793667_1.jpg" alt="Ford Mustang Mach-E" />
                </div>
                <div>
                    <img src="https://garagemdobellotetv.com.br/wp-content/uploads/2021/07/toyota-bandeirante_garagem-do-bellote_renato-bellote.jpeg" alt="Hyundai Ioniq 6" />
                </div>
                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Blackrock%2C_Co_Dublin_-_Ireland_%284799982672%29.jpg/1920px-Blackrock%2C_Co_Dublin_-_Ireland_%284799982672%29.jpg" alt="Tesla Model 3" />
                </div>        
            </Carousel>
            <ListarProdutos produtos={listaProdutos} />
    
            <div className="rodape">
                <Footer />
            </div>
        </>
    );
}
