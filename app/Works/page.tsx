import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.scss";
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
    queries: { limit: 3, orders: "-publishedAt" },
  });

  return response.contents;
}

async function getModal(workId: string) {
  const client = createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
    apiKey: process.env.MICROCMS_API_KEY!,
  });

  const response = await client.get({
    customRequestInit: {
      cache: "no-store",
    },
    endpoint: "works",
    contentId: workId,
    queries: { limit: 1, orders: "-publishedAt" },
  });

  return response.contents;
}

export default async function Works() {
  const contents = await getContents();
  console.log(contents);
  return (
    <div>
      <h1>Worksページ</h1>
      <ul>
        {contents.map((content) => (
          <li key={content.id}>
            <Link href={`/Works/${content.id}`}>
              <Image
                src={content.thumb.url}
                alt={content.title}
                width={480}
                height={270}
                priority
              />
              <h2>{content.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
