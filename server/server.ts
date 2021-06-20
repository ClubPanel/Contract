import {IUser} from "../../../server/database/models/user";
import {GetConfig} from "../../../shared/config/configStore";
import {MSAuthConfig} from "../../microsoft-auth/config/MSAuthConfig";
import {ContractConfig} from "../config/ContractConfig";
import {Express, Request, Response} from "express";
import {registerAuthReq} from "../../../server/util/auth";

declare module "express-session" {
  export interface SessionData {
    user?: IUser;
  }
}

export const registerServer = (app: Express) => {
  const configs = GetConfig<ContractConfig>("contract.json");

  registerAuthReq((req: Request, res: Response) => {
    if(!req.session.user.modules.contract || !req.session.user.modules.contract.agreed) {
      res.redirect(configs.signURL);
      return true;
    }

    return false;
  });

  app.post(configs.signConfirmURL, (req: Request, res: Response) => {

  });
};