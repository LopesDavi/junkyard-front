import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import LogoJunkard from "../../public/images/junkyard-icon.png";
export default function InitialPage() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container1}>
          <Image
            src={LogoJunkard}
            alt="Logo da plataforma"
            width={60}
            height={60}
          />
          <p>Junkyard</p>
        </div>
        <div className={styles.container2}>
          <h2>Use nosso app gratuitamente</h2>
          <div className={styles.verticalbar}></div>
          <Link href="">Fazer login</Link>
        </div>
      </header>
      <main className={styles.main}>
        <p>
          <span>Seja bem-vindo(a) ao Junkard.</span>
          <br />
          O espaço onde você<br/>
          pode montar e editar seu treino e dieta
          <br />
          com facilidade e rapidez.
        </p>
        <div className={styles.cards}>
          <div className={styles.card}>
            <p>Nossa motivação é ajudar a propagar um estilo de vida saudável.</p>
          </div>
          <div className={styles.card}>
            <p>Nosso app possui uma UX intuitiva que possibilita que qualquer pessoa o utilize.</p>
          </div>
          <div className={styles.card}>
            <p>Nosso app está em constante evolução...</p>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.logo}>
        <Image
            src={LogoJunkard}
            alt="Logo da plataforma"
            width={60}
            height={60}
          />
          <p>Junkyard</p>
        </div>
        <div className={styles.midiasocial}>
          <Link href="">Insta</Link>
          <Link href="">Email</Link>
          <Link href="">YouTube</Link>
        </div>
      <p>© 2023 Junkyard. Todos os direitos reservados</p>
      </footer>
    </>
  );
}
