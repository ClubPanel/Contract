import {RegisterConfig} from "../../../shared/config/configFilesManager";

export const registerConfigs = () => {
  RegisterConfig({name: "client/contract.json", default: config});
  RegisterConfig({name: "client/contract-text.txt", default: "# Markdown Supported\ncontract\ntext\nhere"});
};

const config = {
  __comment__signLocation: "The below field is the location that will redirect users to the signing page.",
  signURL: "/contract",
  signConfirmURL: "/confirmcontract",
  __comment__pageName: "The below field refers to the name of the page, used in SEO and the page title in the browser.",
  pageName: "Contract",
  contractSignHeader: "Contract",
  contractSignMessage: "To participate in this club, please read and agree to the contract below, then click the \"I agree\" button.",
  contractSignButtonText: "I agree"
};