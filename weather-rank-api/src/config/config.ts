import { CorsOptions } from "apollo-server";
import dotenv from "dotenv";

export interface IConfig {
  port: number;
  nodeEnv: string;
  cors: CorsOptions;
}

dotenv.config();

const config: IConfig = {
  port: Number(process.env.PORT) || 4001,
  nodeEnv: process.env.NODE_ENV || "development",
  cors: {
    origin: process.env.ALLOWED_ORIGINS?.split(","),
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  },
};

export default config;
