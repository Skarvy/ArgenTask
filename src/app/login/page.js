"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const users = [
  {
    email: 'usuario@ejemplo.com',
    password: 'contraseña',
  },
];

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const onSubmit = (e) => {
    e.preventDefault();

    // Validar los datos de inicio de sesión
    if (!email || !password) {
      return;
    }

    // Buscar al usuario en el array
    const user = users.find((u) => u.email === email);

    // Si el usuario existe, iniciar sesión
    if (user) {
      if (user.password === password) {
        router.push('/taskboard');
      } else {
        alert('La contraseña es incorrecta.');
      }
    } else {
      alert('El usuario no existe.');
    }
  };

  return (
    <div>
      <h1>Iniciar sesión</h1>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;