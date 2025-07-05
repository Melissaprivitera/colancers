// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title PaymentContract
 * @dev Smart contract for fair payment distribution in collaborative teams
 */
contract PaymentContract is ReentrancyGuard, Ownable {
    uint256 private _projectIds;
    uint256 private _paymentIds;
    
    struct Project {
        uint256 id;
        address client;
        uint256 budget;
        string currency;
        ProjectStatus status;
        mapping(address => uint256) memberContributions;
        address[] members;
        uint256 totalContribution;
        uint256 createdAt;
        uint256 deadline;
    }
    
    struct Payment {
        uint256 id;
        uint256 projectId;
        address recipient;
        uint256 amount;
        string currency;
        PaymentStatus status;
        uint256 createdAt;
        uint256 completedAt;
    }
    
    enum ProjectStatus { Open, InProgress, Completed, Cancelled }
    enum PaymentStatus { Pending, Completed, Failed }
    
    mapping(uint256 => Project) public projects;
    mapping(uint256 => Payment) public payments;
    mapping(address => uint256[]) public userProjects;
    mapping(address => uint256[]) public userPayments;
    
    event ProjectCreated(uint256 indexed projectId, address indexed client, uint256 budget, string currency);
    event MemberAdded(uint256 indexed projectId, address indexed member, uint256 contribution);
    event PaymentDistributed(uint256 indexed paymentId, uint256 indexed projectId, address indexed recipient, uint256 amount);
    event ProjectCompleted(uint256 indexed projectId);
    
    modifier projectExists(uint256 projectId) {
        require(projects[projectId].id != 0, "Project does not exist");
        _;
    }
    
    modifier onlyProjectMember(uint256 projectId) {
        require(projects[projectId].memberContributions[msg.sender] > 0, "Not a project member");
        _;
    }
    
    modifier onlyProjectClient(uint256 projectId) {
        require(projects[projectId].client == msg.sender, "Not the project client");
        _;
    }
    
    /**
     * @dev Create a new project
     * @param budget Total budget for the project
     * @param currency Currency for the project (e.g., "ETH", "USDC")
     * @param deadline Project deadline timestamp
     */
    function createProject(uint256 budget, string memory currency, uint256 deadline) 
        external 
        payable 
        returns (uint256) 
    {
        require(budget > 0, "Budget must be greater than 0");
        require(deadline > block.timestamp, "Deadline must be in the future");
        
        _projectIds++;
        uint256 projectId = _projectIds;
        
        Project storage project = projects[projectId];
        project.id = projectId;
        project.client = msg.sender;
        project.budget = budget;
        project.currency = currency;
        project.status = ProjectStatus.Open;
        project.createdAt = block.timestamp;
        project.deadline = deadline;
        
        userProjects[msg.sender].push(projectId);
        
        emit ProjectCreated(projectId, msg.sender, budget, currency);
        
        return projectId;
    }
    
    /**
     * @dev Add a member to a project with their contribution percentage
     * @param projectId ID of the project
     * @param member Address of the member to add
     * @param contribution Contribution percentage (basis points, e.g., 1000 = 10%)
     */
    function addMember(uint256 projectId, address member, uint256 contribution) 
        external 
        projectExists(projectId)
        onlyProjectClient(projectId)
    {
        require(member != address(0), "Invalid member address");
        require(contribution > 0, "Contribution must be greater than 0");
        require(projects[projectId].status == ProjectStatus.Open, "Project is not open");
        
        Project storage project = projects[projectId];
        require(project.memberContributions[member] == 0, "Member already exists");
        
        project.memberContributions[member] = contribution;
        project.members.push(member);
        project.totalContribution += contribution;
        
        userProjects[member].push(projectId);
        
        emit MemberAdded(projectId, member, contribution);
    }
    
    /**
     * @dev Start a project (move to InProgress)
     * @param projectId ID of the project
     */
    function startProject(uint256 projectId) 
        external 
        projectExists(projectId)
        onlyProjectClient(projectId)
    {
        Project storage project = projects[projectId];
        require(project.status == ProjectStatus.Open, "Project is not open");
        require(project.totalContribution <= 10000, "Total contribution cannot exceed 100%");
        
        project.status = ProjectStatus.InProgress;
    }
    
    /**
     * @dev Complete a project and distribute payments
     * @param projectId ID of the project
     */
    function completeProject(uint256 projectId) 
        external 
        nonReentrant
        projectExists(projectId)
        onlyProjectClient(projectId)
    {
        Project storage project = projects[projectId];
        require(project.status == ProjectStatus.InProgress, "Project is not in progress");
        
        project.status = ProjectStatus.Completed;
        
        // Distribute payments to all members
        for (uint256 i = 0; i < project.members.length; i++) {
            address member = project.members[i];
            uint256 contribution = project.memberContributions[member];
            uint256 paymentAmount = (project.budget * contribution) / 10000;
            
            if (paymentAmount > 0) {
                _createPayment(projectId, member, paymentAmount, project.currency);
            }
        }
        
        emit ProjectCompleted(projectId);
    }
    
    /**
     * @dev Create a payment record
     * @param projectId ID of the project
     * @param recipient Address of the payment recipient
     * @param amount Payment amount
     * @param currency Payment currency
     */
    function _createPayment(uint256 projectId, address recipient, uint256 amount, string memory currency) 
        internal 
    {
        _paymentIds++;
        uint256 paymentId = _paymentIds;
        
        Payment storage payment = payments[paymentId];
        payment.id = paymentId;
        payment.projectId = projectId;
        payment.recipient = recipient;
        payment.amount = amount;
        payment.currency = currency;
        payment.status = PaymentStatus.Pending;
        payment.createdAt = block.timestamp;
        
        userPayments[recipient].push(paymentId);
        
        // In a real implementation, you would transfer the actual tokens here
        // For now, we just mark it as completed
        payment.status = PaymentStatus.Completed;
        payment.completedAt = block.timestamp;
        
        emit PaymentDistributed(paymentId, projectId, recipient, amount);
    }
    
    /**
     * @dev Get project details
     * @param projectId ID of the project
     */
    function getProject(uint256 projectId) 
        external 
        view 
        projectExists(projectId)
        returns (
            uint256 id,
            address client,
            uint256 budget,
            string memory currency,
            ProjectStatus status,
            uint256 totalContribution,
            uint256 createdAt,
            uint256 deadline
        )
    {
        Project storage project = projects[projectId];
        return (
            project.id,
            project.client,
            project.budget,
            project.currency,
            project.status,
            project.totalContribution,
            project.createdAt,
            project.deadline
        );
    }
    
    /**
     * @dev Get project members and their contributions
     * @param projectId ID of the project
     */
    function getProjectMembers(uint256 projectId) 
        external 
        view 
        projectExists(projectId)
        returns (address[] memory members, uint256[] memory contributions)
    {
        Project storage project = projects[projectId];
        members = project.members;
        contributions = new uint256[](members.length);
        
        for (uint256 i = 0; i < members.length; i++) {
            contributions[i] = project.memberContributions[members[i]];
        }
    }
    
    /**
     * @dev Get payment details
     * @param paymentId ID of the payment
     */
    function getPayment(uint256 paymentId) 
        external 
        view 
        returns (
            uint256 id,
            uint256 projectId,
            address recipient,
            uint256 amount,
            string memory currency,
            PaymentStatus status,
            uint256 createdAt,
            uint256 completedAt
        )
    {
        Payment storage payment = payments[paymentId];
        return (
            payment.id,
            payment.projectId,
            payment.recipient,
            payment.amount,
            payment.currency,
            payment.status,
            payment.createdAt,
            payment.completedAt
        );
    }
    
    /**
     * @dev Get user's projects
     * @param user Address of the user
     */
    function getUserProjects(address user) external view returns (uint256[] memory) {
        return userProjects[user];
    }
    
    /**
     * @dev Get user's payments
     * @param user Address of the user
     */
    function getUserPayments(address user) external view returns (uint256[] memory) {
        return userPayments[user];
    }
} 