import React, { useState } from 'react';
import Header from "../Components/Header";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "../globals.css";
import Footer from "../Components/Footer";
import ListarProdutos from "../Components/ListarProdutos";

export default function MinhaHome() {
    const [listaProdutos, setProdutos] = useState([
        {
            id: 1,
            nome: "Volkswagen Parati CL 1.8",
            imagem: "https://www.motor1.com/images/mgl/jz5le/s1/volkswagen-parati.jpg",
            preco: "R$29.990",
            ano: 1992,
            cor: "Verde"
        },
        {
            id: 2,
            nome: "Porsche 911 Turbo",
            imagem: "https://www.porsche.com/mediacenter/pdfs/911-turbo.jpg",
            preco: "R$85.000",
            ano: 2023,
            cor: "Vermelho"
        },
        {
            id: 3,
            nome: "Volkswagen Karmann Ghia",
            imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Volkswagen_Karmann_Ghia.jpg/1200px-Volkswagen_Karmann_Ghia.jpg",
            preco: "R$180.000",
            ano: 1970,
            cor: "Amarelo"
        },
        {
            id: 4,
            nome: "Willys Rural 3.0",
            imagem: "https://www.automaistv.com.br/wp-content/uploads/2021/08/Willys-Rural-2021-01.jpg",
            preco: "R$40.000",
            ano: 1975,
            cor: "Azul"
        },
        {
            id: 5,
            nome: "Jeep Wrangler TJ 1999",
            imagem: "https://cdn.autopapo.com.br/wp-content/uploads/2022/01/jeep-wrangler-tj-1999.jpg",
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
