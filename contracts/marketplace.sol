pragma solidity ^0.5.0;

import "../lib/IERC1155.sol";

contract MarketPlace {
    //actual token
    IERC1155 private _token;
    //mapping price //ID => price
    mapping (uint256 => uint256) price;

    constructor (IERC1155 token) public {
        //not zero address
        require(address(token) != address(0));
        _token = token;
        price[1] = 100000000000000;
        price[2] = 200000000000000;
        price[3] = 300000000000000;
    }
    //fallback function
    function () external payable {
        buyToken(1);
    }

    //buy function
    function buyToken(uint256 tokenId) public payable{
        uint256 weiAmount = msg.value;
        //amount not less of price and it exists
        require(weiAmount >= price[tokenId] && price[tokenId] != 0);

        _token.safeTransferFrom(address(this), msg.sender, tokenId, 1, "");
    }

    //check if it is a erc1155 //trasfer only for erc1155
    function onERC1155Received(address _operator, address _from, uint256 _id, uint256 _value, bytes calldata _data) external returns(bytes4){
        return bytes4(keccak256("onERC1155Received(address,address,uint256,uint256,bytes)"));
    }
}