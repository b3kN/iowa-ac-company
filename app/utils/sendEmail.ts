import { FormData } from "@/contact/page";

export async function sendEmail(data: FormData) {
  const apiEndpoint = "/api/contact";
  const response = await fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  });

  return await response.json();
}
