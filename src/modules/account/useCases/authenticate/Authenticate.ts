import { prisma } from "../../../../database";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { JWT_REFRESH_SECRET, JWT_SECRET } from "../../../../config/default";

type AuthenticateDTO = {
  username: string;
  password: string;
};

class Authenticate {
  async execute({ username, password }: AuthenticateDTO) {
    const account = await prisma.account.findFirst({ where: { username } });

    if (!account) {
      throw new Error("Invalid username or password.");
    }

    const isValidPassword = await compare(password, account.password);

    if (!isValidPassword) {
      throw new Error("Invalid username or password.");
    }

    const token = sign({ username }, JWT_SECRET, {
      subject: account.id,
      expiresIn: "12000ms",
    });

    const refreshToken = sign({ username }, JWT_REFRESH_SECRET, {
      subject: account.id,
      expiresIn: "7d",
    });

    return { token, refreshToken };
  }
}

export { Authenticate };
