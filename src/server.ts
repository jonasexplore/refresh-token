import "express-async-errors";

import express from "express";

import { PORT } from "./config/default";
import { routes } from "./routes";
import { interceptExceptions } from "./infra/interceptors";

const app = express();

app.use(express.json());
app.use(routes);
app.use(interceptExceptions);

app.listen(PORT, () =>
  console.log(`🚀 Server has started at http://localhost:${PORT}`)
);
