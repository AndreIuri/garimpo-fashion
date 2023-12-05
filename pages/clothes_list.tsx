import React from 'react';
import '../app/globals.css';
import { FaHome } from 'react-icons/fa';
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoStorefrontOutline } from "react-icons/io5";
import Link from 'next/link';

const Login = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div id="button-container">
    <Link href="/">
    <FaHome size={32} />
    </Link>
    <img className="ml-20 mr-20" src="/garimpo_fashion.jpg" alt="Logo da Empresa"/>
    <div className="inline-pd">
    <Link href="/add_clothe">
    <IoIosAddCircleOutline size={32} />
    </Link>
    <Link href="/stores_list">
    <IoStorefrontOutline size={32} />
    </Link>
    </div>
    </div>
    <div className="bold fs-lg">
      Roupas
    </div>
    <input type="text" className="rounded-input" placeholder='Procurar...' name="search"></input>
    <div className="scrollable">
        <Link href="/show_clothe">
        <div className="card mb-20">
            <img className="" src="/clothe1.jpg" alt="Logo da Empresa"/>
            <div className="inline">
                Fatinho de Menina
                <div className="bold">
                    10€
                </div> 
            </div>
        </div>
        </Link>
        <div className="card mb-20">
            <img className="" src="/clothe2.jpg" alt="Logo da Empresa"/>
            <div className="inline">
                Fatinho de Menina
                <div className="bold price">
                    8€
                </div> 
            </div>
        </div>
    </div>
    </main>
  );
};

export default Login;