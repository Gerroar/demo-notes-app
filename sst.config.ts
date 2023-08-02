import { SSTConfig } from "sst";
import { StorageStack } from "./stacks/StorageStack.js";
import { ApiStack } from "./stacks/ApiStack.js";

export default {
  config(_input: any) {
    return {
        name: "notes",
        region: "us-east-1",
    };
  },
  stacks(app: any) {
    app.stack(StorageStack).stack(ApiStack);
  },
} satisfies SSTConfig;