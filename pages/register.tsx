import React, { useState } from 'react';
import '../app/globals.css';
import { FaHome } from 'react-icons/fa';
import { IoImageOutline } from "react-icons/io5";
import Link from 'next/link';


const Login = () => {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div id="button-container">
    <Link href="/">
    <FaHome size={32} />
    </Link>
    <img id="logo" className="ml-20" src="/garimpo_fashion.jpg" alt="Logo da Empresa"/>
    </div>
    <div className="bold fs-lg">
      Criar Perfil
    </div>
    <label className="labelInput">Fotos</label>
    <IoImageOutline size={96} />
    <label className="labelInput">Nome</label>
    <input type="text" className="input" name="name"></input>
    <label className="labelInput">Email</label>
    <input type="email" className="input" name="email"></input>
    <label className="labelInput">Palavra-chave</label>
    <input type="password" className="input" name="password"></input>
    <label className="labelInput">Repetir Palavra-chave</label>
    <input type="password" className="input" name="password"></input>
    <label className="labelInput store">Morada</label>
    <input type="text" className="input store" name="password"></input>
    <label className="labelInput store">Horário</label>
    <input type="datetime" className="input store" name="password"></input>
    <label className="labelInput store">Tipo de Conta</label>
    <div id="button-container">
        <div id="button-container">
            <input type="radio" name="account"></input>
            <label className="radio-btn">Utilizador</label>
        </div>
        <div id="button-container">
            <input type="radio" name="account"></input>
            <label className="radio-btn">Loja</label>
        </div>
    </div>
    <Link href="/login">
    <button className="auth-btn bg-blue">Guardar</button>
    </Link>
    </main>
  );
};

export default Login;