import { ApolloServer } from "apollo-server";
import { Context } from "./types/context";
import config from "./config/config";
import resolvers from "./resolvers/resolvers";
import { join } from "path";
import { loadSchemaSync } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { DailyWeatherService } from "./services/DailyWeatherService";
import { CoordinatesApi } from "./api/integrations/CoordinatesApi";
import { WeatherApi } from "./api/integrations/WeatherApi";

const schemas = loadSchemaSync(join(__dirname, "./schemas/schema.graphql"), {
  loaders: [new GraphQLFileLoader()],
});

async function startServer(schemas: any, resolvers: any) {
  //Instantiate for DI
  const coordinatesApi = new CoordinatesApi();
  const weatherApi = new WeatherApi(coordinatesApi);

  // Initialize DailyWeatherService with WeatherApi
  const dailyService = new DailyWeatherService(weatherApi);

  //Init Apollo Server
  const server = new ApolloServer({
    typeDefs: schemas,
    resolvers: resolvers,
    context: (): Context => ({
      dailyService,
    }),
  });

  const { url } = await server.listen({ port: config.port });
  console.log(`Apollo Server is running at ${url}`);
}

startServer(schemas, resolvers).catch((error) => {
  console.error("Failed to start server:", error);
  process.exit(1);
});
