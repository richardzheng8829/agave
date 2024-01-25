/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { WETHGateway } from "./WETHGateway";

export class WETHGatewayFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    weth: string,
    pool: string,
    overrides?: Overrides
  ): Promise<WETHGateway> {
    return super.deploy(weth, pool, overrides || {}) as Promise<WETHGateway>;
  }
  getDeployTransaction(
    weth: string,
    pool: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(weth, pool, overrides || {});
  }
  attach(address: string): WETHGateway {
    return super.attach(address) as WETHGateway;
  }
  connect(signer: Signer): WETHGatewayFactory {
    return super.connect(signer) as WETHGatewayFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WETHGateway {
    return new Contract(address, _abi, signerOrProvider) as WETHGateway;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "weth",
        type: "address",
      },
      {
        internalType: "address",
        name: "pool",
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
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "interesRateMode",
        type: "uint256",
      },
      {
        internalType: "uint16",
        name: "referralCode",
        type: "uint16",
      },
    ],
    name: "borrowETH",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "onBehalfOf",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "referralCode",
        type: "uint16",
      },
    ],
    name: "depositETH",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "emergencyEtherTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "emergencyTokenTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAWETHAddress",
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
    inputs: [],
    name: "getLendingPoolAddress",
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
    inputs: [],
    name: "getWETHAddress",
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
    inputs: [],
    name: "owner",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rateMode",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "onBehalfOf",
        type: "address",
      },
    ],
    name: "repayETH",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "withdrawETH",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60e06040523480156200001157600080fd5b50604051620018f5380380620018f5833981016040819052620000349162000259565b600062000040620001cf565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3506001600160601b0319606083811b821660805282901b1660a0526040516335ea6a7560e01b815281906001600160a01b038216906335ea6a7590620000d4908690600401620003d6565b6101806040518083038186803b158015620000ee57600080fd5b505afa15801562000103573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001299190620002c0565b60e0015160601b6001600160601b03191660c05260405163095ea7b360e01b81526001600160a01b0384169063095ea7b3906200016f90859060001990600401620003ea565b602060405180830381600087803b1580156200018a57600080fd5b505af11580156200019f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001c5919062000297565b5050505062000443565b3390565b80516001600160a01b0381168114620001eb57600080fd5b92915050565b60006020828403121562000203578081fd5b6200020f602062000403565b9151825250919050565b80516001600160801b0381168114620001eb57600080fd5b805164ffffffffff81168114620001eb57600080fd5b805160ff81168114620001eb57600080fd5b600080604083850312156200026c578182fd5b825162000279816200042a565b60208401519092506200028c816200042a565b809150509250929050565b600060208284031215620002a9578081fd5b81518015158114620002b9578182fd5b9392505050565b6000610180808385031215620002d4578182fd5b620002df8162000403565b9050620002ed8484620001f1565b8152620002fe846020850162000219565b602082015262000312846040850162000219565b604082015262000326846060850162000219565b60608201526200033a846080850162000219565b60808201526200034e8460a0850162000219565b60a0820152620003628460c0850162000231565b60c0820152620003768460e08501620001d3565b60e08201526101006200038c85828601620001d3565b90820152610120620003a185858301620001d3565b90820152610140620003b685858301620001d3565b90820152610160620003cb8585830162000247565b908201529392505050565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b6040518181016001600160401b03811182821017156200042257600080fd5b604052919050565b6001600160a01b03811681146200044057600080fd5b50565b60805160601c60a05160601c60c05160601c611428620004cd6000398061027a528061032652806105055250806103c952806105af528061064552806106fd5280610a035280610ba552508060bb52806103f6528061048c528061052952806105df528061072a52806107a152806108df5280610a325280610b1f5280610bd552506114286000f3fe6080604052600436106100ab5760003560e01c80638da5cb5b116100645780638da5cb5b146101c3578063a3d5b255146101d8578063affa8817146101f8578063eed88b8d1461020d578063f2fde38b1461022d578063f538ba511461024d57610103565b806336118b521461011b5780633a21afac1461013b57806358c22be7146101665780635f36a74214610179578063715018a61461018e5780637d5155fd146101a357610103565b3661010357336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146101015760405162461bcd60e51b81526004016100f8906112d4565b60405180910390fd5b005b60405162461bcd60e51b81526004016100f890611260565b34801561012757600080fd5b5061010161013636600461108b565b610260565b34801561014757600080fd5b50610150610503565b60405161015d9190611160565b60405180910390f35b610101610174366004610ef8565b610527565b34801561018557600080fd5b50610150610643565b34801561019a57600080fd5b50610101610667565b3480156101af57600080fd5b506101016101be3660046110f2565b6106e6565b3480156101cf57600080fd5b50610150610819565b3480156101e457600080fd5b506101016101f3366004610eb8565b610828565b34801561020457600080fd5b506101506108dd565b34801561021957600080fd5b50610101610228366004610f2d565b610901565b34801561023957600080fd5b50610101610248366004610e95565b610944565b61010161025b3660046110ba565b6109fa565b6040516370a0823160e01b81526000906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a08231906102af903390600401611160565b60206040518083038186803b1580156102c757600080fd5b505afa1580156102db573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102ff9190611073565b90508260001981141561030f5750805b6040516323b872dd60e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906323b872dd9061035f90339030908690600401611174565b602060405180830381600087803b15801561037957600080fd5b505af115801561038d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103b19190610f58565b50604051631a4ca37b60e21b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906369328dec90610422907f000000000000000000000000000000000000000000000000000000000000000090859030906004016111b1565b602060405180830381600087803b15801561043c57600080fd5b505af1158015610450573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104749190611073565b50604051632e1a7d4d60e01b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690632e1a7d4d906104c19084906004016113aa565b600060405180830381600087803b1580156104db57600080fd5b505af11580156104ef573d6000803e3d6000fd5b505050506104fd8382610c66565b50505050565b7f000000000000000000000000000000000000000000000000000000000000000090565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d0e30db0346040518263ffffffff1660e01b81526004016000604051808303818588803b15801561058257600080fd5b505af1158015610596573d6000803e3d6000fd5b505060405163e8eda9df60e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016935063e8eda9df925061060d91507f0000000000000000000000000000000000000000000000000000000000000000903490879087906004016111d4565b600060405180830381600087803b15801561062757600080fd5b505af115801561063b573d6000803e3d6000fd5b505050505050565b7f000000000000000000000000000000000000000000000000000000000000000090565b61066f610cf3565b6000546001600160a01b0390811691161461069c5760405162461bcd60e51b81526004016100f890611301565b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b60405163a415bcad60e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063a415bcad9061075a907f000000000000000000000000000000000000000000000000000000000000000090879087908790339060040161122c565b600060405180830381600087803b15801561077457600080fd5b505af1158015610788573d6000803e3d6000fd5b5050604051632e1a7d4d60e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169250632e1a7d4d91506107d89086906004016113aa565b600060405180830381600087803b1580156107f257600080fd5b505af1158015610806573d6000803e3d6000fd5b505050506108143384610c66565b505050565b6000546001600160a01b031690565b610830610cf3565b6000546001600160a01b0390811691161461085d5760405162461bcd60e51b81526004016100f890611301565b60405163a9059cbb60e01b81526001600160a01b0384169063a9059cbb9061088b9085908590600401611198565b602060405180830381600087803b1580156108a557600080fd5b505af11580156108b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104fd9190610f58565b7f000000000000000000000000000000000000000000000000000000000000000090565b610909610cf3565b6000546001600160a01b039081169116146109365760405162461bcd60e51b81526004016100f890611301565b6109408282610c66565b5050565b61094c610cf3565b6000546001600160a01b039081169116146109795760405162461bcd60e51b81526004016100f890611301565b6001600160a01b03811661099f5760405162461bcd60e51b81526004016100f89061128e565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b600080610ac3837f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166335ea6a757f00000000000000000000000000000000000000000000000000000000000000006040518263ffffffff1660e01b8152600401610a6d9190611160565b6101806040518083038186803b158015610a8657600080fd5b505afa158015610a9a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610abe9190610f78565b610cf7565b909250905060006001856002811115610ad857fe5b6002811115610ae357fe5b14610aee5781610af0565b825b905080861015610afd5750845b80341015610b1d5760405162461bcd60e51b81526004016100f890611363565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d0e30db0826040518263ffffffff1660e01b81526004016000604051808303818588803b158015610b7857600080fd5b505af1158015610b8c573d6000803e3d6000fd5b505060405163573ade8160e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016935063573ade819250610c0391507f00000000000000000000000000000000000000000000000000000000000000009034908a908a90600401611201565b602060405180830381600087803b158015610c1d57600080fd5b505af1158015610c31573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c559190611073565b508034111561063b5761063b338234035b604080516000808252602082019092526001600160a01b038416908390604051610c909190611127565b60006040518083038185875af1925050503d8060008114610ccd576040519150601f19603f3d011682016040523d82523d6000602084013e610cd2565b606091505b50509050806108145760405162461bcd60e51b81526004016100f890611336565b3390565b6000808261010001516001600160a01b03166370a08231856040518263ffffffff1660e01b8152600401610d2b9190611160565b60206040518083038186803b158015610d4357600080fd5b505afa158015610d57573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d7b9190611073565b8361012001516001600160a01b03166370a08231866040518263ffffffff1660e01b8152600401610dac9190611160565b60206040518083038186803b158015610dc457600080fd5b505afa158015610dd8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dfc9190611073565b915091509250929050565b8051610e12816113da565b92915050565b600060208284031215610e29578081fd5b610e3360206113b3565b9151825250919050565b80516fffffffffffffffffffffffffffffffff81168114610e1257600080fd5b803561ffff81168114610e1257600080fd5b805164ffffffffff81168114610e1257600080fd5b805160ff81168114610e1257600080fd5b600060208284031215610ea6578081fd5b8135610eb1816113da565b9392505050565b600080600060608486031215610ecc578182fd5b8335610ed7816113da565b92506020840135610ee7816113da565b929592945050506040919091013590565b60008060408385031215610f0a578182fd5b8235610f15816113da565b9150610f248460208501610e5d565b90509250929050565b60008060408385031215610f3f578182fd5b8235610f4a816113da565b946020939093013593505050565b600060208284031215610f69578081fd5b81518015158114610eb1578182fd5b6000610180808385031215610f8b578182fd5b610f94816113b3565b9050610fa08484610e18565b8152610faf8460208501610e3d565b6020820152610fc18460408501610e3d565b6040820152610fd38460608501610e3d565b6060820152610fe58460808501610e3d565b6080820152610ff78460a08501610e3d565b60a08201526110098460c08501610e6f565b60c082015261101b8460e08501610e07565b60e082015261010061102f85828601610e07565b9082015261012061104285858301610e07565b9082015261014061105585858301610e07565b9082015261016061106885858301610e84565b908201529392505050565b600060208284031215611084578081fd5b5051919050565b6000806040838503121561109d578182fd5b8235915060208301356110af816113da565b809150509250929050565b6000806000606084860312156110ce578283fd5b833592506020840135915060408401356110e7816113da565b809150509250925092565b600080600060608486031215611106578283fd5b833592506020840135915061111e8560408601610e5d565b90509250925092565b60008251815b81811015611147576020818601810151858301520161112d565b818111156111555782828501525b509190910192915050565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b03929092168252602082015260400190565b6001600160a01b0393841681526020810192909252909116604082015260600190565b6001600160a01b03948516815260208101939093529216604082015261ffff909116606082015260800190565b6001600160a01b03948516815260208101939093526040830191909152909116606082015260800190565b6001600160a01b0395861681526020810194909452604084019290925261ffff166060830152909116608082015260a00190565b60208082526014908201527311985b1b189858dac81b9bdd08185b1b1bddd95960621b604082015260600190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b602080825260139082015272149958d95a5d99481b9bdd08185b1b1bddd959606a1b604082015260600190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526013908201527211551217d514905394d1915497d19052531151606a1b604082015260600190565b60208082526027908201527f6d73672e76616c7565206973206c657373207468616e2072657061796d656e7460408201526608185b5bdd5b9d60ca1b606082015260800190565b90815260200190565b60405181810167ffffffffffffffff811182821017156113d257600080fd5b604052919050565b6001600160a01b03811681146113ef57600080fd5b5056fea2646970667358221220472a0d9b59a65fbc14c5f97bd87fb0a8bab922901db2415831f9cb995cee015564736f6c634300060c0033";
