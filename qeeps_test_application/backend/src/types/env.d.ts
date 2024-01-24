export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
      API_BASE_URL: string;
      MONGO_URI: string;
      FRONT_END_CORS: string;
    }
  }
}
