import React from 'react';
import '../app/globals.css';
import { FaHome } from 'react-icons/fa';
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoImageOutline } from "react-icons/io5";
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
    <label className="labelInput">Fotos</label>
    <IoImageOutline size={96} />
    <label className="labelInput">Titulo do Artigo</label>
    <input type="text" className="input" name="name"></input>
    <label className="labelInput">Preço</label>
    <input type="number" className="input" name="price"></input>
    <label className="labelInput">Loja</label>
    <select className="input" name="store">
        <option selected value=""></option>
        <option value="2WayClothes">2WayClothes</option>
        <option value="PlusStyle">PlusStyle</option>
    </select>
    <label className="labelInput">Descrição do artigo</label>
    <textarea className="input txt-area" name="description"></textarea>
    
    <Link href="/clothes_list">
        <div className="labelInput">
            <button className="save-btn bg-blue">Guardar</button>
        </div>
    </Link>
    </main>
  );
};

export default Login;