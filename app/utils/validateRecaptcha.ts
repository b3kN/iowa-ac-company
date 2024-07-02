import config from "@/config";

export async function validateRecaptcha(token: string): Promise<boolean> {
  try {
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${config.app.captchaSecret}&response=${token}`,
    });
    const json = await res.json();

    console.log(json, "Response from Google reCatpcha verification API");

    if (json?.score > 0.5) {
      return true;
    }
  } catch (e) {
    console.error(e, "Error from Google reCatpcha verification API");
  }

  return false;
}
