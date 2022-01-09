import { prisma } from "../../../../database";
import { hash } from "bcrypt";
import { SALT } from "../../../../config/default";

type CreateAccountDTO = {
  username: string;
  password: string;
};

class CreateAccount {
  async execute({ username, password }: CreateAccountDTO) {
    const userExists = await prisma.account.findFirst({
      where: {
        username,
      },
    });

    if (userExists) {
      throw new Error("User already exists");
    }

    const encrypted = await hash(password, SALT);

    const account = await prisma.account.create({
      data: {
        username,
        password: encrypted,
      },
    });

    return account;
  }
}

export { CreateAccount };
