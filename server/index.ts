import {ServerSide} from "../../../shared/module/module";
import {registerServer} from "./server";

const output: ServerSide = {
  register: registerServer,
  priority: 1178
};

export default output;