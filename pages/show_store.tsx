import React from 'react';
import '../app/globals.css';
import { FaHome } from 'react-icons/fa';
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoImageOutline } from "react-icons/io5";
import { IoPencil } from "react-icons/io5";
import { IoStar } from "react-icons/io5";
import Link from 'next/link';

const Login = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div id="button-container">
    <Link href="/stores_list">
    <IoIosArrowRoundBack size={32} />
    </Link>
    <img className="ml-20 mr-20" src="/garimpo_fashion.jpg" alt="Logo da Empresa"/>
    <IoPencil size={32} />
    </div>
    <label className="labelInput">Fotos</label>
    <img id="edit_clothe_img" src="/store1.jpg" alt="Logo da Empresa"/>
    <div className="inline-block pd-20 w-300">
        <label className="counter-photos">1/1Fotos</label>
    </div>
    <label className="labelInput">Nome da Loja</label>
    <input type="text" className="input" name="name" value="2WayClothes"></input>
    <label className="labelInput">Morada da Loja</label>
    <input type="text" className="input" name="name" value="Praceta dos Melros Nº4, Coimbra"></input>
    <label className="labelInput">Horário de Funcionamento</label>
    <div className="inline-block pd-20 w-300">
        <input type="text" className="half-input" name="name" value="09h30 - 19h:00"></input>
        <button className="half-input open-store" name="open">Aberto</button>
    </div>
    <label className="labelInput">Criticas</label>
    <div className="inline pd-20 w-200" style={{color: '#F6BE00'}}>
        <IoStar size={32} />
        <IoStar size={32} />
        <IoStar size={32} />
        <IoStar size={32} />
        <IoStar size={32} />
    </div>

    </main>
  );
};

export default Login;