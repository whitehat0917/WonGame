const abi = [
   {
      "inputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"constructor"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":true,
            "internalType":"address",
            "name":"owner",
            "type":"address"
         },
         {
            "indexed":true,
            "internalType":"address",
            "name":"spender",
            "type":"address"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"value",
            "type":"uint256"
         }
      ],
      "name":"Approval",
      "type":"event"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":true,
            "internalType":"address",
            "name":"operator",
            "type":"address"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"previousRate",
            "type":"uint256"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"newRate",
            "type":"uint256"
         }
      ],
      "name":"BurnRateUpdated",
      "type":"event"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":true,
            "internalType":"bool",
            "name":"isEligible",
            "type":"bool"
         },
         {
            "indexed":true,
            "internalType":"address",
            "name":"buyer",
            "type":"address"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"amount",
            "type":"uint256"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"timeLeftBefore",
            "type":"uint256"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"timeLeftAfter",
            "type":"uint256"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"blockTime",
            "type":"uint256"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"blockNumber",
            "type":"uint256"
         }
      ],
      "name":"Buy",
      "type":"event"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":true,
            "internalType":"address",
            "name":"delegator",
            "type":"address"
         },
         {
            "indexed":true,
            "internalType":"address",
            "name":"fromDelegate",
            "type":"address"
         },
         {
            "indexed":true,
            "internalType":"address",
            "name":"toDelegate",
            "type":"address"
         }
      ],
      "name":"DelegateChanged",
      "type":"event"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":true,
            "internalType":"address",
            "name":"delegate",
            "type":"address"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"previousBalance",
            "type":"uint256"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"newBalance",
            "type":"uint256"
         }
      ],
      "name":"DelegateVotesChanged",
      "type":"event"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"maxTxAmount",
            "type":"uint256"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"tokenSwapThreshold",
            "type":"uint256"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"minimumBuyForPotEligibility",
            "type":"uint256"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"tokensToAddOneSecond",
            "type":"uint256"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"maxTimeLeft",
            "type":"uint256"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"potFeeExtraTimeLeftThreshold",
            "type":"uint256"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"eliglblePlayers",
            "type":"uint256"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"potPayoutPercent",
            "type":"uint256"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"lastBuyerPayoutPercent",
            "type":"uint256"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"marketingWalletPercent",
            "type":"uint256"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"liquidityPercent",
            "type":"uint256"
         }
      ],
      "name":"GameSettingsUpdated",
      "type":"event"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":false,
            "internalType":"address",
            "name":"oldGameSettingsUpdater",
            "type":"address"
         },
         {
            "indexed":false,
            "internalType":"address",
            "name":"newGameSettingsUpdater",
            "type":"address"
         }
      ],
      "name":"GameSettingsUpdaterUpdated",
      "type":"event"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":true,
            "internalType":"address",
            "name":"operator",
            "type":"address"
         },
         {
            "indexed":true,
            "internalType":"address",
            "name":"router",
            "type":"address"
         },
         {
            "indexed":true,
            "internalType":"address",
            "name":"pair",
            "type":"address"
         }
      ],
      "name":"L1ghtSwapRouterUpdated",
      "type":"event"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":true,
            "internalType":"address",
            "name":"operator",
            "type":"address"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"previousRate",
            "type":"uint256"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"newRate",
            "type":"uint256"
         }
      ],
      "name":"MaxTransferAmountRateUpdated",
      "type":"event"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":true,
            "internalType":"address",
            "name":"operator",
            "type":"address"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"previousAmount",
            "type":"uint256"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"newAmount",
            "type":"uint256"
         }
      ],
      "name":"MinAmountToLiquifyUpdated",
      "type":"event"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"minTokensBeforeSwap",
            "type":"uint256"
         }
      ],
      "name":"MinTokensBeforeSwapUpdated",
      "type":"event"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":true,
            "internalType":"address",
            "name":"previousOperator",
            "type":"address"
         },
         {
            "indexed":true,
            "internalType":"address",
            "name":"newOperator",
            "type":"address"
         }
      ],
      "name":"OperatorTransferred",
      "type":"event"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":true,
            "internalType":"address",
            "name":"previousOwner",
            "type":"address"
         },
         {
            "indexed":true,
            "internalType":"address",
            "name":"newOwner",
            "type":"address"
         }
      ],
      "name":"OwnershipTransferred",
      "type":"event"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"number",
            "type":"uint256"
         },
         {
            "indexed":false,
            "internalType":"address[]",
            "name":"winners",
            "type":"address[]"
         },
         {
            "indexed":false,
            "internalType":"uint256[]",
            "name":"winnerAmountsRound",
            "type":"uint256[]"
         }
      ],
      "name":"RoundEnded",
      "type":"event"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":true,
            "internalType":"uint256",
            "name":"roundNumber",
            "type":"uint256"
         },
         {
            "indexed":true,
            "internalType":"address",
            "name":"buyer",
            "type":"address"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"amount",
            "type":"uint256"
         },
         {
            "indexed":false,
            "internalType":"bool",
            "name":"success",
            "type":"bool"
         }
      ],
      "name":"RoundPayout",
      "type":"event"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"number",
            "type":"uint256"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"potValue",
            "type":"uint256"
         }
      ],
      "name":"RoundStarted",
      "type":"event"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"tokensSwapped",
            "type":"uint256"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"ethReceived",
            "type":"uint256"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"tokensIntoLiqudity",
            "type":"uint256"
         }
      ],
      "name":"SwapAndLiquify",
      "type":"event"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":true,
            "internalType":"address",
            "name":"operator",
            "type":"address"
         },
         {
            "indexed":false,
            "internalType":"bool",
            "name":"enabled",
            "type":"bool"
         }
      ],
      "name":"SwapAndLiquifyEnabledUpdated",
      "type":"event"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"tokensSwapped",
            "type":"uint256"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"ethReceived",
            "type":"uint256"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"tokensIntoLiqudity",
            "type":"uint256"
         }
      ],
      "name":"SwapAndLiquifyGame",
      "type":"event"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":true,
            "internalType":"address",
            "name":"from",
            "type":"address"
         },
         {
            "indexed":true,
            "internalType":"address",
            "name":"to",
            "type":"address"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"value",
            "type":"uint256"
         }
      ],
      "name":"Transfer",
      "type":"event"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":true,
            "internalType":"address",
            "name":"operator",
            "type":"address"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"previousRate",
            "type":"uint256"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"newRate",
            "type":"uint256"
         }
      ],
      "name":"TransferTaxRateUpdated",
      "type":"event"
   },
   {
      "inputs":[
         
      ],
      "name":"BURN_ADDRESS",
      "outputs":[
         {
            "internalType":"address",
            "name":"",
            "type":"address"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"DELEGATION_TYPEHASH",
      "outputs":[
         {
            "internalType":"bytes32",
            "name":"",
            "type":"bytes32"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"DOMAIN_TYPEHASH",
      "outputs":[
         {
            "internalType":"bytes32",
            "name":"",
            "type":"bytes32"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"MAXIMUM_TRANSFER_TAX_RATE",
      "outputs":[
         {
            "internalType":"uint16",
            "name":"",
            "type":"uint16"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"_liquidityFee",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"_potFee",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"_potFeeExtra",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"_taxFee",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"address",
            "name":"owner",
            "type":"address"
         },
         {
            "internalType":"address",
            "name":"spender",
            "type":"address"
         }
      ],
      "name":"allowance",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"address",
            "name":"spender",
            "type":"address"
         },
         {
            "internalType":"uint256",
            "name":"amount",
            "type":"uint256"
         }
      ],
      "name":"approve",
      "outputs":[
         {
            "internalType":"bool",
            "name":"",
            "type":"bool"
         }
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"address",
            "name":"account",
            "type":"address"
         }
      ],
      "name":"balanceOf",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"burnRate",
      "outputs":[
         {
            "internalType":"uint16",
            "name":"",
            "type":"uint16"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"uint256",
            "name":"amount",
            "type":"uint256"
         }
      ],
      "name":"buy",
      "outputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"address",
            "name":"",
            "type":"address"
         },
         {
            "internalType":"uint32",
            "name":"",
            "type":"uint32"
         }
      ],
      "name":"checkpoints",
      "outputs":[
         {
            "internalType":"uint32",
            "name":"fromBlock",
            "type":"uint32"
         },
         {
            "internalType":"uint256",
            "name":"votes",
            "type":"uint256"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"completeRoundWhenNoTimeLeft",
      "outputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"currentPotFee",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"decimals",
      "outputs":[
         {
            "internalType":"uint8",
            "name":"",
            "type":"uint8"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"address",
            "name":"spender",
            "type":"address"
         },
         {
            "internalType":"uint256",
            "name":"subtractedValue",
            "type":"uint256"
         }
      ],
      "name":"decreaseAllowance",
      "outputs":[
         {
            "internalType":"bool",
            "name":"",
            "type":"bool"
         }
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"address",
            "name":"delegatee",
            "type":"address"
         }
      ],
      "name":"delegate",
      "outputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"address",
            "name":"delegatee",
            "type":"address"
         },
         {
            "internalType":"uint256",
            "name":"nonce",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"expiry",
            "type":"uint256"
         },
         {
            "internalType":"uint8",
            "name":"v",
            "type":"uint8"
         },
         {
            "internalType":"bytes32",
            "name":"r",
            "type":"bytes32"
         },
         {
            "internalType":"bytes32",
            "name":"s",
            "type":"bytes32"
         }
      ],
      "name":"delegateBySig",
      "outputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"address",
            "name":"delegator",
            "type":"address"
         }
      ],
      "name":"delegates",
      "outputs":[
         {
            "internalType":"address",
            "name":"",
            "type":"address"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"gameEnd",
      "outputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"gameIsActive",
      "outputs":[
         {
            "internalType":"bool",
            "name":"",
            "type":"bool"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"gameSettings",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"maxTxAmount",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"tokenSwapThreshold",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"minimumBuyForPotEligibility",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"tokensToAddOneSecond",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"maxTimeLeft",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"potFeeExtraTimeLeftThreshold",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"eliglblePlayers",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"potPayoutPercent",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"lastBuyerPayoutPercent",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"marketingWalletPercent",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"liquidityPercent",
            "type":"uint256"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"gameStats",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"currentRoundNumber",
            "type":"uint256"
         },
         {
            "internalType":"int256",
            "name":"currentTimeLeft",
            "type":"int256"
         },
         {
            "internalType":"uint256",
            "name":"currentPotValue",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"currentTimeLeftAtLastBuy",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"currentLastBuyBlock",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"currentBlockTime",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"currentBlockNumber",
            "type":"uint256"
         },
         {
            "internalType":"address[]",
            "name":"lastBuyerAddress",
            "type":"address[]"
         },
         {
            "internalType":"uint256[]",
            "name":"lastBuyerData",
            "type":"uint256[]"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"address",
            "name":"account",
            "type":"address"
         }
      ],
      "name":"getCurrentVotes",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"getOwner",
      "outputs":[
         {
            "internalType":"address",
            "name":"",
            "type":"address"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"address",
            "name":"account",
            "type":"address"
         },
         {
            "internalType":"uint256",
            "name":"blockNumber",
            "type":"uint256"
         }
      ],
      "name":"getPriorVotes",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"address",
            "name":"spender",
            "type":"address"
         },
         {
            "internalType":"uint256",
            "name":"addedValue",
            "type":"uint256"
         }
      ],
      "name":"increaseAllowance",
      "outputs":[
         {
            "internalType":"bool",
            "name":"",
            "type":"bool"
         }
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"address",
            "name":"_account",
            "type":"address"
         }
      ],
      "name":"isExcludedFromAntiWhale",
      "outputs":[
         {
            "internalType":"bool",
            "name":"",
            "type":"bool"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"l1ghtSwapPair",
      "outputs":[
         {
            "internalType":"address",
            "name":"",
            "type":"address"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"l1ghtSwapRouter",
      "outputs":[
         {
            "internalType":"contract IUniswapV2Router02",
            "name":"",
            "type":"address"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"liquidityValue",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"marketingValue",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"marketingWallet",
      "outputs":[
         {
            "internalType":"address",
            "name":"",
            "type":"address"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"maxTransferAmount",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"maxTransferAmountRate",
      "outputs":[
         {
            "internalType":"uint16",
            "name":"",
            "type":"uint16"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"minAmountToLiquify",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"address",
            "name":"_to",
            "type":"address"
         },
         {
            "internalType":"uint256",
            "name":"_amount",
            "type":"uint256"
         }
      ],
      "name":"mint",
      "outputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"uint256",
            "name":"amount",
            "type":"uint256"
         }
      ],
      "name":"mint",
      "outputs":[
         {
            "internalType":"bool",
            "name":"",
            "type":"bool"
         }
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"name",
      "outputs":[
         {
            "internalType":"string",
            "name":"",
            "type":"string"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"address",
            "name":"",
            "type":"address"
         }
      ],
      "name":"nonces",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"address",
            "name":"",
            "type":"address"
         }
      ],
      "name":"numCheckpoints",
      "outputs":[
         {
            "internalType":"uint32",
            "name":"",
            "type":"uint32"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"operator",
      "outputs":[
         {
            "internalType":"address",
            "name":"",
            "type":"address"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"owner",
      "outputs":[
         {
            "internalType":"address",
            "name":"",
            "type":"address"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"potValue",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"renounceGameSettingsUpdater",
      "outputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"renounceOwnership",
      "outputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"contract BEP20",
            "name":"_token",
            "type":"address"
         },
         {
            "internalType":"contract IUniswapV2Router02",
            "name":"_router",
            "type":"address"
         },
         {
            "internalType":"address",
            "name":"_pair",
            "type":"address"
         }
      ],
      "name":"setConfig",
      "outputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"address",
            "name":"_account",
            "type":"address"
         },
         {
            "internalType":"bool",
            "name":"_excluded",
            "type":"bool"
         }
      ],
      "name":"setExcludedFromAntiWhale",
      "outputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"address",
            "name":"_address",
            "type":"address"
         }
      ],
      "name":"setMarketingWallet",
      "outputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"address",
            "name":"_address",
            "type":"address"
         }
      ],
      "name":"setPresaleContractAddress",
      "outputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"startGame",
      "outputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"swapAndLiquifyEnabled",
      "outputs":[
         {
            "internalType":"bool",
            "name":"",
            "type":"bool"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"symbol",
      "outputs":[
         {
            "internalType":"string",
            "name":"",
            "type":"string"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"timeLeft",
      "outputs":[
         {
            "internalType":"int256",
            "name":"",
            "type":"int256"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"token",
      "outputs":[
         {
            "internalType":"contract BEP20",
            "name":"",
            "type":"address"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"totalSupply",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"address",
            "name":"recipient",
            "type":"address"
         },
         {
            "internalType":"uint256",
            "name":"amount",
            "type":"uint256"
         }
      ],
      "name":"transfer",
      "outputs":[
         {
            "internalType":"bool",
            "name":"",
            "type":"bool"
         }
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"address",
            "name":"sender",
            "type":"address"
         },
         {
            "internalType":"address",
            "name":"recipient",
            "type":"address"
         },
         {
            "internalType":"uint256",
            "name":"amount",
            "type":"uint256"
         }
      ],
      "name":"transferFrom",
      "outputs":[
         {
            "internalType":"bool",
            "name":"",
            "type":"bool"
         }
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"address",
            "name":"newOperator",
            "type":"address"
         }
      ],
      "name":"transferOperator",
      "outputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"address",
            "name":"newOwner",
            "type":"address"
         }
      ],
      "name":"transferOwnership",
      "outputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"transferTaxRate",
      "outputs":[
         {
            "internalType":"uint16",
            "name":"",
            "type":"uint16"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"uniswapV2Pair",
      "outputs":[
         {
            "internalType":"address",
            "name":"",
            "type":"address"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"uniswapV2Router",
      "outputs":[
         {
            "internalType":"contract IUniswapV2Router02",
            "name":"",
            "type":"address"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"uint16",
            "name":"_burnRate",
            "type":"uint16"
         }
      ],
      "name":"updateBurnRate",
      "outputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"uint256",
            "name":"maxTxAmount",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"tokenSwapThreshold",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"minimumBuyForPotEligibility",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"tokensToAddOneSecond",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"maxTimeLeft",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"potFeeExtraTimeLeftThreshold",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"eliglblePlayers",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"potPayoutPercent",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"lastBuyerPayoutPercent",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"marketingWalletPercent",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"liquidityPercent",
            "type":"uint256"
         }
      ],
      "name":"updateGameSettings",
      "outputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"address",
            "name":"_router",
            "type":"address"
         }
      ],
      "name":"updateL1ghtSwapRouter",
      "outputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"uint16",
            "name":"_maxTransferAmountRate",
            "type":"uint16"
         }
      ],
      "name":"updateMaxTransferAmountRate",
      "outputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"uint256",
            "name":"_minAmount",
            "type":"uint256"
         }
      ],
      "name":"updateMinAmountToLiquify",
      "outputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"bool",
            "name":"_enabled",
            "type":"bool"
         }
      ],
      "name":"updateSwapAndLiquifyEnabled",
      "outputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"uint16",
            "name":"_transferTaxRate",
            "type":"uint16"
         }
      ],
      "name":"updateTransferTaxRate",
      "outputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"weth",
      "outputs":[
         {
            "internalType":"address",
            "name":"",
            "type":"address"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "stateMutability":"payable",
      "type":"receive"
   }
];
let abiToken = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"","type":"string"}],"name":"AlertLotto","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_chosenNumber","type":"uint256"},{"indexed":false,"internalType":"address","name":"winner","type":"address"}],"name":"ChooseWinner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"","type":"uint256"}],"name":"RandomNumberGenerated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"_liquidityAddress","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_liquidityAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_liquidityBalanceForPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_lottoWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_marketWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_prize","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_ticketPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_winnerParticipant","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"addLottoWalletBalance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"addMarketWalletBalance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lscInterval","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lscLastTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lscNextTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxRange","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"newRound","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pancakeswapV2Pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pancakeswapV2Router","outputs":[{"internalType":"contract IPancakeRouter02","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sendLiquidity","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"lotto","type":"address"}],"name":"setLottoWallet","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"market","type":"address"}],"name":"setMarketWallet","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"newRouter","type":"address"}],"name":"setRouterAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_enabled","type":"bool"}],"name":"setSwapAndLiquifyEnabled","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startLotto","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stopLotto","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapAndLiquifyEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferInternal","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"participate","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"updatePlayer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}];
var web3;
const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
const Fortmatic = window.Fortmatic;
const evmChains = window.evmChains;

