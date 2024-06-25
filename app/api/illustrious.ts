const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export async function fetchData(): Promise<{
  name: string;
  version: string;
}> {
  await delay(2000);

  const res = await fetch(`https://api.illustrious.cloud`, {
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
