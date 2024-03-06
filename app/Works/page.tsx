import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";
import { client } from "../../@libs/microcms";
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSDate,
} from "microcms-js-sdk";

export type Works = {
  id: string;
  title: string;
  thumb: MicroCMSImage;
  top: object;
  info: string;
  tag: string[];
  desc: object;
  img: MicroCMSImage[];
} & MicroCMSDate;

export const getWorks = async (): Promise<Works[]> => {
  const response = await client.getList({
    customRequestInit: {
      cache: "no-store",
    },
    endpoint: "works",
  });

  return response.contents;
};

export default async function Works() {
  const contents = await getWorks();
  return (
    <main>
      <h1>Worksページ</h1>
      {/* ここにcontent.idに応じたモーダルを追加 */}
      <ul>
        {contents.map((content) => (
          <li key={content.id}>
            <button>
              <Image
                src={content.thumb.url}
                alt={content.title}
                width={480}
                height={270}
                priority
              />
              <h2>{content.title}</h2>
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
