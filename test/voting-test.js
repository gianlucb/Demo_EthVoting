// Specifically request an abstraction for SeattleVoting
var SeattleVoting = artifacts.require("DemoEthVoting");

contract('DemoEthVoting', function(accounts) {
  it("Votes must be zero at the beginning", function() {
    return DemoEthVoting.deployed().then(function(instance) {
      return instance.totalVotesFor.call("Rama");
    }).then(function(count) {
      assert.equal(count.valueOf(), 0, "Votes not starting from zero");
    });
  });

  it("Voting must increased by 1", function() {
    return DemoEthVoting.deployed().then(function(instance) {
      instance.voteForCandidate("Rama");
      return instance.totalVotesFor.call("Rama");
    }).then(function(count) {
      assert.equal(count.valueOf(), 1, "Votes must be 1");
    });
  });

  it("Voting not allowed", function() {
    return DemoEthVoting.deployed().then(function(instance) {
      return instance.voteForCandidate("XXXX");
    })
    .then(function(r) {
        console.log(r);
        assert.equal(r.receipt.status,0,"transaction not reverted");
    });
  });

});