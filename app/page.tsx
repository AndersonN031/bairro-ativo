'use client';

import { useState, useEffect } from 'react';
import { getUser } from './controllers/usersController';

export default function Home() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const fetchedUsers = await getUser();
        setUsers(fetchedUsers);
      } catch (error) {
        console.error('Failed to fetch users:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <div>Carregando...</div>;

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.length > 0 ? (
          users.map((user) => (
            <li key={user.ticket_id}>
              <strong>Nome:</strong> {user.nome_do_usuario} <br />
              <strong>Email:</strong> {user.email_do_usuario} <br />
              {/* Adicione mais campos conforme necessário */}
            </li>
          ))
        ) : (
          <li>Carregando...</li>
        )}
      </ul>
    </div>
  );
}