let web3Modal;
let provider;
let selectedAccount;
var gameIsActive = false;
var fiveMinutes = 300;
var gameStatus;
var contract;
var tokenContract;
var timer = 0;
var timeLeft = 0;
var lastBuyerData = [];
var clock;
var myBalance = 0;

window.addEventListener('load', async () => {
	init();
});

async function onConnect() {
  try {
    provider = await web3Modal.connect();
	fetchAccountData();
	jQuery(".connect-wallet").html("Disconnect Wallet");
  } catch(e) {
    console.log("Could not get a wallet connection", e);
    return;
  }

  // Subscribe to accounts change
  provider.on("accountsChanged", (accounts) => {
    fetchAccountData();
  });

  // Subscribe to chainId change
  provider.on("chainChanged", (chainId) => {
    fetchAccountData();
  });

  // Subscribe to networkId change
  provider.on("networkChanged", (networkId) => {
    fetchAccountData();
  });
}

async function onDisconnect() {
  if(provider.close) {
    await provider.close();
    await web3Modal.clearCachedProvider();
    provider = null;
    jQuery(".stake-button").attr("disabled", true);
	jQuery(".stake-button").addClass("disabled");
	jQuery(".cmn-btn").attr("disabled", true);
	jQuery(".cmn-btn").addClass("disabled");
	jQuery("#myBalance").html("0.00");
  }
  selectedAccount = null;
}
async function fetchAccountData() {
	web3 = new Web3(provider);
	const chainId = await web3.eth.getChainId();
	const chainData = evmChains.getChain(chainId);
	// Get list of accounts of the connected wallet
	const accounts = await web3.eth.getAccounts();
	selectedAccount = accounts[0];
	contract = new web3.eth.Contract(abi, "0x230bF622f890813BF493cc1BB2B714c4479AcbEe");
	tokenContract = new web3.eth.Contract(abiToken, "0xE0af16C9bAb2E5fb2fc41573d1f7b6F2aC18873c");
	jQuery(".stake-button").attr("disabled", false);
	jQuery(".stake-button").removeClass("disabled");
	jQuery(".cmn-btn").attr("disabled", false);
	jQuery(".cmn-btn").removeClass("disabled");
	myBalance = await web3.eth.getBalance(selectedAccount);
	jQuery("#myBalance").html(parseFloat(web3.utils.fromWei(myBalance, "ether")).toFixed(3));
}

