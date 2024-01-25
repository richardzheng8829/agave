/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { WETH9Mocked } from "./WETH9Mocked";

export class WETH9MockedFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<WETH9Mocked> {
    return super.deploy(overrides || {}) as Promise<WETH9Mocked>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): WETH9Mocked {
    return super.attach(address) as WETH9Mocked;
  }
  connect(signer: Signer): WETH9MockedFactory {
    return super.connect(signer) as WETH9MockedFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WETH9Mocked {
    return new Contract(address, _abi, signerOrProvider) as WETH9Mocked;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "guy",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
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
        name: "dst",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "Withdrawal",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
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
        name: "guy",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
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
        name: "",
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
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
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
        name: "dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
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
        name: "src",
        type: "address",
      },
      {
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "withdraw",
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
  "0x60c0604052600e60808190526d57726170706564204e415449564560901b60a090815261002f916000919061007e565b5060408051808201909152600780825266574e415449564560c81b602090920191825261005e9160019161007e565b506002805460ff1916601217905534801561007857600080fd5b50610111565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100bf57805160ff19168380011785556100ec565b828001600101855582156100ec579182015b828111156100ec5782518255916020019190600101906100d1565b506100f89291506100fc565b5090565b5b808211156100f857600081556001016100fd565b610780806101206000396000f3fe6080604052600436106100ab5760003560e01c806370a082311161006457806370a082311461025557806395d89b4114610288578063a0712d681461029d578063a9059cbb146102c7578063d0e30db014610300578063dd62ed3e14610308576100ba565b806306fdde03146100bf578063095ea7b31461014957806318160ddd1461019657806323b872dd146101bd5780632e1a7d4d14610200578063313ce5671461022a576100ba565b366100ba576100b8610343565b005b600080fd5b3480156100cb57600080fd5b506100d4610392565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561010e5781810151838201526020016100f6565b50505050905090810190601f16801561013b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561015557600080fd5b506101826004803603604081101561016c57600080fd5b506001600160a01b038135169060200135610420565b604080519115158252519081900360200190f35b3480156101a257600080fd5b506101ab610486565b60408051918252519081900360200190f35b3480156101c957600080fd5b50610182600480360360608110156101e057600080fd5b506001600160a01b0381358116916020810135909116906040013561048a565b34801561020c57600080fd5b506100b86004803603602081101561022357600080fd5b50356105be565b34801561023657600080fd5b5061023f610653565b6040805160ff9092168252519081900360200190f35b34801561026157600080fd5b506101ab6004803603602081101561027857600080fd5b50356001600160a01b031661065c565b34801561029457600080fd5b506100d461066e565b3480156102a957600080fd5b50610182600480360360208110156102c057600080fd5b50356106c8565b3480156102d357600080fd5b50610182600480360360408110156102ea57600080fd5b506001600160a01b038135169060200135610719565b6100b8610343565b34801561031457600080fd5b506101ab6004803603604081101561032b57600080fd5b506001600160a01b038135811691602001351661072d565b33600081815260036020908152604091829020805434908101909155825190815291517fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c9281900390910190a2565b6000805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156104185780601f106103ed57610100808354040283529160200191610418565b820191906000526020600020905b8154815290600101906020018083116103fb57829003601f168201915b505050505081565b3360008181526004602090815260408083206001600160a01b038716808552908352818420869055815186815291519394909390927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925928290030190a350600192915050565b4790565b6001600160a01b0383166000908152600360205260408120548211156104af57600080fd5b6001600160a01b03841633148015906104ed57506001600160a01b038416600090815260046020908152604080832033845290915290205460001914155b1561054d576001600160a01b038416600090815260046020908152604080832033845290915290205482111561052257600080fd5b6001600160a01b03841660009081526004602090815260408083203384529091529020805483900390555b6001600160a01b03808516600081815260036020908152604080832080548890039055938716808352918490208054870190558351868152935191937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929081900390910190a35060019392505050565b336000908152600360205260409020548111156105da57600080fd5b33600081815260036020526040808220805485900390555183156108fc0291849190818181858888f19350505050158015610619573d6000803e3d6000fd5b5060408051828152905133917f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b65919081900360200190a250565b60025460ff1681565b60036020526000908152604090205481565b60018054604080516020600284861615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156104185780601f106103ed57610100808354040283529160200191610418565b3360008181526003602090815260408083208054860190558051858152905192939284927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef928290030190a3919050565b600061072633848461048a565b9392505050565b60046020908152600092835260408084209091529082529020548156fea2646970667358221220d0f0bd19a777d083c4330e20fb1642ae8e7b02dd81a8b3a993e10b2c2eca701964736f6c634300060c0033";
