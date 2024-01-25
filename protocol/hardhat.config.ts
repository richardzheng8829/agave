import path from 'path';
import fs from 'fs';
import { HardhatUserConfig } from 'hardhat/types';
// @ts-ignore
import { accounts } from './test-wallets.js';
import { eEthereumNetwork } from './helpers/types';
import { BUIDLEREVM_CHAINID, COVERAGE_CHAINID } from './helpers/buidler-constants';

require('dotenv').config();

import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-waffle';
import 'temp-hardhat-etherscan';
import 'hardhat-gas-reporter';
import 'hardhat-typechain';
// import '@tenderly/hardhat-tenderly';

const SKIP_LOAD = process.env.SKIP_LOAD === 'true';
const DEFAULT_BLOCK_GAS_LIMIT = 12450000;
const DEFAULT_GAS_MUL = 5;
const DEFAULT_GAS_PRICE = 1000000000;
const HARDFORK = 'istanbul';
const INFURA_KEY = process.env.INFURA_KEY || '';
const ALCHEMY_KEY = process.env.ALCHEMY_KEY || '';
const ETHERSCAN_KEY = process.env.ETHERSCAN_KEY || '';
const MNEMONIC_PATH = "m/44'/60'/0'/0";
const MNEMONIC = process.env.MNEMONIC || '';
const MAINNET_FORK = process.env.MAINNET_FORK === 'true';

// Prevent to load scripts before compilation and typechain
if (!SKIP_LOAD) {
  ['misc', 'migrations', 'dev', 'full', 'verifications', 'deployments', 'helpers'].forEach(
    (folder) => {
      const tasksPath = path.join(__dirname, 'tasks', folder);
      fs.readdirSync(tasksPath)
        .filter((pth) => pth.includes('.ts'))
        .forEach((task) => {
          require(`${tasksPath}/${task}`);
        });
    }
  );
}

require(`${path.join(__dirname, 'tasks/misc')}/set-bre.ts`);

const getCommonNetworkConfig = (networkName: eEthereumNetwork, networkId: number) => {
  const net = networkName === 'main' ? 'mainnet' : networkName;
  return {
    url: ALCHEMY_KEY
      ? `https://eth-${net}.alchemyapi.io/v2/${ALCHEMY_KEY}`
      : `https://gnosischain-rpc.gateway.pokt.network`,
    hardfork: HARDFORK,
    blockGasLimit: DEFAULT_BLOCK_GAS_LIMIT,
    gasMultiplier: DEFAULT_GAS_MUL,
    gasPrice: DEFAULT_GAS_PRICE,
    chainId: networkId,
    accounts: {
      mnemonic: MNEMONIC,
      path: MNEMONIC_PATH,
      initialIndex: 0,
      count: 20,
    },
  };
};

const mainnetFork = MAINNET_FORK
  ? {
      blockNumber: 11608298,
      url: ALCHEMY_KEY
        ? `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_KEY}`
        : `https://mainnet.infura.io/v3/${INFURA_KEY}`,
    }
  : undefined;

const buidlerConfig: HardhatUserConfig = {
  solidity: {
    version: '0.6.12',
    settings: {
      optimizer: { enabled: true, runs: 200 },
      evmVersion: 'istanbul',
    },
  },
  typechain: {
    outDir: 'types',
    target: 'ethers-v5',
  },
  etherscan: {
    apiKey: ETHERSCAN_KEY,
    /*customChains: [
      {
        network: "xdai",
        chainId: 5,
        urls: {
          apiURL: "https://api.gnosisscan.io/api",
          browserURL: "https://gnosisscan.io"
        }
      }
    ]*/
  },
  mocha: {
    timeout: 0,
  },
  // tenderly: {
  //   project: process.env.TENDERLY_PROJECT || '',
  //   username: process.env.TENDERLY_USERNAME || '',
  //   forkNetwork: '1', //Network id of the network we want to fork
  // },
  networks: {
    coverage: {
      url: 'http://localhost:8555',
      chainId: COVERAGE_CHAINID,
    },
    kovan: {
      ...getCommonNetworkConfig(eEthereumNetwork.rinkeby, 42),
      url: 'https://kovan.poa.network',
      gasPrice: 1000000000,
      blockGasLimit: 10000000,
    },
    rinkeby: {
      ...getCommonNetworkConfig(eEthereumNetwork.rinkeby, 4),
      url: 'https://rpc.ankr.com/eth_rinkeby',
      gasPrice: 1000000000,
      blockGasLimit: 10000000,
    },
    ropsten: getCommonNetworkConfig(eEthereumNetwork.ropsten, 3),
    xdai: {
      ...getCommonNetworkConfig(eEthereumNetwork.xdai, 100),
      url: 'https://gnosischain-rpc.gateway.pokt.network',
      gasPrice: 10000000000,
      blockGasLimit: 7500000,
    },
    main: getCommonNetworkConfig(eEthereumNetwork.main, 1),
    // tenderlyMain: getCommonNetworkConfig(eEthereumNetwork.main, 1),
    hardhat: {
      hardfork: 'istanbul',
      blockGasLimit: DEFAULT_BLOCK_GAS_LIMIT,
      gas: DEFAULT_BLOCK_GAS_LIMIT,
      gasPrice: 8000000000,
      chainId: BUIDLEREVM_CHAINID,
      throwOnTransactionFailures: true,
      throwOnCallFailures: true,
      accounts: accounts.map(({ secretKey, balance }: { secretKey: string; balance: string }) => ({
        privateKey: secretKey,
        balance,
      })),
      forking: mainnetFork,
    },
    buidlerevm_docker: {
      hardfork: 'istanbul',
      blockGasLimit: 9500000,
      gas: 9500000,
      gasPrice: 8000000000,
      chainId: BUIDLEREVM_CHAINID,
      throwOnTransactionFailures: true,
      throwOnCallFailures: true,
      url: 'http://localhost:8545',
    },
    besu: {
      url: 'http://127.0.0.1:7545',
      chainId: 1337,
      gasPrice: 0,
      gas: 0x1ffffffffffffe,
      accounts: {
        mnemonic: 'fox sight canyon orphan hotel grow hedgehog build bless august weather swarm',
        path: "m/44'/60'/0'/0",
        initialIndex: 0,
        count: 20,
      },
    },
    ganache: {
      url: 'http://ganache:8545',
      accounts: {
        mnemonic: 'fox sight canyon orphan hotel grow hedgehog build bless august weather swarm',
        path: "m/44'/60'/0'/0",
        initialIndex: 0,
        count: 20,
      },
    },
  },
};


export default buidlerConfig;
