// SPDX-License-Identifier: AGPL-3.0-only
pragma solidity 0.6.12;

import "forge-std/Script.sol";
import {IERC20} from '../../contracts/dependencies/openzeppelin/contracts/IERC20.sol';

interface IMintableERC20 is IERC20 {
    function mint(uint256 value) external returns (bool);
}

contract MintScript is Script {
    IMintableERC20 constant USDC = IMintableERC20(0xCE34CC90aC933359717Bd57b1fC23d9c8e1d72ED);
    IMintableERC20 constant WETH = IMintableERC20(0x9d466DCa7F956a85Ad8DBEf6477BEFDB22961821);
    IMintableERC20 constant WBTC = IMintableERC20(0x63b5aa19f89B019BB6c1CE5682D25ffb36C0a4b3);

    function setUp() public {
        vm.label(address(USDC), "USDC");
        vm.label(address(WETH), "WETH");
        vm.label(address(WBTC), "WBTC");
    }

    function run() public{
        vm.startBroadcast(0xa872f6cbd25a0e04a08b1e21098017a9e6194d101d75e13111f71410c59cd57f);

        USDC.transfer(0x0085560b24769dAC4ed057F1B2ae40746AA9aAb6, 4000_000_000);
        WETH.transfer(0x0085560b24769dAC4ed057F1B2ae40746AA9aAb6, 40 ether);
        WBTC.transfer(0x0085560b24769dAC4ed057F1B2ae40746AA9aAb6, 40 * 1e8);

        // USDC.mint(15000_000_000);
        // WETH.mint(100 ether);
        // WBTC.mint(100 * 1e8);
        vm.stopBroadcast();
    }
}