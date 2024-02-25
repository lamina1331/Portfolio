import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "lamina",
  apiKey: process.env.API_KEY!,
});
