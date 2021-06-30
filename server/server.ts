import UserSchema, {IUser} from "../../../server/database/models/user";
import {GetConfig} from "../../../shared/config/configStore";
import {ContractConfig} from "../config/ContractConfig";
import {Express, Request, Response} from "express";
import {registerAuthReq, requireCurrentAuth} from "../../../server/util/auth";

declare module "express-session" {
  export interface SessionData {
    user?: IUser;
    lastURL?: string;
  }
}

export const registerServer = (app: Express) => {
  const configs = GetConfig<ContractConfig>("client/contract.json");

  app.get(configs.signURL, requireCurrentAuth());

  registerAuthReq((req: Request, res: Response) => {
    if(!req.session?.user?.modules?.contract?.agreed) {
      res.redirect(configs.signURL);
      return true;
    }

    return false;
  });

  app.post(configs.signConfirmURL, async (req: Request, res: Response) => {
    if(!req.session?.user || req.session?.user?.modules?.contract?.agreed) {
      return res.redirect("/");
    }

    req.session.user.modules.contract = {
      agreed: true
    };

    await UserSchema.updateOne({ id: req.session.user.id }, {
      "$set": {
        "modules.contract.agreed": true
      }
    });

    res.redirect(req.session.lastURL || "/");
    req.session.lastURL = null;
  });
};