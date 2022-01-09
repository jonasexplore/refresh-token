import { Router } from "express";
import { isAuthenticate } from "./infra/middlewares/isAuthenticate";
import { AuthenticateController } from "./modules/account/useCases/authenticate";
import { CreateAccountController } from "./modules/account/useCases/createAccount";

const routes = Router();

const createAccountController = new CreateAccountController();
const authenticateController = new AuthenticateController();

routes.post("/account/", createAccountController.handler);
routes.post("/authenticate/", authenticateController.handler);

routes.get("/", isAuthenticate, (request, response) => {
  response.json({ message: "You are authenticated!" });
});

export { routes };
