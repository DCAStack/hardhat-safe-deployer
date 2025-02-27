"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSafeDeployer = void 0;
require("@nomiclabs/hardhat-ethers");
const config_1 = require("hardhat/config");
const adapter_1 = require("./adapter");
const setupSafeDeployer = (signer, safe, serivceUrl) => {
    (0, config_1.extendEnvironment)((env) => {
        const { chainId } = env.network.config;
        if (!chainId) {
            throw new Error('The chainId was required in hardhat network config');
        }
        env.network.provider = new adapter_1.SafeProviderAdapter(env.network.provider, signer.connect(env.ethers.provider), safe, chainId, serivceUrl);
    });
};
exports.setupSafeDeployer = setupSafeDeployer;
//# sourceMappingURL=index.js.map