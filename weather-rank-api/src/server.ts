import { ApolloServer } from "apollo-server";
import { Context } from "./types/context";
import { WeatherService } from "./api/services/WeatherService";
import config from "./config/config";
import resolvers from "./resolvers/resolvers";
import { join } from "path";
import { loadSchemaSync } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";

const schemas = loadSchemaSync(join(__dirname, "./schemas/schema.graphql"), {
  loaders: [new GraphQLFileLoader()],
});

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
  });

  const { url } = await server.listen({ port: config.port });
  console.log(`Apollo Server is running at ${url}`);
}

startServer(schemas, resolvers).catch((error) => {
  console.error("Failed to start server:", error);
  process.exit(1);
});
