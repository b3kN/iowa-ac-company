import config from "@/config";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
const { api } = config.app;

export async function fetchData(): Promise<{
  name: string;
  version: string;
}> {
  await delay(2000);

  const res = await fetch(api, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  const data = await res.json();

  return data as {
    name: string;
    version: string;
  };
}
