import React from 'react';
import '../app/globals.css';
import { FaHome } from 'react-icons/fa';
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import Link from 'next/link';

const Login = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div id="button-container">
    <Link href="/clothes_list">
    <IoIosArrowRoundBack size={32} />
    </Link>
    <img className="ml-20 mr-20" src="/garimpo_fashion.jpg" alt="Logo da Empresa"/>
    </div>
    <div className="bold fs-lg">
      Lojas
    </div>
    <input type="text" className="rounded-input" placeholder='Procurar...' name="search"></input>
    <div className="scrollable">
        <Link href="/show_store">
        <div className="card center mb-20">
            <img className="" src="/store1.jpg" alt="Logo da Empresa"/>
            <div className="bold">
                2WayClothes
            </div> 
            <div className="fs-sm">
               Praceta dos Melros Nº4
               <br></br>
               Coimbra
            </div>
            <div className="bold green fs-sm">
                Aberto
            </div>
        </div>
        </Link>
        <div className="card center mb-20">
            <img className="" src="/store2.jpg" alt="Logo da Empresa"/>
            <div className="bold">
                PlusStyle
            </div> 
            <div className="fs-sm">
               Rua do Mouzinho Nº8
               <br></br>
               Coimbra
            </div>
            <div className="bold red fs-sm">
                Fechado
            </div>
        </div>
    </div>
    </main>
  );
};

export default Login;