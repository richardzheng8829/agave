// SPDX-License-Identifier: AGPL-3.0-only
pragma solidity 0.6.12;

import "forge-std/Test.sol";
import "forge-std/console2.sol";
import {LendingPool} from "../../contracts/protocol/lendingpool/LendingPool.sol";
import {InitializableAdminUpgradeabilityProxy as Proxy} from "../../contracts/dependencies/openzeppelin/upgradeability/InitializableAdminUpgradeabilityProxy.sol";
import {AgaveProtocolDataProvider as DataProvider} from "../../contracts/misc/AgaveProtocolDataProvider.sol";
import {LendingPoolAddressesProvider as AddressesProvider} from "../../contracts/protocol/configuration/LendingPoolAddressesProvider.sol";
import {AgaveOracle} from "../../contracts/misc/AgaveOracle.sol";
import {SetupUpgrade} from './setup.t.sol';


contract PriceOracleTests is Test, SetupUpgrade {

    address wxdaiFeed = 0x678df3415fc31947dA4324eC63212874be5a82f8;
    address usdcFeed = 0x26C31ac71010aF62E6B486D1132E266D6298857D;

    function testHasPrice() public{
        uint256 price = oracle.getAssetPrice(usdc);
        console2.log("Price> ",price);

        vm.mockCall(
            address(oracle),
            abi.encodeWithSelector(AgaveOracle.getAssetPrice.selector),
            abi.encode(0)
        );
        uint256 price2 = oracle.getAssetPrice(usdc);
        console2.log("Price> ",price2);
    }

     function testSetMockPricesToZero() public{
        vm.mockCall(
            address(oracle),
            abi.encodeWithSelector(AgaveOracle.getAssetPrice.selector),
            abi.encode(0)
        );
        uint256 price = oracle.getAssetPrice(usdc);
        assertEq(0,price);
    }

    function testIncreaseMockPrices() public{
        vm.mockCall(
            address(oracle),
            abi.encodeWithSelector(AgaveOracle.getAssetPrice.selector),
            abi.encode(100000000000000000000000000)
        );
        uint256 price = oracle.getAssetPrice(usdc);
        assertEq(100000000000000000000000000,price);
    }
    
}