function init(){
	const providerOptions = {
	    walletconnect: {
	      package: WalletConnectProvider,
	      options: {
	        // Mikko's test key - don't copy as your mileage may vary
	        infuraId: "8043bb2cf99347b1bfadfb233c5325c0",
	      }
	    },

	    fortmatic: {
	      package: Fortmatic,
	      options: {
	        // Mikko's TESTNET api key
	        key: "pk_test_391E26A3B43A3350"
	      }
	    }
  	};

  	web3Modal = new Web3Modal({
	    cacheProvider: false, // optional
	    providerOptions, // required
	    disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
  	});

  	setInterval(function () {
  		getDataInfo();
	}, 5000);
}

async function getDataInfo(){
	if (provider){
		if (gameIsActive == false){
			gameIsActive = await contract.methods.gameIsActive().call();
		}else{
			gameStatus = await contract.methods.gameStats().call();
			if (lastBuyerData.join(",") != gameStatus.lastBuyerData.join(",")){
				lastBuyerData = gameStatus.lastBuyerData;
					timeLeft = await contract.methods.timeLeft().call();
					clearInterval(clock);
					startTimer(timeLeft);
				jQuery("#round-number").html(gameStatus.currentRoundNumber);
				for (let i=0;i<5;i++){
					if (gameStatus.lastBuyerAddress[i] != '0x0000000000000000000000000000000000000000'){
						jQuery("#buyer"+i+"Address").attr("href", "https://bscscan.com/address/"+gameStatus.lastBuyerAddress[i]);
						jQuery("#buyer"+i+"Address").html(gameStatus.lastBuyerAddress[i]);
						var buyDate = new Date(lastBuyerData[i*6+3]*1000);
						jQuery("#buyer"+i+"BuyDate").html(buyDate.getHours()+":"+buyDate.getMinutes()+":"+buyDate.getSeconds());
						jQuery("#buyer"+i+"Tokens").html(web3.utils.fromWei(lastBuyerData[i*6], "nano"));
						jQuery("#buyer"+i+"Win").html(parseFloat(web3.utils.fromWei(lastBuyerData[i*6+5], "ether")).toFixed(6) + " BNB");
					}else{
						jQuery("#buyer"+i+"Address").attr("href", "#");
						jQuery("#buyer"+i+"Address").html("No Buyer");
						jQuery("#buyer"+i+"BuyDate").html("No Buyer");
						jQuery("#buyer"+i+"Tokens").html("No Buyer");
						jQuery("#buyer"+i+"Win").html("No Buyer");
					}
				}
				var nextProfit = await web3.eth.getBalance("0x230bF622f890813BF493cc1BB2B714c4479AcbEe");
				nextProfit = web3.utils.fromWei(nextProfit, "ether");
				nextProfit = parseFloat(nextProfit) / 4;
				nextProfit = nextProfit.toFixed(6);
				jQuery("#nextProfit").html(nextProfit);
			}
		}
	}
}

