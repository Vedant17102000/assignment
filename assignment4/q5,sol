pragma solidity >=0.8.2 <0.9.0;

contract DonationContract {
    // Event when a donation is made
    event DonationMade(address indexed donor, address indexed recipient, uint256 amount);

    // Tracks donations from a donor to a recipient
    mapping(address => mapping(address => uint256)) public donations;

    // Donate to a recipient
    function donate(address recipient) external payable {
        require(msg.value > 0, "Must donate something");
        require(recipient != address(0), "Invalid recipient");

        donations[msg.sender][recipient] += msg.value;
        emit DonationMade(msg.sender, recipient, msg.value);
    }

    // Withdraw funds from the contract
    function withdraw(uint256 amount) external {
        require(amount > 0, "Amount must be greater than zero");
        require(address(this).balance >= amount, "Not enough balance");

        // Send funds to the caller
        payable(msg.sender).transfer(amount);
    }

    // Check contract's balance
    function getContractBalance() external view returns (uint256) {
        return address(this).balance;
    }

    // Check how much a donor gave to a recipient
    function getDonation(address donor, address recipient) external view returns (uint256) {
        return donations[donor][recipient];
    }
}
