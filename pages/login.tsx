import React from 'react';
import '../app/globals.css';
import { FaHome } from 'react-icons/fa';
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
      Log In
    </div>
    <div className="bold fs-sm">
      As melhores roupas em segunda mão com as melhores avaliações num só espaço!
    </div>
    <img id="login_img" className="img" src="/login.jpg" alt="Logo da Empresa"/>
    <label className="labelInput">Email</label>
    <input type="email" className="input" name="email"></input>
    <label className="labelInput">Palavra-chave</label>
    <input type="password" className="input" name="password"></input>
    <Link href="/clothes_list">
    <button className="auth-btn bg-blue">Entrar</button>
    </Link>
    </main>
  );
};

export default Login;