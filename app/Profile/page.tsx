import Image from "next/image";
import profile from "../../public/img/profile.png";
//fas
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import {
  faWindows,
  faApple,
  faHtml5,
  faCss3,
  faJs,
  faGoogle,
  faReact,
  faNodeJs,
  faUnity,
} from "@fortawesome/free-brands-svg-icons";
//fas
import styles from "./page.module.scss";

export default function Profile() {
  return (
    <main>
      <section className={styles.info}>
        <div className={styles.photo}>
          <Image src={profile} alt="Profile" width={300} height={300} />
        </div>
        <div className={styles.profile}>
          <h2>Profile</h2>
          <p>
            Web開発、
            <wbr />
            プロジェクトマネジメントを
            <wbr />
            している
            <wbr />
            &nbsp;Lamina&nbsp;の
            <wbr />
            ポートフォリオサイトです。
            <wbr />
            eSports業界を
            <wbr />
            中心に、
            <wbr />
            デザイン・
            <wbr />
            映像
            <wbr />
            などの
            <wbr />
            クリエイティブ制作も
            <wbr />
            行っていました。
            <wbr />
            クリエイティブなことも、
            <wbr />
            技術的なことも、
            <wbr />
            どちらも好きです。
            <wbr />
          </p>
          <br />
          <h2>Skills</h2>
          <p>
            <span>
              DevPC&nbsp;|&nbsp;
              <FontAwesomeIcon icon={faWindows} /> Windows
              11(Desktop)&nbsp;,&nbsp;
              <FontAwesomeIcon icon={faApple} /> MacOS Sonoma(Laptop)
            </span>
            <br />
            <span>
              WebDev&nbsp;|&nbsp;
              <FontAwesomeIcon icon={faHtml5} />
              HTML5&nbsp;, &nbsp;
              <wbr />
              <FontAwesomeIcon icon={faCss3} />
              CSS3&nbsp;, &nbsp;
              <wbr />
              <FontAwesomeIcon icon={faJs} />
              JavaScript&nbsp;,&nbsp;
              <wbr />
              <FontAwesomeIcon icon={faGoogle} />
              Google Apps Script&nbsp;,&nbsp;
              <wbr />
              <FontAwesomeIcon icon={faReact} />
              React&nbsp;,&nbsp;
              <wbr />
              <FontAwesomeIcon icon={faNodeJs} />
              Node.js&nbsp;,&nbsp;
              <wbr />
              Typescript&nbsp;,&nbsp;
              <wbr />
              Next.js&nbsp;,&nbsp;
              <wbr />
              Vercel&nbsp;
            </span>
            <br />
            <span>
              GameDev&nbsp;|&nbsp;
              <FontAwesomeIcon icon={faUnity} />
              Unity&nbsp;&nbsp;C#&nbsp;,&nbsp;
              <wbr />
              UnrealEngine4
            </span>
            <br />
            <span>
              Creative&nbsp;|&nbsp; Photoshop&nbsp;,&nbsp;
              <wbr />
              Illustrator&nbsp;,&nbsp;
              <wbr />
              AfterEffects&nbsp;,&nbsp;
              <wbr />
              PremierePro&nbsp;,&nbsp;
              <wbr />
              Blender&nbsp;,&nbsp;
              <wbr />
              Figma&nbsp;,&nbsp;
              <wbr />
              Cubase 12&nbsp;,&nbsp;
              <wbr />
              CLIP STUDIO PAINT EX&nbsp;,&nbsp;
              <wbr />
              Procreate
            </span>
            <br />
            <span>
              Illustration&nbsp;|&nbsp;
              <FontAwesomeIcon icon={faPalette} /> Wacom Cintiq Pro 24,&nbsp;
              <wbr />
              iPad Air 5th
            </span>
            <br />
          </p>
        </div>
      </section>
      <section className={styles.aboutMe}>
        <h2>About Me</h2>
        <p></p>
      </section>
    </main>
  );
}
