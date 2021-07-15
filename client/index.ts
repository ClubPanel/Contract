import {ClientSide} from "../../../shared/module/moduleClient";
import {registerClient} from "./client";

const output: ClientSide = {
  register: registerClient,
  priority: 1178,
  identifier: "contract"
};

export default output;