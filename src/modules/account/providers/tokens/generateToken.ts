import { sign } from "jsonwebtoken";
import { JWT_EXPIRE_TOKEN, JWT_SECRET } from "../../../../config/default";

const generateToken = (accountId: string) => {
  const token = sign({}, JWT_SECRET, {
    subject: accountId,
    expiresIn: JWT_EXPIRE_TOKEN,
  });

  return token;
};

export { generateToken };
