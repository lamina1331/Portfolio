"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/img/logo.png";
import styles from "./index.module.scss";
import { useRouter } from "next/navigation";

export const Header: React.FC = () => {
  const router = useRouter();

  return (
    <header className={styles.container}>
      <h1 onClick={() => router.push("/")}>
        <Image
          src={Logo}
          width={150}
          height={60}
          alt="Lamina Logo"
          priority
        ></Image>
      </h1>
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
    </header>
  );
};
