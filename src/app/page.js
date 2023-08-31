
import styles from './page.module.css'
import Link from 'next/link';
import Login from './login/page';
import Signup from './signup/page';

export default function Home() {
  return (
    <>
    <div className={styles.landig}>
    <h1 className={styles.title} >Bienvenidos a Argentask</h1> 
    <div className= {styles.loginContent} >
        <button> <Link href="/login">Login / Iniciar Sesion</Link> </button>
    
        <button> <Link href="/signup">Sign Up / Registrarse </Link> </button>
    </div>
    </div>
    </>
  )
}
