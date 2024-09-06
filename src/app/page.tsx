// 'use client';

import { getServerSession } from 'next-auth';
import { authOptions } from '../lib/auth';
import Sidebar from '../components/sideBarComponente';
import { redirect } from 'next/navigation';


export default async function Home() {

  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect('/login')
  }

  return (
    <div>
      <Sidebar />
      <h1>Dashboard</h1>
      <p>Por favor faça login para acessar o Dashboard do Administrador! </p>

    </div>
  );

}
