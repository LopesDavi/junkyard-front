import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import LogoJunkyardBlackBgRemove from "../../public/images/junkyard-icon-black-bg-remove.png";
import LogoJunkyardRedBgRemove from "../../public/images/junkyard-icon-red-bg-remove.png";
import { RiYoutubeLine, RiInstagramLine, RiMailSendLine } from "react-icons/ri";
import IconDumbbells from "../../public/images/icon-dumbbells-exercise.png";
import IconPlanFitness from "../../public/images/icon-fitness-plan.png";
import IconDiet from "../../public/images/icon-fruits.png";
export default function InitialPage() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container1}>
          <Image
            src={LogoJunkyardBlackBgRemove}
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
        <h1>Seja bem-vindo(a) ao Junkyard.</h1>
        <h2>
          O espaço onde você pode montar e editar <br />
          seu treino e dieta com facilidade e rapidez.
        </h2>
        <div className={styles.images}>
          <Image src={IconDumbbells} alt="Icon" width={100} height={100} />
          <Image src={IconPlanFitness} alt="Icon" width={100} height={100} />
          <Image src={IconDiet} alt="Icon" width={100} height={100} />
        </div>

        <div className={styles.cards}>
          <div className={styles.card}>
            <p>
              Nossa motivação é ajudar a propagar um estilo de vida saudável.
            </p>
          </div>
          <div className={styles.card}>
            <p>
              Nosso app possui uma UX intuitiva que possibilita que qualquer
              pessoa o utilize.
            </p>
          </div>
          <div className={styles.card}>
            <p>Nosso app está em constante evolução...</p>
          </div>
        </div>
        <Link href="">Experimente agora!</Link>
      </main>
      <footer className={styles.footer}>
        <div className={styles.logo}>
          <Image
            src={LogoJunkyardRedBgRemove}
            alt="Logo da plataforma"
            width={60}
            height={60}
          />
          <p>Junkyard</p>
        </div>
        <div className={styles.midiasocial}>
          <Link href="">
            <RiInstagramLine size={30} />
          </Link>
          <Link href="">
            <RiMailSendLine size={30} />
          </Link>
          <Link href="">
            <RiYoutubeLine size={30} />
          </Link>
        </div>
        <p>© 2023 Junkyard. Todos os direitos reservados</p>
      </footer>
    </>
  );
}
