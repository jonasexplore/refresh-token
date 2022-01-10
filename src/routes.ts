import { Router } from "express";
import { isAuthenticate } from "./infra/middlewares/isAuthenticate";
import { AuthenticateController } from "./modules/account/useCases/authenticate";
import { CreateAccountController } from "./modules/account/useCases/createAccount";
import { GenerateTokenController } from "./modules/account/useCases/generateToken";

const routes = Router();

const createAccountController = new CreateAccountController();
const authenticateController = new AuthenticateController();
const generateTokenController = new GenerateTokenController();

routes.post("/account/", createAccountController.handler);
routes.post("/authenticate/", authenticateController.handler);
routes.post("/authenticate/token", generateTokenController.handler);

routes.get("/", isAuthenticate, (request, response) => {
  response.json({ message: "You are authenticated!" });
});

export { routes };
