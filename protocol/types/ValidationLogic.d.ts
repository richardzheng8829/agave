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

interface ValidationLogicInterface extends ethers.utils.Interface {
  functions: {
    "REBALANCE_UP_LIQUIDITY_RATE_THRESHOLD()": FunctionFragment;
    "REBALANCE_UP_USAGE_RATIO_THRESHOLD()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "REBALANCE_UP_LIQUIDITY_RATE_THRESHOLD",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "REBALANCE_UP_USAGE_RATIO_THRESHOLD",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "REBALANCE_UP_LIQUIDITY_RATE_THRESHOLD",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "REBALANCE_UP_USAGE_RATIO_THRESHOLD",
    data: BytesLike
  ): Result;

  events: {};
}

export class ValidationLogic extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ValidationLogicInterface;

  functions: {
    REBALANCE_UP_LIQUIDITY_RATE_THRESHOLD(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "REBALANCE_UP_LIQUIDITY_RATE_THRESHOLD()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    REBALANCE_UP_USAGE_RATIO_THRESHOLD(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "REBALANCE_UP_USAGE_RATIO_THRESHOLD()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;
  };

  REBALANCE_UP_LIQUIDITY_RATE_THRESHOLD(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "REBALANCE_UP_LIQUIDITY_RATE_THRESHOLD()"(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  REBALANCE_UP_USAGE_RATIO_THRESHOLD(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "REBALANCE_UP_USAGE_RATIO_THRESHOLD()"(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    REBALANCE_UP_LIQUIDITY_RATE_THRESHOLD(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "REBALANCE_UP_LIQUIDITY_RATE_THRESHOLD()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    REBALANCE_UP_USAGE_RATIO_THRESHOLD(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "REBALANCE_UP_USAGE_RATIO_THRESHOLD()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    REBALANCE_UP_LIQUIDITY_RATE_THRESHOLD(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "REBALANCE_UP_LIQUIDITY_RATE_THRESHOLD()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    REBALANCE_UP_USAGE_RATIO_THRESHOLD(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "REBALANCE_UP_USAGE_RATIO_THRESHOLD()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    REBALANCE_UP_LIQUIDITY_RATE_THRESHOLD(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "REBALANCE_UP_LIQUIDITY_RATE_THRESHOLD()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    REBALANCE_UP_USAGE_RATIO_THRESHOLD(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "REBALANCE_UP_USAGE_RATIO_THRESHOLD()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}