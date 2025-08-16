import { ApolloServer } from "apollo-server";
import { Context } from "./types/context";
import { WeatherService } from "./api/services/WeatherService ";
import config from "./config/config";
import resolvers from "./resolvers/resolvers";
import { readFileSync } from "fs";
import { join } from "path";

const schemas = readFileSync(
  join(__dirname, "./schemas/schema.graphql"),
  "utf8"
);

async function startServer(schemas: any, resolvers: any) {
  //DI
  const weatherService = new WeatherService();

  //Init Apollo Server
  const server = new ApolloServer({
    typeDefs: schemas,
    resolvers: resolvers,
    context: (): Context => ({
      weatherService,
    }),
    cors: config.cors,
  });

  const { url } = await server.listen({ port: config.port });
  console.log(`Apollo Server is running at ${url}`);
}

startServer(schemas, resolvers).catch((error) => {
  console.error("Failed to start server:", error);
  process.exit(1);
});
