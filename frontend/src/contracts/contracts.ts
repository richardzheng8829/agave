import { Chains } from '@/src/config/web3'
import AaveOracle from '@/src/contracts/abis/AaveOracle.json'
import AaveProtocolDataProvider from '@/src/contracts/abis/AaveProtocolDataProvider.json'
import AgaveLendingPool from '@/src/contracts/abis/AgaveLending.json'
import BaseIncentivesController from '@/src/contracts/abis/BaseIncentivesController.json'
import ERC20 from '@/src/contracts/abis/ERC20.json'
import SavingsXDai from '@/src/contracts/abis/SavingsXDai.json'
import SavingsXDaiAdapter from '@/src/contracts/abis/SavingsXDaiAdapter.json'
import StakedToken from '@/src/contracts/abis/StakedToken.json'
import WETHGateway from '@/src/contracts/abis/WETHGateway.json'

export const contracts = {
  xDAI: {
    address: {
      [Chains.gnosis]: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
      [Chains.besu]: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    },
    abi: ERC20,
  },
  WxDAI: {
    address: {
      [Chains.gnosis]: '0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d',
      [Chains.besu]: '0xfC96Dbd9dde95122033c6480d5e4340848a8E867',
    },
    abi: ERC20,
  },
  USDC: {
    address: {
      [Chains.gnosis]: '0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83',
      [Chains.besu]: '0xCE34CC90aC933359717Bd57b1fC23d9c8e1d72ED',      
    },
    abi: ERC20,
  },
  AaveProtocolDataProvider: {
    address: {
      [Chains.gnosis]: '0xE6729389DEa76D47b5BcB0bA5c080821c3B51329',
      [Chains.besu]: '0x7a2C1239126314F57eb8a0006871a6709dBb8F4D',
    },
    abi: AaveProtocolDataProvider,
  },
  AaveOracle: {
    address: {
      [Chains.gnosis]: '0x062B9D1D3F5357Ef399948067E93B81F4B85db7a',
      [Chains.besu]: '0xF77F37a472475A5a37B4E5c0Fc104Cc81539AD9a',
    },
    abi: AaveOracle,
  },
  AgaveLendingPool: {
    address: {
      [Chains.gnosis]: '0x5E15d5E33d318dCEd84Bfe3F4EACe07909bE6d9c',
      [Chains.besu]: '0xeCDf616e93E9FA4d8fC06085BB1ce32Ad1994442',      
    },
    abi: AgaveLendingPool,
  },
  BaseIncentivesController: {
    address: {
      [Chains.gnosis]: '0xfa255f5104f129B78f477e9a6D050a02f31A5D86',
      [Chains.besu]: '0xfa255f5104f129B78f477e9a6D050a02f31A5D86',      
    },
    abi: BaseIncentivesController,
  },
  WETHGateway: {
    address: {
      [Chains.gnosis]: '0x36A644cC38Ae257136EEca5919800f364d73FeFC',
      [Chains.besu]: '0x850f581116f12df63235C1DF4570d3fEEC9ece60',      
    },
    abi: WETHGateway,
  }
} as const

export type ContractsKeys = keyof typeof contracts

export const isKnownContract = (
  contractName: ContractsKeys | string,
): contractName is ContractsKeys => {
  return contracts[contractName as ContractsKeys] !== undefined
}
