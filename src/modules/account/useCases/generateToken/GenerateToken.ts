import { prisma, redis } from "../../../../database";
import { verify } from "jsonwebtoken";
import { JWT_REFRESH_SECRET } from "../../../../config/default";
import { generateToken } from "../../providers/tokens";

type GenerateTokenDTO = {
  refreshToken: string;
};

type DecodedType = {
  sub: string | undefined;
};

class GenerateToken {
  async execute({ refreshToken }: GenerateTokenDTO) {
    const decoded = verify(refreshToken, JWT_REFRESH_SECRET) as DecodedType;

    const account = await prisma.account.findFirst({
      where: {
        id: decoded.sub,
      },
    });

    if (!account) {
      throw new Error("Invalid refresh token.");
    }

    const token = generateToken(account.id);

    return {
      token,
    };
  }
}

export { GenerateToken };
