export default {
  app: {
    name: process.env.APP_NAME,
    api: process.env.API_URL,
    contact: process.env.APP_CONTACT_EMAIL,
    sendgridKey: process.env.SENDGRID_API_KEY,
    captchaKey: process.env.CAPTCHA_KEY,
  },
};
