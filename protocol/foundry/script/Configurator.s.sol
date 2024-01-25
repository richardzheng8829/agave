// SPDX-License-Identifier: AGPL-3.0-only
pragma solidity 0.6.12;

import "forge-std/Script.sol";
import {ILendingPool} from '../../contracts/interfaces/ILendingPool.sol';

interface ILendingPoolConfigurator {
    function setReserveLimits(
        address asset,
        uint256 depositLimit,
        uint256 borrowLimit,
        uint256 collateralUsageLimit
    ) external;
}

contract SetReserveLimitScript  is Script {
    ILendingPool constant lendingPool = ILendingPool(0xeCDf616e93E9FA4d8fC06085BB1ce32Ad1994442);
    address constant USDC = 0xCE34CC90aC933359717Bd57b1fC23d9c8e1d72ED;
    address constant WETH = 0x9d466DCa7F956a85Ad8DBEf6477BEFDB22961821;
    address constant WBTC = 0x63b5aa19f89B019BB6c1CE5682D25ffb36C0a4b3;

    function setUp() public {
        vm.label(address(USDC), "USDC");
        vm.label(address(WETH), "WETH");
        vm.label(address(WETH), "WBTC");
    }

    function run() public{
        ILendingPoolConfigurator configurator = ILendingPoolConfigurator(lendingPool.getAddressesProvider().getLendingPoolConfigurator());

        vm.startBroadcast(0xa872f6cbd25a0e04a08b1e21098017a9e6194d101d75e13111f71410c59cd57f);
        configurator.setReserveLimits(USDC, 5000000_000_000, 5000000_000_000, 5000000_000_000);
        configurator.setReserveLimits(WETH, 50000 ether, 50000 ether, 50000 ether);
        configurator.setReserveLimits(WBTC, 5000000_000_000, 5000000_000_000, 5000000_000_000);
        vm.stopBroadcast();
    }
}

