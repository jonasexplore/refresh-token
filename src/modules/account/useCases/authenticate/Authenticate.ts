import { prisma } from "../../../../database";
import { compare } from "bcrypt";
import { generateRefreshToken, generateToken } from "../../providers/tokens";

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

    const token = generateToken(account.id);
    const refreshToken = await generateRefreshToken(account.id);

    return { token, refreshToken };
  }
}

export { Authenticate };
