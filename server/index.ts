import {ServerSide} from "../../../shared/module/moduleServer";
import {registerServer} from "./server";

const output: ServerSide = {
  register: registerServer,
  priority: 1178,
  identifier: "contract"
};

export default output;