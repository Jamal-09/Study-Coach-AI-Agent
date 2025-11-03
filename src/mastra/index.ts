import { LibSQLStore } from "@mastra/libsql";
import { PinoLogger } from "@mastra/loggers";
import { studyCoachAgent } from "./agents/studyCoach-agent";
import { Mastra, OtelConfig } from "@mastra/core";
import { a2aAgentRoute } from "./routes/studyCoach-route";
export const mastra = new Mastra({
  telemetry: {
    serviceName: "feedbackAgent", // required
    // optionally add exporter config, sampling, etc.
  } as OtelConfig,
  agents: { studyCoachAgent },
  storage: new LibSQLStore({ url: ":memory:" }),
  logger: new PinoLogger({ name: "Mastra", level: "debug" }),
  observability: { default: { enabled: true } },
  server: {
    build: { openAPIDocs: true, swaggerUI: true },
    apiRoutes: [a2aAgentRoute],
  },
});
console.log("hi", process.env.GOOGLE_GENERATIVE_AI_API_KEY);