function stake(){
	jQuery("#amountModal").modal();
}

async function buyTicket(){
	jQuery('.toast').toast({delay: 5000});
	gameIsActive = await contract.methods.gameIsActive().call();
	if (gameIsActive == false){
		jQuery('.toast-body').html('Game is not started. Please wait until game will start!');
		jQuery('.toast').toast('show');
		return;
	}
	var amount = Web3.utils.toWei(jQuery("#amount").val(), 'nano');
    var buyStatus = await contract.methods.buy(amount).send({from: selectedAccount});
    getDataInfo();

    if (buyStatus.status == true){
		jQuery('.toast-body').html('Successfully Buyed!');
		jQuery('.toast').toast('show');
    }
}

function startTimer(duration) {
    timer = duration;
    var minutes, seconds;
    clock = setInterval(function () {
    	if (timer >= 0){
	        minutes = parseInt(timer / 60, 10)
	        seconds = parseInt(timer % 60, 10);

	        minutes = minutes < 10 ? "0" + minutes : minutes;
	        seconds = seconds < 10 ? "0" + seconds : seconds;

	        jQuery("#timer").html(minutes + ":" + seconds);
	        timer--;
    	}
    }, 1000);
}

jQuery(document).ready(function(){
  	jQuery(".connect-wallet").on("click", function(){
	  	if (provider){
	  		onDisconnect();
	  		jQuery(".connect-wallet").html("Connect Wallet");
	  	}else{
	  		onConnect();
	  	}
	});
});

async function checkWin(){
	if (jQuery("#check-wallet").val() == ""){
		jQuery('.toast').toast({delay: 5000});
		jQuery('.toast-body').html('Please input the wallet address!');
		jQuery('.toast').toast('show');
	}
	var wallet = jQuery("#check-wallet").val();
	try{
		var balanceToken = await tokenContract.methods.balanceOf(wallet).call();
		balanceToken = parseFloat(web3.utils.fromWei(balanceToken, "nano"));
		balanceToken = parseInt(balanceToken / 100000);
		jQuery(".number-list-wrapper").removeClass("hidden");
		jQuery("#ticket-amount").html(balanceToken);
	}catch(e){
		jQuery('.toast').toast({delay: 5000});
		jQuery('.toast-body').html('Please input the correct address!');
		jQuery('.toast').toast('show');
	}
}