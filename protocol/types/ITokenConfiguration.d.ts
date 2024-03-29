/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface ITokenConfigurationInterface extends ethers.utils.Interface {
  functions: {
    "POOL()": FunctionFragment;
    "UNDERLYING_ASSET_ADDRESS()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "POOL", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "UNDERLYING_ASSET_ADDRESS",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "POOL", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "UNDERLYING_ASSET_ADDRESS",
    data: BytesLike
  ): Result;

  events: {};
}

export class ITokenConfiguration extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ITokenConfigurationInterface;

  functions: {
    POOL(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "POOL()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    UNDERLYING_ASSET_ADDRESS(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "UNDERLYING_ASSET_ADDRESS()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;
  };

  POOL(overrides?: CallOverrides): Promise<string>;

  "POOL()"(overrides?: CallOverrides): Promise<string>;

  UNDERLYING_ASSET_ADDRESS(overrides?: CallOverrides): Promise<string>;

  "UNDERLYING_ASSET_ADDRESS()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    POOL(overrides?: CallOverrides): Promise<string>;

    "POOL()"(overrides?: CallOverrides): Promise<string>;

    UNDERLYING_ASSET_ADDRESS(overrides?: CallOverrides): Promise<string>;

    "UNDERLYING_ASSET_ADDRESS()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    POOL(overrides?: CallOverrides): Promise<BigNumber>;

    "POOL()"(overrides?: CallOverrides): Promise<BigNumber>;

    UNDERLYING_ASSET_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;

    "UNDERLYING_ASSET_ADDRESS()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    POOL(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "POOL()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    UNDERLYING_ASSET_ADDRESS(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "UNDERLYING_ASSET_ADDRESS()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
