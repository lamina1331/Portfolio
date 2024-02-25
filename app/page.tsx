"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1>Lamina Portfolio</h1>
        <p>Creative and Technology</p>
        <Link href="#Works">View Works</Link>
      </section>
      <section className={styles.about}>
        <h2>Homeページのコンテンツ</h2>
        {/* ここにsecを追加していく News Information About me Works（Preview） Contactなど*/}
        <section id="Works">
          <div>test</div>
        </section>
      </section>
    </main>
  );
}
