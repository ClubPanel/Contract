import {GetConfig} from "../../../shared/config/configStore";
import {ContractConfig} from "../config/ContractConfig";
import {ClientRegisterCallback} from "../../../shared/module/module";

export const registerClient = (RegisterClientPage: ClientRegisterCallback) => {
  const config = GetConfig<ContractConfig>("client/contract.json");

  RegisterClientPage(config.signURL, {
    name: config.pageName
  }, "./client/ContractPage.tsx");
};