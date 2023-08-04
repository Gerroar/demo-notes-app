import { SSTConfig } from "sst";
import { StorageStack } from "./stacks/StorageStack.js";
import { ApiStack } from "./stacks/ApiStack.js";
import { AuthStack } from "./stacks/AuthStack.js";
import { FrontendStack } from "./stacks/FrontendStack.js"

export default {
  config(_input: any) {
    return {
      name: "notes",
      region: "us-east-1",
    };
  },
  stacks(app: any) {
    app.stack(StorageStack).stack(ApiStack).stack(AuthStack).stack(FrontendStack);
  },
} satisfies SSTConfig;
