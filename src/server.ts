import express from "express";

import { PORT } from "./config/default";
import { routes } from "./routes";

const app = express();

app.use(express.json());
app.use(routes);

app.listen(PORT, () =>
  console.log(`🚀 Server has started at http://localhost:${PORT}`)
);
