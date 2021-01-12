const Token = artifacts.require("./GameToken.sol");
const Marketplace = artifacts.require("./Marketplace.sol");

module.exports = (deployer) => deployer
    .then( () => createToken1())
    .then( () => createToken2())
    .then( () => createToken3())
    .then( () => mintTokens())

    //create a incremnt id each function
    async function createToken1() {
        (await Token.deployed()).create(0, "")
    }
    async function createToken2() {
        (await Token.deployed()).create(0, "")
    }
    async function createToken3() {
        (await Token.deployed()).create(0, "")
    }
    //send to market address
    function mintTokens() {
        Token.deployed()
            .then( instance => {
                instance.mint(1, [Marketplace.address], [30]) //token with id 1 to marketplace with 30 quantities
                instance.mint(2, [Marketplace.address], [20])
                instance.mint(3, [Marketplace.address], [10])
            })
    }