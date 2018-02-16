var DemoEthVoting = artifacts.require("./DemoEthVoting.sol");

module.exports = function(deployer) {
  deployer.deploy(DemoEthVoting,['Rama','Nick','Jose']);
};
