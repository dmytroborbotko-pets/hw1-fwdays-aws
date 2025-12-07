#!/usr/bin/env node
import * as cdk from "aws-cdk-lib/core";
import { IntegrationStack } from "../lib/integration-stack";

const app = new cdk.App();
new IntegrationStack(app, "IntegrationStack", {
  env: { account: "138414344602", region: "eu-central-1" },
});
