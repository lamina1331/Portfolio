import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";

export default async function Home(work: any) {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1>Lamina Portfolio</h1>
        <p>Designer & Web developper & Project Manager</p>
        <Link href="#Works">View Works</Link>
      </section>
      <section className={styles.about}>
        <h2>Works</h2>
        {/* ここにsecを追加していく News Information About me Works（Preview） Contactなど*/}
        <section id="Works"></section>
      </section>
    </main>
  );
}
