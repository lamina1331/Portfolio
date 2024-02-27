import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";
import { createClient } from "microcms-js-sdk";

async function getContents() {
  const client = createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
    apiKey: process.env.MICROCMS_API_KEY!,
  });

  const response = await client.getList({
    customRequestInit: {
      cache: "no-store",
    },
    endpoint: "works",
  });

  return response.contents;
}

export default async function Home() {
  const contents = await getContents();
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
        <section id="Works">
          <ul>
            {contents.map((work) => {
              return (
                <li key={work.id}>
                  <Image
                    className={styles.thumbImg}
                    src={work.thumb.url}
                    alt={work.title}
                    width={work.thumb.width}
                    height={work.thumb.height}
                  />
                </li>
              );
            })}
          </ul>
        </section>
      </section>
    </main>
  );
}
