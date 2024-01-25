/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { MockVariableDebtToken } from "./MockVariableDebtToken";

export class MockVariableDebtTokenFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _pool: string,
    _underlyingAssetAddress: string,
    _tokenName: string,
    _tokenSymbol: string,
    incentivesController: string,
    overrides?: Overrides
  ): Promise<MockVariableDebtToken> {
    return super.deploy(
      _pool,
      _underlyingAssetAddress,
      _tokenName,
      _tokenSymbol,
      incentivesController,
      overrides || {}
    ) as Promise<MockVariableDebtToken>;
  }
  getDeployTransaction(
    _pool: string,
    _underlyingAssetAddress: string,
    _tokenName: string,
    _tokenSymbol: string,
    incentivesController: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _pool,
      _underlyingAssetAddress,
      _tokenName,
      _tokenSymbol,
      incentivesController,
      overrides || {}
    );
  }
  attach(address: string): MockVariableDebtToken {
    return super.attach(address) as MockVariableDebtToken;
  }
  connect(signer: Signer): MockVariableDebtTokenFactory {
    return super.connect(signer) as MockVariableDebtTokenFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockVariableDebtToken {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MockVariableDebtToken;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_pool",
        type: "address",
      },
      {
        internalType: "address",
        name: "_underlyingAssetAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "_tokenName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_tokenSymbol",
        type: "string",
      },
      {
        internalType: "address",
        name: "incentivesController",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "fromUser",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "toUser",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "BorrowAllowanceDelegated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "Burn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "onBehalfOf",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "Mint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DEBT_TOKEN_REVISION",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "POOL",
    outputs: [
      {
        internalType: "contract ILendingPool",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "UNDERLYING_ASSET_ADDRESS",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approveDelegation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "fromUser",
        type: "address",
      },
      {
        internalType: "address",
        name: "toUser",
        type: "address",
      },
    ],
    name: "borrowAllowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getScaledUserBalanceAndSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "decimals",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "address",
        name: "onBehalfOf",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "scaledBalanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "scaledTotalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60e060405260006006553480156200001657600080fd5b5060405162001a1238038062001a12833981810160405260a08110156200003c57600080fd5b815160208301516040808501805191519395929483019291846401000000008211156200006857600080fd5b9083019060208201858111156200007e57600080fd5b82516401000000008111828201881017156200009957600080fd5b82525081516020918201929091019080838360005b83811015620000c8578181015183820152602001620000ae565b50505050905090810190601f168015620000f65780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200011a57600080fd5b9083019060208201858111156200013057600080fd5b82516401000000008111828201881017156200014b57600080fd5b82525081516020918201929091019080838360005b838110156200017a57818101518382015260200162000160565b50505050905090810190601f168015620001a85780820380516001836020036101000a031916815260200191505b50604052602001805190602001909291905050508484848484848484848482826012838360039080519060200190620001e39291906200024b565b508251620001f99060049060208601906200024b565b506005805460ff90931660ff19909316929092179091556001600160601b0319606091821b811660805297811b881660c0529590951b90951660a05250620002e79d5050505050505050505050505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200028e57805160ff1916838001178555620002be565b82800160010185558215620002be579182015b82811115620002be578251825591602001919060010190620002a1565b50620002cc929150620002d0565b5090565b5b80821115620002cc5760008155600101620002d1565b60805160601c60a05160601c60c05160601c6116c86200034a600039806106ca52806109515280610a185280610acd5280610dbc5250806106f952806109805280610a9d5280610d71528061110e525080611332528061135952506116c86000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c80637535d246116100b8578063b1bf962d1161007c578063b1bf962d146104f0578063b3f1c93d146104f8578063b9a7b62214610534578063c04a8a101461053c578063dd62ed3e14610568578063f5298aca1461059657610142565b80637535d2461461049057806395d89b41146104b4578063a457c2d714610410578063a9059cbb146104bc578063b16a19de146104e857610142565b806323b872dd1161010a57806323b872dd146102835780633118724e146102b9578063313ce567146103f257806339509351146104105780636bd76d241461043c57806370a082311461046a57610142565b806306fdde0314610147578063095ea7b3146101c45780630afbcdc91461020457806318160ddd146102435780631da24f3e1461025d575b600080fd5b61014f6105c8565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610189578181015183820152602001610171565b50505050905090810190601f1680156101b65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101f0600480360360408110156101da57600080fd5b506001600160a01b03813516906020013561065e565b604080519115158252519081900360200190f35b61022a6004803603602081101561021a57600080fd5b50356001600160a01b03166106a6565b6040805192835260208301919091528051918290030190f35b61024b6106c3565b60408051918252519081900360200190f35b61024b6004803603602081101561027357600080fd5b50356001600160a01b0316610794565b6101f06004803603606081101561029957600080fd5b506001600160a01b038135811691602081013590911690604001356107a7565b6103f0600480360360608110156102cf57600080fd5b60ff82351691908101906040810160208201356401000000008111156102f457600080fd5b82018360208201111561030657600080fd5b8035906020019184600183028401116401000000008311171561032857600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929594936020810193503591505064010000000081111561037b57600080fd5b82018360208201111561038d57600080fd5b803590602001918460018302840111640100000000831117156103af57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506107ef945050505050565b005b6103fa6108aa565b6040805160ff9092168252519081900360200190f35b6101f06004803603604081101561042657600080fd5b506001600160a01b0381351690602001356108b3565b61024b6004803603604081101561045257600080fd5b506001600160a01b0381358116916020013516610902565b61024b6004803603602081101561048057600080fd5b50356001600160a01b031661092f565b610498610a16565b604080516001600160a01b039092168252519081900360200190f35b61014f610a3a565b6101f0600480360360408110156104d257600080fd5b506001600160a01b0381351690602001356107a7565b610498610a9b565b61024b610abf565b6101f06004803603608081101561050e57600080fd5b506001600160a01b03813581169160208101359091169060408101359060600135610ac9565b61024b610cfb565b6103f06004803603604081101561055257600080fd5b506001600160a01b038135169060200135610d00565b61024b6004803603604081101561057e57600080fd5b506001600160a01b03813581169160200135166108b3565b6103f0600480360360608110156105ac57600080fd5b506001600160a01b038135169060208101359060400135610dba565b60038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156106545780601f1061062957610100808354040283529160200191610654565b820191906000526020600020905b81548152906001019060200180831161063757829003601f168201915b5050505050905090565b6040805162461bcd60e51b81526020600482015260166024820152751054141493d5905317d393d517d4d5541413d495115160521b6044820152905160009181900360640190fd5b6000806106b283610f67565b6106ba610f82565b91509150915091565b600061078f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663386497fd7f00000000000000000000000000000000000000000000000000000000000000006040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561075557600080fd5b505afa158015610769573d6000803e3d6000fd5b505050506040513d602081101561077f57600080fd5b5051610789610f82565b90610f88565b905090565b600061079f82610f67565b90505b919050565b6040805162461bcd60e51b81526020600482015260166024820152751514905394d1915497d393d517d4d5541413d495115160521b6044820152905160009181900360640190fd5b60006107f9611046565b60075490915060ff1680610810575061081061104b565b8061081c575060065481115b6108575760405162461bcd60e51b815260040180806020018281038252602e815260200180611644602e913960400191505060405180910390fd5b60075460ff16158015610877576007805460ff1916600117905560068290555b61088084611051565b61088983611068565b6108928561107b565b80156108a3576007805460ff191690555b5050505050565b60055460ff1690565b6040805162461bcd60e51b815260206004820152601760248201527f414c4c4f57414e43455f4e4f545f535550504f525445440000000000000000006044820152905160009181900360640190fd5b6001600160a01b038083166000908152603a60209081526040808320938516835292905220545b92915050565b60008061093b83610f67565b90508061094c5760009150506107a2565b610a0f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663386497fd7f00000000000000000000000000000000000000000000000000000000000000006040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b1580156109dc57600080fd5b505afa1580156109f0573d6000803e3d6000fd5b505050506040513d6020811015610a0657600080fd5b50518290610f88565b9392505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156106545780601f1061062957610100808354040283529160200191610654565b7f000000000000000000000000000000000000000000000000000000000000000081565b600061078f610f82565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610afd611091565b6001600160a01b03161460405180604001604052806002815260200161323960f01b81525090610bab5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610b70578181015183820152602001610b58565b50505050905090810190601f168015610b9d5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50836001600160a01b0316856001600160a01b031614610bd057610bd0848685611095565b6000610bdb85610f67565b90506000610be98585611172565b6040805180820190915260028152611a9b60f11b602082015290915081610c515760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610b70578181015183820152602001610b58565b50610c5c8682611279565b6040805186815290516001600160a01b038816916000917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a3856001600160a01b0316876001600160a01b03167f2f00e3cdd69a77be7ed215ec7b2a36784dd158f921fca79ac29deffa353fe6ee8787604051808381526020018281526020019250505060405180910390a3501595945050505050565b600181565b80603a6000610d0d611091565b6001600160a01b0390811682526020808301939093526040918201600090812091871680825291909352912091909155610d45611091565b6001600160a01b03167fda919360433220e13b51e8c211e490d148e61a3bd53de8c097194e458b97f3e17f00000000000000000000000000000000000000000000000000000000000000008460405180836001600160a01b031681526020018281526020019250505060405180910390a35050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610dec611091565b6001600160a01b03161460405180604001604052806002815260200161323960f01b81525090610e5d5760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610b70578181015183820152602001610b58565b506000610e6a8383611172565b60408051808201909152600281526106a760f31b602082015290915081610ed25760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610b70578181015183820152602001610b58565b50610edd84826113f5565b6040805184815290516000916001600160a01b038716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a3604080518481526020810184905281516001600160a01b038716927f49995e5dd6158cf69ad3e9777c46755a1a826a446c6416992167462dad033b2a928290030190a250505050565b6001600160a01b031660009081526020819052604090205490565b60025490565b6000821580610f95575081155b15610fa257506000610929565b816b019d971e4fe8401e740000001981610fb857fe5b0483111560405180604001604052806002815260200161068760f31b815250906110235760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610b70578181015183820152602001610b58565b50506b033b2e3c9fd0803ce800000091026b019d971e4fe8401e74000000010490565b600290565b303b1590565b805161106490600390602084019061158e565b5050565b805161106490600490602084019061158e565b6005805460ff191660ff92909216919091179055565b3390565b6040805180820182526002815261353960f01b6020808301919091526001600160a01b038087166000908152603a835284812091871681529152918220546110de918490611493565b6001600160a01b038086166000818152603a602090815260408083208986168085529083529281902086905580517f000000000000000000000000000000000000000000000000000000000000000090951685529084018590528051949550909391927fda919360433220e13b51e8c211e490d148e61a3bd53de8c097194e458b97f3e1929081900390910190a350505050565b604080518082019091526002815261035360f41b6020820152600090826111da5760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610b70578181015183820152602001610b58565b5060408051808201909152600280825261068760f31b60208301528304906b033b2e3c9fd0803ce80000008219048511156112565760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610b70578181015183820152602001610b58565b5082816b033b2e3c9fd0803ce80000008602018161127057fe5b04949350505050565b6001600160a01b0382166112d4576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b6112e0600083836114ed565b6002546112ed81836114f2565b6002556001600160a01b03831660009081526020819052604090205461131381846114f2565b6001600160a01b038086166000908152602081905260409020919091557f000000000000000000000000000000000000000000000000000000000000000016156113ef577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166331873e2e8584846040518463ffffffff1660e01b815260040180846001600160a01b031681526020018381526020018281526020019350505050600060405180830381600087803b1580156113d657600080fd5b505af11580156113ea573d6000803e3d6000fd5b505050505b50505050565b6001600160a01b03821661143a5760405162461bcd60e51b81526004018080602001828103825260218152602001806116726021913960400191505060405180910390fd5b611446826000836114ed565b600254611453818361154c565b6002556001600160a01b03831660009081526020818152604091829020548251606081019093526022808452909261131392869290611622908301398391905b600081848411156114e55760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610b70578181015183820152602001610b58565b505050900390565b505050565b600082820183811015610a0f576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b6000610a0f83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611493565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106115cf57805160ff19168380011785556115fc565b828001600101855582156115fc579182015b828111156115fc5782518255916020019190600101906115e1565b5061160892915061160c565b5090565b5b80821115611608576000815560010161160d56fe45524332303a206275726e20616d6f756e7420657863656564732062616c616e6365436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a656445524332303a206275726e2066726f6d20746865207a65726f2061646472657373a2646970667358221220901235a234c2545adfd90549bd6ff94399ed57de72312191efebdf1f336eebf764736f6c634300060c0033";
