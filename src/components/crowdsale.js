import React from 'react'
import { connect } from 'react-redux'
import Eth from 'ethjs'

const Crowdsale = ({ eth }) => {
  let buyIn = () => {
    const VCNCrowdSaleAddr = '0x8e0d24ba4d9d275afa00ffdb9e7a71dbfc9e6296'; // <- need to be change
    const VCNCrowdSaleABI = [ { "constant": true, "inputs": [], "name": "rate", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "endTime", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "weiRaised", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "wallet", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "startTime", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "beneficiary", "type": "address" } ], "name": "buyTokens", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [], "name": "hasEnded", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "token", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "inputs": [ { "name": "_startTime", "type": "uint256" }, { "name": "_endTime", "type": "uint256" }, { "name": "_rate", "type": "uint256" }, { "name": "_wallet", "type": "address" } ], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "payable": true, "stateMutability": "payable", "type": "fallback" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "purchaser", "type": "address" }, { "indexed": true, "name": "beneficiary", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }, { "indexed": false, "name": "amount", "type": "uint256" } ], "name": "TokenPurchase", "type": "event" } ];
    const crowdsale = eth.contract(VCNCrowdSaleABI).at(VCNCrowdSaleAddr);
    eth.coinbase().then((coinbase) => {
      let num = prompt("How many Ethers?(1 eth = 12 VCN)", "");
      if (num > 0){
        eth.sendTransaction({
          from: coinbase,
          to: crowdsale.address,
          value: Eth.toWei(num, "ether"),
          data: '0x'
        }).then(result=>{
          console.log(result);
        }).catch(console.error);
      }
    }).catch(console.error);
  }
  return (
    <div>
      <h4>*important You need metamask or ethereum blockchain on localhost:8545</h4>
			<button onClick={buyIn}>Buy</button>
    </div>
  )

}

export default connect(({ eth }) => ({ eth }), null)(Crowdsale)
