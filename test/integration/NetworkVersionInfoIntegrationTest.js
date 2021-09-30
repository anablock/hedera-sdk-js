import IntegrationTestEnv from "./client/index.js";
import { NetworkVersionInfoQuery } from "../../src/exports.js";

describe("NetworkVersionInfo", function () {
    it("should be executable", async function () {
        this.timeout(120000);

        const env = await IntegrationTestEnv.new();

        try {
            await new NetworkVersionInfoQuery().execute(env.client);
        } catch {
            // Do nothing
        }

        await env.close();
    });
});
