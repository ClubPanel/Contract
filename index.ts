import {Module} from "../../shared/module/module";
import {registerConfigs} from "./config/configs";
import {registerServer} from "./server/server";
import {registerClient} from "./client/client";

const output: Module = {
  configs: {
    register: registerConfigs
  },
  server: {
    register: registerServer
  },
  client: {
    register: registerClient,
    configs: ["contract.json", "contract-text.txt"]
  },
  priority: 1256
};

export default output;