import { Request, Response } from "express";
import { Authenticate } from ".";

class AuthenticateController {
  async handler(request: Request, response: Response) {
    const authenticate = new Authenticate();

    try {
      const result = await authenticate.execute(request.body);

      return response.status(200).json(result);
    } catch (error) {
      return response.status(400).json(error);
    }
  }
}

export { AuthenticateController };
