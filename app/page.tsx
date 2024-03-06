import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";

export default async function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1>Lamina Portfolio</h1>
        <p>Designer & Web developper & Project Manager</p>
        <Link href="/Works">View Works</Link>
      </section>
    </main>
  );
}
