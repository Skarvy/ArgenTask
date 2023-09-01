"use client"
import React, { useState } from 'react';
import styles from './signup.module.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que la contraseña y la confirmación de la contraseña sean iguales
    if (password !== confirmPassword) {
      alert('La contraseña y la confirmación de la contraseña no coinciden');
      return;
    }

    // Enviar los datos del formulario al servidor
    // ...

    // Redirigir al usuario a la página de inicio de sesión
    window.location.href = '/login';
  };

  return (
    
      <div className={styles.landing}>  
      <h1 className={styles.title} >Argentask</h1> 
      <h2 className={styles.title}>Sign Up / Registro</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          className={styles.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Apellido"
          className={styles.input}
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          className={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirmar contraseña"
          className={styles.input}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button className={styles.button} type="submit">Sign Up / Registrarse</button>
      </form>
    </div>
  );
};

export default Signup;