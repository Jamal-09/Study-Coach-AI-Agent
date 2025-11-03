import { Mastra } from "@mastra/core/mastra";
import { studyCoachAgent } from "./agents/studyCoach-agent.js";
import { a2aAgentRoute } from "../mastra/routes/studyCoach-route.js";

export const mastra = new Mastra({
  agents: { studyCoachAgent },
  telemetry: {
    enabled: false,
  },
  observability: {
    default: { enabled: true },
  },

  server: {
    build: {
      openAPIDocs: true,
      swaggerUI: true,
    },
    apiRoutes: [a2aAgentRoute],
  },
});
