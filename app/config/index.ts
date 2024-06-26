interface thing {
  app: {
    api: string;
  }
}

export default {
  app: {
    api: process.env.API_URL
  }
} as thing;
