import {ClientSide} from "../../../shared/module/module";
import {registerClient} from "./client";

const output: ClientSide = {
  register: registerClient,
  configs: ["client/contract.json", "client/contract-text.txt"],
  priority: 1178
};

export default output;