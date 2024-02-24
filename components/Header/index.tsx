"use client";

import styles from "@/components/Header/index.module.scss";
import { useRouter } from "next/navigation";

export const Header: React.FC = () => {
  const router = useRouter();

  return (
    <header className={styles.container}>
      <h1 onClick={() => router.push("/")}>Header</h1>
      <nav>
        <ul>
          <li>{/* Home Work Profile を作成予定 */}Home</li>
          <li>{/* Home Work Profile を作成予定 */}Work</li>
          <li>{/* Home Work Profile を作成予定 */}Profile</li>
        </ul>
      </nav>
    </header>
  );
};
