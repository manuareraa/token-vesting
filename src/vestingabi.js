var vestingABI = `[
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_beneficiary",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_start",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_cliff",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_duration",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_slicePeriodSeconds",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "_revocable",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "createVestingSchedule",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "token_",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "vestingScheduleId",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "release",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Released",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "vestingScheduleId",
				"type": "bytes32"
			}
		],
		"name": "revoke",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [],
		"name": "Revoked",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "holder",
				"type": "address"
			}
		],
		"name": "computeNextVestingScheduleIdForHolder",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "vestingScheduleId",
				"type": "bytes32"
			}
		],
		"name": "computeReleasableAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "holder",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "computeVestingScheduleIdForAddressAndIndex",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "holder",
				"type": "address"
			}
		],
		"name": "getLastVestingScheduleForHolder",
		"outputs": [
			{
				"components": [
					{
						"internalType": "bool",
						"name": "initialized",
						"type": "bool"
					},
					{
						"internalType": "address",
						"name": "beneficiary",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "cliff",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "start",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "duration",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "slicePeriodSeconds",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "revocable",
						"type": "bool"
					},
					{
						"internalType": "uint256",
						"name": "amountTotal",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "released",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "revoked",
						"type": "bool"
					}
				],
				"internalType": "struct TokenVesting.VestingSchedule",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getToken",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "getVestingIdAtIndex",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "vestingScheduleId",
				"type": "bytes32"
			}
		],
		"name": "getVestingSchedule",
		"outputs": [
			{
				"components": [
					{
						"internalType": "bool",
						"name": "initialized",
						"type": "bool"
					},
					{
						"internalType": "address",
						"name": "beneficiary",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "cliff",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "start",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "duration",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "slicePeriodSeconds",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "revocable",
						"type": "bool"
					},
					{
						"internalType": "uint256",
						"name": "amountTotal",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "released",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "revoked",
						"type": "bool"
					}
				],
				"internalType": "struct TokenVesting.VestingSchedule",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "holder",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "getVestingScheduleByAddressAndIndex",
		"outputs": [
			{
				"components": [
					{
						"internalType": "bool",
						"name": "initialized",
						"type": "bool"
					},
					{
						"internalType": "address",
						"name": "beneficiary",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "cliff",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "start",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "duration",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "slicePeriodSeconds",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "revocable",
						"type": "bool"
					},
					{
						"internalType": "uint256",
						"name": "amountTotal",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "released",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "revoked",
						"type": "bool"
					}
				],
				"internalType": "struct TokenVesting.VestingSchedule",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getVestingSchedulesCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_beneficiary",
				"type": "address"
			}
		],
		"name": "getVestingSchedulesCountByBeneficiary",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getVestingSchedulesTotalAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getWithdrawableAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]`;

export default vestingABI;
