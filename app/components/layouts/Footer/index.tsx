"use client";

import Link from "next/link";
import styles from "./index.module.scss";
import { useRouter } from "next/navigation";

export const Footer: React.FC = () => {
  const router = useRouter();

  return (
    <footer className={styles.container}>
      <h1 onClick={() => router.push("/")}>Footer</h1>
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
    </footer>
  );
};
