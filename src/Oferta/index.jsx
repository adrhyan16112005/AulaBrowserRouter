import { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ListarProdutos from "../Components/ListarProdutos";

export default function MinhaOferta() {
    const [carrosAntigos, setCarrosAntigos] = useState([
        {
            id: 1,
            nome: "Chevrolet Opala SS",
            imagem: "https://www.autoblog.com.br/wp-content/uploads/2020/05/chevrolet_opala_1.jpg",
            preco: "R$35.000",
            ano: 1972,
            cor: "Prata"
        },
        {
            id: 2,
            nome: "Ford Maverick",
            imagem: "https://www.autopapo.com.br/wp-content/uploads/2020/04/ford-maverick-2-1.jpg",
            preco: "R$45.000",
            ano: 1974,
            cor: "Verde"
        },
        {
            id: 3,
            nome: "Dodge Charger R/T",
            imagem: "https://www.autoblog.com.br/wp-content/uploads/2021/09/dodge-charger-rt.jpg",
            preco: "R$75.000",
            ano: 1978,
            cor: "Azul"
        },
        {
            id: 4,
            nome: "Puma GTE",
            imagem: "https://www.autoblog.com.br/wp-content/uploads/2021/06/puma-gte.jpg",
            preco: "R$55.000",
            ano: 1976,
            cor: "Amarelo"
        },
        {
            id: 5,
            nome: "VW Brasília",
            imagem: "https://www.autopapo.com.br/wp-content/uploads/2020/05/vw-brasilia-2.jpg",
            preco: "R$30.000",
            ano: 1980,
            cor: "Bege"
        },
    
    ]);

    return (
        <>
            <div className="cabecalho">
                <Header />
                <h1>Ofertas de Carros Antigos</h1>
            </div>

            <ListarProdutos produtos={carrosAntigos} />

            <div className="rodape">
                <Footer title= 'Desenvolvido Por fernando' />
            </div>
        </>
    );
}
