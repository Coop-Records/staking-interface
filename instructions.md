# goal: UI matches Figma

## Steps

1. StakingProvider - wrap the app in a provider
2. see resources for what to export from the provider
3. Stake button - calls the deposit function
4. Balance - show IJN balance in top right of the popup
5. Locked Until - update with actual date withdrawal_time from now.
6. Screen - show `blur` effect everywhere outside the popup

## Resources

### StakingProvider

```tsx
const [stakeAmount, setStakeAmount] = useState<string>("");
const { login, authenticated } = usePrivy();
const { approve, isApproving } = useErc20Approve();
const { deposit, isDepositing } = useStakeDeposit();
const { data: balances } = useBalances();
```
