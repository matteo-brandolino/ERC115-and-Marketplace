const Token = artifacts.require("./GameToken.sol");
const Marketplace = artifacts.require("./Marketplace.sol");

module.exports = (deployer) => deployer
    .then( () => deployMarketplace(deployer));

    function deployMarketplace(deployer) {
        return deployer.deploy(Marketplace, Token.address) //from previos migration
    }