import React, { useState } from 'react';
import Header from "./Header";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "../globals.css";
import Footer from "./Footer";
import ListarProdutos from "./ListarProdutos";

export default function MinhaHome() {
    const [listaProdutos, setProdutos] = useState([
        {
            id: 1,
            nome: "Volkswagen Parati CL 1.8",
            imagem: "https://img.olx.com.br/images/66/664438198050714.jpg",
            preco: "R$29.990",
            ano: 1993,
            cor: "Verde"
        },
        {
            id: 2,
            nome: "Porsche 911 Turbo",
            imagem: "https://robbreport.com/wp-content/uploads/2020/04/1-6.jpg?w=1000.jpg",
            preco: "R$85.000",
            ano: 2023,
            cor: "Vermelho"
        },
        {
            id: 3,
            nome: "Volkswagen Karmann Ghia",
            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSiQ-D0VyDRhgSZ5yjs5aOcKS13dtZa5R-hg&s.jpg",
            preco: "R$180.000",
            ano: 1970,
            cor: "Amarelo"
        },
        {
            id: 4,
            nome: "Willys Rural 3.0",
            imagem: "https://blog.jocar.com.br/wp-content/uploads/2019/06/willys_rural_4-990x660.jpg",
            preco: "R$40.000",
            ano: 1975,
            cor: "Azul"
        },
        {
            id: 5,
            nome: "Jeep Wrangler TJ 1999",
            imagem: "https://img.olx.com.br/images/57/573483542372272.jpg",
            preco: "R$110.000",
            ano: 1999,
            cor: "Preto"
        },
    ]);

    return (
        <>
            <div className="cabecalho">
                <Header />
                <h1>loja de carros Antigos</h1>
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
                    <img src="https://static1.topspeedimages.com/wordpress/wp-content/uploads/2023/07/1793667_1.jpg?q=50&fit=crop&w=1100&h=618&dpr=1.5.jpg" alt="Jeep Wrangler TJ 1999"/>
                </div>
                <div>
                    <img src="https://garagemdobellotetv.com.br/wp-content/uploads/2021/07/toyota-bandeirante_garagem-do-bellote_renato-bellote.jpeg?w=1024.jpg" alt="Toyota Bandeirante"/>
                </div>
                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Blackrock%2C_Co_Dublin_-_Ireland_%284799982672%29.jpg/1920px-Blackrock%2C_Co_Dublin_-_Ireland_%284799982672%29.jpg" alt="BMW 2002"/>
                </div>        
            </Carousel>
    
            <ListarProdutos produtos={listaProdutos} />
    
            <div className="rodape">
                <Footer title={"Desenvolvido por: Fernando"} />
            </div>
        </>
    );
}
