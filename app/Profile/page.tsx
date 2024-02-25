import Image from "next/image";
import profile from "../../public/img/profile.png";
//fas
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPalette,
  faMobileScreenButton,
  faTabletScreenButton,
} from "@fortawesome/free-solid-svg-icons";
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
  faXTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
//fas
import styles from "./page.module.scss";

export default function Profile() {
  return (
    <main>
      <section className={styles.top}>
        <div className={styles.photo}>
          <Image src={profile} alt="Profile" width={300} height={300} />
        </div>
        <div className={styles.info}>
          <section>
            <h2>Profile</h2>
            <p>
              <span className="bold">Lamina</span>(らみな) &nbsp;|&nbsp;
              <wbr />
              クリエイター兼エンジニア&nbsp;|&nbsp;
              <wbr />
              千葉県出身&nbsp;|&nbsp;
              <wbr />
              1月21日生まれ&nbsp;
              <wbr />
            </p>
            <p>
              <span className="bold">Likes</span>
              &nbsp;|&nbsp;
              <wbr />
              ポケモンカード&nbsp;|&nbsp;
              <wbr />
              ヴァイスシュヴァルツ&nbsp;|&nbsp;
              <wbr />
              ゲーム&nbsp;|&nbsp;
              <wbr />
              アニメ&nbsp;|&nbsp;
              <wbr />
              漫画
            </p>
            <p className={styles.desc}>
              プロジェクトマネージャー志望の
              <wbr />
              クリエイター兼
              <wbr />
              エンジニア大学生(25卒)
              <wbr />
              です。
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
          </section>
        </div>
      </section>
      <section className={styles.aboutMe}>
        <section>
          <h2>Skills</h2>
          <div className={styles.skillfield}>
            <div className={styles.skills}>
              <span className="bold">Device</span>&nbsp;|&nbsp;
              <span className="fas-text">
                <FontAwesomeIcon icon={faWindows} />
                &nbsp;Windows 11(Desktop)&nbsp;/&nbsp;
              </span>
              <wbr />
              <span className="fas-text">
                <FontAwesomeIcon icon={faApple} />
                &nbsp;MacOS Sonoma(Laptop)&nbsp;/&nbsp;
              </span>
              <wbr />
              <span className="fas-text">
                <FontAwesomeIcon icon={faMobileScreenButton} />
                &nbsp;iPhone 15&nbsp;/&nbsp;
              </span>
              <wbr />
              <span className="fas-text">
                <FontAwesomeIcon icon={faTabletScreenButton} />
                &nbsp;iPad Air 5th&nbsp;/&nbsp;
              </span>
              <wbr />
              <span className="fas-text">
                <FontAwesomeIcon icon={faPalette} />
                &nbsp;Wacom Cintiq Pro 24
              </span>
            </div>
            <div className={styles.skills}>
              <span className="bold">WebDev</span>&nbsp;|&nbsp;
              <span className="fas-text">
                <FontAwesomeIcon icon={faHtml5} />
                &nbsp;HTML5&nbsp;/&nbsp;
              </span>
              <wbr />
              <span className="fas-text">
                <FontAwesomeIcon icon={faCss3} />
                &nbsp;CSS3&nbsp;/&nbsp;
              </span>
              <wbr />
              <span className="fas-text">
                <FontAwesomeIcon icon={faJs} />
                &nbsp;JavaScript&nbsp;/&nbsp;
              </span>
              <wbr />
              <span className="fas-text">
                <FontAwesomeIcon icon={faGoogle} />
                &nbsp;Google Apps Script&nbsp;/&nbsp;
              </span>
              <wbr />
              <span className="fas-text">
                <FontAwesomeIcon icon={faReact} />
                &nbsp;React&nbsp;/&nbsp;
              </span>
              <wbr />
              <span className="fas-text">
                <FontAwesomeIcon icon={faNodeJs} />
                &nbsp;Node.js&nbsp;/&nbsp;
              </span>
              <wbr />
              Typescript&nbsp;/&nbsp;
              <wbr />
              Next.js&nbsp;/&nbsp;
              <wbr />
              Vercel&nbsp;
            </div>
            <div className={styles.skills}>
              <span className="bold">GameDev</span>&nbsp;|&nbsp;
              <FontAwesomeIcon icon={faUnity} />
              &nbsp;Unity&nbsp;&nbsp;C#&nbsp;/&nbsp;
              <wbr />
              UnrealEngine4
            </div>
            <div className={styles.skills}>
              <span className="bold">Creative</span>&nbsp;|&nbsp;
              Photoshop&nbsp;/&nbsp;
              <wbr />
              Illustrator&nbsp;/&nbsp;
              <wbr />
              AfterEffects&nbsp;/&nbsp;
              <wbr />
              PremierePro&nbsp;/&nbsp;
              <wbr />
              Blender&nbsp;/&nbsp;
              <wbr />
              Figma&nbsp;/&nbsp;
              <wbr />
              Cubase 12&nbsp;/&nbsp;
              <wbr />
              CLIP STUDIO PAINT EX&nbsp;/&nbsp;
              <wbr />
              Procreate
            </div>
          </div>
        </section>

        <section className={styles.sns}>
          <h2>SNS</h2>
          <p>
            <a
              href="https://twitter.com/Lamina1331"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="fas-text">
                <FontAwesomeIcon icon={faXTwitter} />
                Twitter
              </span>
            </a>
            &nbsp;/&nbsp;
            <wbr />
            <a
              href="https://github.com/lamina1331"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="fas-text">
                <FontAwesomeIcon icon={faGithub} />
                &nbsp;Github
              </span>
            </a>
          </p>
        </section>
        <section>
          <h2>Contact</h2>
          <p id="Contact">
            <a href="mailto:lamina1331.work@gmail.com">
              lamina1331.work@gmail.com
            </a>
          </p>
        </section>
      </section>
    </main>
  );
}
