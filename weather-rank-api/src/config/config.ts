import dotenv from "dotenv";

export interface IConfig {
  port: number;
  nodeEnv: string;
}

dotenv.config();

const config: IConfig = {
  port: Number(process.env.PORT) || 4001,
  nodeEnv: process.env.NODE_ENV || "development",
};

export default config;
