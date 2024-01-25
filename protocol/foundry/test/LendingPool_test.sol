pragma solidity 0.6.12;
pragma experimental ABIEncoderV2;

import "forge-std/Test.sol";
import {IERC20} from '../../contracts/dependencies/openzeppelin/contracts/IERC20.sol';
import {IERC20Detailed} from '../../contracts/dependencies/openzeppelin/contracts/IERC20Detailed.sol';
import {DataTypes} from '../../contracts/protocol/libraries/types/DataTypes.sol';
import {ILendingPool} from "../../contracts/interfaces/ILendingPool.sol";
import {ILendingPoolAddressesProvider} from "../../contracts/interfaces/ILendingPoolAddressesProvider.sol";

import {IAToken} from "../../contracts/interfaces/IAToken.sol";

contract LendingPoolTest is Test {
    ILendingPool constant lendingPool = ILendingPool(0xeCDf616e93E9FA4d8fC06085BB1ce32Ad1994442);
    IERC20 constant USDC = IERC20(0xCE34CC90aC933359717Bd57b1fC23d9c8e1d72ED);
    IAToken constant agUSDC = IAToken(0x2A8785ad713D470810a9AE28aFe7722467A3f536);

    function setUp() public {
        vm.createSelectFork("besu");

        vm.label(address(lendingPool), "LendingPool");
        vm.label(address(USDC), "USDC");
        vm.label(address(agUSDC), "agUSDC");
    }

    function testLendingPool() public {
        address user = 0x75E480dB528101a381Ce68544611C169Ad7EB342;
        uint256 amount = 10_000_000_000;

        console.log("Address provider", address(lendingPool.getAddressesProvider()));
        console.log("Price oracle", lendingPool.getAddressesProvider().getPriceOracle());

        console.log("USDC balance", USDC.balanceOf(user));
        console.log("agUSDC balance", agUSDC.balanceOf(user));

        address[] memory reserves = lendingPool.getReservesList();

        for (uint256 i = 0; i < reserves.length; i++) {
            DataTypes.ReserveData memory reserveData = lendingPool.getReserveData(reserves[i]);
            IERC20Detailed reserve = IERC20Detailed(reserves[i]);
            IERC20Detailed aToken = IERC20Detailed(reserveData.aTokenAddress);
            IERC20Detailed sdToken = IERC20Detailed(reserveData.stableDebtTokenAddress);
            IERC20Detailed vdToken = IERC20Detailed(reserveData.variableDebtTokenAddress);
            
            console.log(" --- Reserves --- ");
            console.log(reserve.symbol(), address(reserve));
            console.log(aToken.symbol(), address(aToken));
            console.log(vdToken.symbol(), address(vdToken));
            console.log(sdToken.symbol(), address(sdToken));
            console.log("strategy", reserveData.interestRateStrategyAddress);

            vm.label(address(aToken), aToken.symbol());
        }


        // vm.startPrank(user);
        // USDC.approve(address(lendingPool), amount);
        // lendingPool.deposit(address(USDC), amount, address(user), 0);
        // vm.stopPrank();
    }
}

