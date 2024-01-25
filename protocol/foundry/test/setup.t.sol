// SPDX-License-Identifier: AGPL-3.0-only
pragma solidity 0.6.12;

import "forge-std/Test.sol";
import "forge-std/console2.sol";
import {LendingPool} from "../../contracts/protocol/lendingpool/LendingPool.sol";
import {LendingPoolConfigurator} from "../../contracts/protocol/lendingpool/LendingPoolConfigurator.sol";
import {InitializableAdminUpgradeabilityProxy as Proxy} from "../../contracts/dependencies/openzeppelin/upgradeability/InitializableAdminUpgradeabilityProxy.sol";
import {AgaveProtocolDataProvider as DataProvider} from "../../contracts/misc/AgaveProtocolDataProvider.sol";
import {LendingPoolAddressesProvider as AddressesProvider} from "../../contracts/protocol/configuration/LendingPoolAddressesProvider.sol";
import {WETHGateway} from "../../contracts/misc/WETHGateway.sol";
import {AToken} from "../../contracts/protocol/tokenization/AToken.sol";
import {VariableDebtToken} from "../../contracts/protocol/tokenization/VariableDebtToken.sol";
import {AgaveOracle} from "../../contracts/misc/AgaveOracle.sol";


contract SetupUpgrade is Test {

    AddressesProvider addressesProvider = AddressesProvider(0x3673C22153E363B1da69732c4E0aA71872Bbb87F);
    LendingPool pool = LendingPool(addressesProvider.getLendingPool());
    address admin = addressesProvider.getPoolAdmin();
    address wxdai = 0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d;
    address agWXDAI = 0xd4e420bBf00b0F409188b338c5D87Df761d6C894;
    VariableDebtToken debtWXDAI = VariableDebtToken(0xec72De30C3084023F7908002A2252a606CCe0B2c);
    address gno = 0x9C58BAcC331c9aa871AFD802DB6379a98e80CEdb;
    address agGNO = 0xA26783eAd6C1f4744685c14079950622674ae8A8;
    address usdc = 0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83;
    address agUSDC = 0x291B5957c9CBe9Ca6f0b98281594b4eB495F4ec1;
    WETHGateway wxdaiGateway;
    DataProvider dataProvider;
    AgaveOracle oracle;
    LendingPoolConfigurator configurator;
    
    address payable newGateway = 0x36A644cC38Ae257136EEca5919800f364d73FeFC;
    address payable newDataProvider = 0xE6729389DEa76D47b5BcB0bA5c080821c3B51329;
    address payable newOracle = 0x062B9D1D3F5357Ef399948067E93B81F4B85db7a;
    address payable newLendingPoolImpl = 0x73280CC830A4BE3f14Ab2439660361dC70D024fd;
    address payable newLendingPoolCollateralManager = 0xD7E6500dFB81A5B2553b7604cB55305aA7db949f;
    address payable newLendingPoolConfiguratorImpl = 0x4E7dfD59060e2C91495B006617f7E429439304cA;

    function setUp() public {
        vm.startPrank(admin);
        addressesProvider.setPriceOracle(newOracle);
        addressesProvider.setLendingPoolCollateralManager(newLendingPoolCollateralManager);
        addressesProvider.setLendingPoolImpl(newLendingPoolImpl);
        addressesProvider.setLendingPoolConfiguratorImpl(newLendingPoolConfiguratorImpl);
        vm.stopPrank();

        wxdaiGateway = WETHGateway(newGateway);
        dataProvider = DataProvider(newDataProvider);
        configurator = LendingPoolConfigurator(newLendingPoolConfiguratorImpl);
        oracle = AgaveOracle(newOracle);

        vm.label(newGateway, "WETHGateway");
        vm.label(newDataProvider, "DataProvider");
        vm.label(newLendingPoolConfiguratorImpl, "ConfiguratorImpl");
        vm.label(newOracle, "Oracle");
        vm.label(address(pool), "Pool");
        vm.label(newLendingPoolImpl, "PoolImpl");
        vm.label(newLendingPoolCollateralManager, "CollateralManager");
        vm.label(address(addressesProvider), "addrProvider");
    }

    function testIsUpgraded() public{
        vm.startPrank(address(addressesProvider));
        assertEq(addressesProvider.getLendingPoolCollateralManager(), newLendingPoolCollateralManager);
        assertEq(addressesProvider.getPriceOracle(), newOracle);
        assertEq(Proxy(payable(addressesProvider.getLendingPool())).implementation(), newLendingPoolImpl);
        assertEq(Proxy(payable(addressesProvider.getLendingPoolConfigurator())).implementation(), newLendingPoolConfiguratorImpl);
        vm.stopPrank();
    }
}
