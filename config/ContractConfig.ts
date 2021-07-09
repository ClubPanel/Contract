import {Config} from "../../../shared/config/types/config";

export interface ContractConfig extends Config {
  signURL: string;
  signConfirmURL: string;
  pageName: string;
  contractSignHeader: string;
  contractSignMessage: string;
  contractSignButtonText: string;
}