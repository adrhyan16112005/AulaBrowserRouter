import { useState } from "react";
import Header from "../src/Components/Header";
import Footer from "../src/Components/Footer";
import ListarProdutos from "../src/Components/ListarProdutos";

export default function VeiculosAntigos() {
    const [veiculos, setVeiculos] = useState([
        {
            id: 1,
            nome: "Chevrolet Opala SS",
            imagem: "https://upload.wikimedia.org/wikipedia/commons/0/07/Chevrolet_Opala_1980.jpg",
            preco: "R$35.000",
            ano: 1972,
            cor: "Prata"
        },
        {
            id: 2,
            nome: "Ford Maverick",
            imagem: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Ford_Maverick_1973.jpg",
            preco: "R$45.000",
            ano: 1974,
            cor: "Verde"
        },
        {
            id: 3,
            nome: "Dodge Charger R/T",
            imagem: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Dodge_Charger_RT_1970.jpg",
            preco: "R$75.000",
            ano: 1978,
            cor: "Azul"
        },
        {
            id: 4,
            nome: "Puma GTE",
            imagem: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Puma_GTE_1976.jpg",
            preco: "R$55.000",
            ano: 1976,
            cor: "Amarelo"
        },
        {
            id: 5,
            nome: "VW Brasília",
            imagem: "https://upload.wikimedia.org/wikipedia/commons/d/d8/VW_Brasilia_1980.jpg",
            preco: "R$30.000",
            ano: 1980,
            cor: "Bege"
        },
        {
            id: 6,
            nome: "Fiat 147",
            imagem: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Fiat_147_1982.jpg",
            preco: "R$25.000",
            ano: 1982,
            cor: "Vermelho"
        },
        {
            id: 7,
            nome: "Chevrolet Chevette",
            imagem: "https://upload.wikimedia.org/wikipedia/commons/8/83/Chevrolet_Chevette_1984.jpg",
            preco: "R$40.000",
            ano: 1984,
            cor: "Azul Claro"
        },
        {
            id: 8,
            nome: "Opel Kadett",
            imagem: "https://upload.wikimedia.org/wikipedia/commons/8/87/Opel_Kadett_1982.jpg",
            preco: "R$28.000",
            ano: 1982,
            cor: "Cinza"
        },
        {
            id: 9,
            nome: "Ford Galaxie",
            imagem: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Ford_Galaxie_1968.jpg",
            preco: "R$50.000",
            ano: 1968,
            cor: "Preto"
        },
        {
            id: 10,
            nome: "Karmann Ghia",
            imagem: "https://upload.wikimedia.org/wikipedia/commons/5/56/Karmann_Ghia_1970.jpg",
            preco: "R$60.000",
            ano: 1970,
            cor: "Verde Escuro"
        },
        {
            id: 11,
            nome: "Mitsubishi L200",
            imagem: "https://upload.wikimedia.org/wikipedia/commons/3/35/Mitsubishi_L200_1985.jpg",
            preco: "R$70.000",
            ano: 1985,
            cor: "Marrom"
        },
        {
            id: 12,
            nome: "Land Rover Defender",
            imagem: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Land_Rover_Defender_1989.jpg",
            preco: "R$90.000",
            ano: 1989,
            cor: "Verde Militar"
        },
        {
            id: 13,
            nome: "Chevrolet C10",
            imagem: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Chevrolet_C10_1978.jpg",
            preco: "R$85.000",
            ano: 1978,
            cor: "Laranja"
        },
        {
            id: 14,
            nome: "VW Kombi",
            imagem: "https://upload.wikimedia.org/wikipedia/commons/2/27/Volkswagen_Kombi_1975.jpg",
            preco: "R$40.000",
            ano: 1975,
            cor: "Branco"
        },
        {
            id: 15,
            nome: "Fiat 126",
            imagem: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Fiat_126_1976.jpg",
            preco: "R$22.000",
            ano: 1976,
            cor: "Amarelo"
        },
        {
            id: 16,
            nome: "BMW 2002",
            imagem: "https://upload.wikimedia.org/wikipedia/commons/3/32/BMW_2002_1974.jpg",
            preco: "R$65.000",
            ano: 1974,
            cor: "Vermelho"
        },
        {
            id: 17,
            nome: "Mercedes-Benz 280 SE",
            imagem: "https://upload.wikimedia.org/wikipedia/commons/3/34/Mercedes-Benz_280_SE_1972.jpg",
            preco: "R$95.000",
            ano: 1972,
            cor: "Prata"
        },
        {
            id: 18,
            nome: "Alfa Romeo Spider",
            imagem: "https://upload.wikimedia.org/wikipedia/commons/2/22/Alfa_Romeo_Spider_1980.jpg",
            preco: "R$75.000",
            ano: 1980,
            cor: "Vermelho"
        },
        {
            id: 19,
            nome: "Pontiac Firebird",
            imagem: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Pontiac_Firebird_1975.jpg",
            preco: "R$85.000",
            ano: 1975,
            cor: "Azul Marinho"
        },
        {
            id: 20,
            nome: "Jaguar XJ6",
            imagem: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Jaguar_XJ6_1974.jpg",
            preco: "R$110.000",
            ano: 1974,
            cor: "Verde Escuro"
        }
    ]);

    return (
        <>
            <div className="cabecalho">
                <Header />
                <h1> todos os Veículos Clássicos</h1>
            </div>

            <ListarProdutos produtos={veiculos} />

            <div className="rodape">
                <Footer title={"Desenvolvido Por: Fernando"} />
            </div>
        </>
    );
}
