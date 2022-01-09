import { createClient } from "redis";

const client = createClient();

client.on("error", (err) => console.log("Redis client error", err));

export { client };
