import { createClient } from "redis";

const redis = createClient();

redis.on("connect", () => console.log("🍎 redis client connected"));

export { redis };
