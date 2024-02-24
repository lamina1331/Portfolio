"use client";

import styles from "@/components/Footer/index.module.scss";
import { useRouter } from "next/navigation";

export const Footer: React.FC = () => {
  const router = useRouter();

  return (
    <footer className={styles.container}>
      <h1 onClick={() => router.push("/")}>Footer</h1>
      <nav>
        <ul>
          <li>{/* Home Work Profile を作成予定 */}Home</li>
          <li>{/* Home Work Profile を作成予定 */}Work</li>
          <li>{/* Home Work Profile を作成予定 */}Profile</li>
        </ul>
      </nav>
    </footer>
  );
};
