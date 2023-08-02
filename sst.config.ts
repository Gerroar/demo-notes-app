import { SSTConfig } from "sst";
import { StorageStack } from "./stacks/StorageStack.js";

export default {
  config(_input: any) {
    return {
        name: "notes",
        region: "us-east-1",
    };
  },
  stacks(app: any) {
    app.stack(StorageStack);
  },
} satisfies SSTConfig;