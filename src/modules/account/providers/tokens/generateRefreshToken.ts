import { sign } from "jsonwebtoken";
import {
  JWT_EXPIRE_REFRESH_TOKEN,
  JWT_REFRESH_SECRET,
  REDIS_EXPIRE_REFRESH_TOKEN,
} from "../../../../config/default";
import { redis } from "../../../../database";

const generateRefreshToken = async (accountId: string) => {
  const refreshToken = sign({}, JWT_REFRESH_SECRET, {
    subject: accountId,
    expiresIn: JWT_EXPIRE_REFRESH_TOKEN,
  });

  // await redis.connect();
  // redis.set(accountId, refreshToken);
  // redis.expire(accountId, REDIS_EXPIRE_REFRESH_TOKEN);

  return refreshToken;
};

export { generateRefreshToken };
