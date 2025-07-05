# World ID Integration Setup

This guide explains how to set up World ID verification for the CoLancers platform.

## Overview

World ID provides privacy-preserving proof of personhood, ensuring one person, one account policy for the CoLancers platform.

## Setup Steps

### 1. Get World ID App ID

1. Go to [World ID Developer Portal](https://developer.worldcoin.org/)
2. Create a new app or use an existing one
3. Copy your App ID (starts with `app_`)

### 2. Update Configuration

Replace the placeholder App ID in the following files:

**File: `src/components/worldid/WorldIDVerification.tsx`**
```typescript
app_id="your-actual-app-id-here"
```

**File: `src/providers/WorldIDProvider.tsx`**
```typescript
app_id="your-actual-app-id-here"
```

### 3. Environment Variables (Optional)

For production, you can use environment variables:

```env
NEXT_PUBLIC_WORLD_ID_APP_ID=your-actual-app-id-here
```

Then update the components to use:
```typescript
app_id={process.env.NEXT_PUBLIC_WORLD_ID_APP_ID}
```

## How It Works

### Verification Flow

1. **User clicks "Verify with World ID"**
2. **World ID widget opens** with the user's wallet address as signal
3. **User completes verification** using World App or Orb
4. **Proof is generated** and sent to the `onSuccess` callback
5. **Verification is stored** locally (in production, verify on-chain)
6. **User gets access** to full platform features

### Security Features

- **Zero-knowledge proofs**: No personal data is collected
- **Privacy-preserving**: Only proves uniqueness, not identity
- **Sybil-resistant**: Prevents duplicate registrations
- **On-chain verification**: Can be verified on any blockchain

## Production Considerations

### Backend Integration

In production, you should:

1. **Verify proofs on-chain** using World ID contracts
2. **Store verification status** in your database
3. **Implement proper error handling** for failed verifications
4. **Add rate limiting** to prevent abuse

### Smart Contract Integration

```solidity
// Example: Verify World ID proof on-chain
import { ByteHasher } from "@worldcoin/world-id-contracts/contracts/libs/ByteHasher.sol";
import { IWorldID } from "@worldcoin/world-id-contracts/contracts/interfaces/IWorldID.sol";

contract ColancersVerifier {
    using ByteHasher for bytes;
    
    IWorldID internal immutable worldId;
    uint256 internal immutable externalNullifierHash;
    
    constructor(IWorldID _worldId, string memory _appId, string memory _action) {
        worldId = _worldId;
        externalNullifierHash = abi.encodePacked(_appId, _action).hashToField();
    }
    
    function verifyWorldId(
        address signal,
        uint256 root,
        uint256 nullifierHash,
        uint256[8] calldata proof
    ) public {
        worldId.verifyProof(
            root,
            abi.encodePacked(signal).hashToField(),
            nullifierHash,
            externalNullifierHash,
            proof
        );
        
        // Mark user as verified
        // emit UserVerified(signal);
    }
}
```

## Testing

### Development Testing

1. Use the World ID simulator for development
2. Test with different wallet addresses
3. Verify the proof validation logic
4. Test error scenarios

### Production Testing

1. Use real World ID Orb for testing
2. Test with multiple users
3. Verify on-chain proof validation
4. Test integration with your backend

## Troubleshooting

### Common Issues

1. **"Invalid App ID"**: Make sure you're using the correct App ID from the developer portal
2. **"Signal mismatch"**: Ensure the signal (wallet address) is properly formatted
3. **"Proof verification failed"**: Check that the proof is being sent correctly to the backend

### Debug Mode

Enable debug mode in development:
```typescript
<IDKitWidget
  app_id="your-app-id"
  action="colancers-verification"
  signal={address}
  onSuccess={handleVerify}
  debug={true} // Enable debug mode
>
```

## Resources

- [World ID Documentation](https://docs.worldcoin.org/)
- [World ID Developer Portal](https://developer.worldcoin.org/)
- [World ID Contracts](https://github.com/worldcoin/world-id-contracts)
- [World ID SDK](https://github.com/worldcoin/idkit)

## Support

For World ID specific issues:
- [World ID Discord](https://discord.gg/worldcoin)
- [World ID GitHub](https://github.com/worldcoin)
- [World ID Documentation](https://docs.worldcoin.org/) 