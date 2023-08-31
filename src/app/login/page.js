"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../page.module.css';


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
      
      <div className={styles.landig}>
      <h1 className={styles.title} >Bienvenidos a Argentask</h1> 
      <h2>Iniciar sesión</h2>
      <form  onSubmit={onSubmit}>
        <input
          type="email"
          placeholder="usuario@ejemplo.com"
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
    </div>
  );
};

export default Login;