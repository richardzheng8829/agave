/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { ITokenConfiguration } from "./ITokenConfiguration";

export class ITokenConfigurationFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ITokenConfiguration {
    return new Contract(address, _abi, signerOrProvider) as ITokenConfiguration;
  }
}

const _abi = [
  {
    inputs: [],
    name: "POOL",
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
];
