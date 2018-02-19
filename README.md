# Demo - Dapp Voting Contract on Ethereum

Simple application composed by a web page that calls an Ethereum contract to simulate a simple voting scenario.
The web application uses a JS library to interact with a local Ethereum node ([Ganache](http://truffleframework.com/ganache/))
 
## Structure

The solution is composed by:

- the **voting** contract (*/contract/DemoEthVoting.sol*)
- some **tests** (*/test/voting-test.js*)
- a web page and javascript file (*/web*)

There are some extra files needed for the deployment via *truffle*

## Compile, Deploy, Test

The solution is based on [Truffle](http://truffleframework.com/) suite and configured to attach to a running [Ganache](http://truffleframework.com/ganache/) instance (local emulator of an Ethereum BlockChain)

- Download and execute [Ganache](http://truffleframework.com/ganache/)
- `truffle compile`
- `truffle migrate`
- `truffle test`

After the deployment task (called `migrate`) the address of the deployed contract is displayed. Copy this address and paste it at line **4** of */web/index.js*:

~~~javascript
contractInstance = VotingContract.at('ADDRESS_OF_DEPLOYED_CONTRACT');
~~~

This is required as the javascript must know which is the corret contract to call.

## Use it

Open *index.html* in a web browser and insert the name of one of the partecipants. The voting counter must increase by **1**.

Each vote is a chain Transaction!
