import { Request, Response } from "express";
import { CreateAccount } from ".";

class CreateAccountController {
  async handler(request: Request, response: Response) {
    const createAccount = new CreateAccount();

    try {
      const result = await createAccount.execute(request.body);

      return response.status(201).json(result);
    } catch (error) {
      return response.status(400).json(error);
    }
  }
}

export { CreateAccountController };
