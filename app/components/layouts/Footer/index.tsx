"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "../../../../public/img/Logo.png";
import styles from "./index.module.scss";
import { useRouter } from "next/navigation";

export const Footer: React.FC = () => {
  const router = useRouter();

  return (
    <footer className={styles.container}>
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
          <li>
            <Link href="/Profile/#Contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <p>
        <small>&copy;2018 Lamina.</small>
      </p>
    </footer>
  );
};
