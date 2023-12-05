import React from 'react';
import '../app/globals.css';
import { FaHome } from 'react-icons/fa';
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoPencil } from "react-icons/io5";
import Link from 'next/link';

const Login = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div id="button-container">
    <Link href="/clothes_list">
    <IoIosArrowRoundBack size={32} />
    </Link>
    <img className="ml-20 mr-20" src="/garimpo_fashion.jpg" alt="Logo da Empresa"/>
    <Link href="/edit_clothe">
    <IoPencil size={32} />
    </Link>
    </div>
    <img className="" src="/clothe1.jpg" alt="Logo da Empresa"/>
    <div className="inline pd-20 w-300">
        <div className="bold">
            10€
        </div> 
        1/1 Fotos
    </div>
    <div className="inline bold">
        Fatinho de Menina
    </div>
    <div className="clothe-description">
        Fatinho de menina (1-2 anos) da marca Mamati.<br></br>
        Pouco utilizado e em muito bom estado.
    </div>
    <div className="clothe-description">
        <div className="inline">
            <div className="bold">
                Loja:&nbsp;
            </div>
            2WayClothes
        </div>
    </div>

    <div className="card comment mb-10">
        <div className="inline">
            <div className="bold">
                Maria M.&nbsp;
            </div>
            31/10/2023&nbsp;18:32
        </div>
        <div className="inline">
            Boa relação de preço/qualidade!
        </div>
    </div>
    <div className="card comment mb-10">
        <div className="inline">
            <div className="bold">
               Carla G.&nbsp;
            </div>
            30/10/2023&nbsp;17:12
        </div>
        <div className="inline">
            Vi o artigo e vale a pena. Muito bom estado.
        </div>
    </div>
    <Link href="/add_comment">
    <IoIosAddCircleOutline size={16} />
    </Link>
    </main>
  );
};

export default Login;