import Image from 'next/image'
import { redirect } from 'next/navigation';
import Link from 'next/link';
import '../app/globals.css';

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <img id="logo" className="img" src="/garimpo_fashion.jpg" alt="Logo da Empresa"/>
    <img id="logo" className="img" src="/roupa_inicial.jpg" alt="Logo da Empresa"/>
    <div id="button-container">
      <Link href="/login">
        <button className="auth-btn">Log In</button>
      </Link>
      <Link href="/register">
        <button className="auth-btn">Criar Perfil</button>
      </Link>
    </div>
    </main>
  )
}
