import { Request, Response } from "express";
import { GenerateToken } from ".";

class GenerateTokenController {
  async handler(request: Request, response: Response) {
    const generateToken = new GenerateToken();

    try {
      const result = await generateToken.execute(request.body);

      return response.status(200).json(result);
    } catch (error) {
      return response.status(400).json(error);
    }
  }
}

export { GenerateTokenController };
