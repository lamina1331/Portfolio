"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "../../../../public/img/Logo.png";
import styles from "./index.module.scss";
import { useRouter } from "next/navigation";

export const Header: React.FC = () => {
  const router = useRouter();

  return (
    <header className={styles.headerArea}>
      <div className={styles.headerContainer}>
        <a>
          <h1 onClick={() => router.push("/")}>
            <Image
              src={Logo}
              width={150}
              height={60}
              alt="Lamina Logo"
              priority
            />
          </h1>
        </a>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/Works">Works</Link>
            </li>
            <li>
              <Link href="/Profile">Profile</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
