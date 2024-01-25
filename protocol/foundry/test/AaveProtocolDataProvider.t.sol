// SPDX-License-Identifier: AGPL-3.0-only
pragma solidity 0.6.12;

import "forge-std/Test.sol";
import {AgaveProtocolDataProvider} from "../../contracts/misc/AgaveProtocolDataProvider.sol";


contract AgaveProtocolDataProviderTest is Test {
    AgaveProtocolDataProvider provider = AgaveProtocolDataProvider(0x4D88673c349c93c21F80A975b112394334d93766);

    function testProvider() public{
        (
            uint256 availableLiquidity,
            uint256 totalStableDebt,
            uint256 totalVariableDebt,
            uint256 liquidityRate,
            uint256 variableBorrowRate,
            uint256 stableBorrowRate,
            uint256 averageStableBorrowRate,
            uint256 liquidityIndex,
            uint256 variableBorrowIndex,
            uint40 lastUpdateTimestamp
        ) = provider.getReserveData(0xCE34CC90aC933359717Bd57b1fC23d9c8e1d72ED);
    }
}
