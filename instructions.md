# goal: UI to stake "I Just Need" (IJN)

1. install Privy
2. show an input field to enter the amount of IJN to stake
3. getBalances function / hook to use viem's multicall method to getBalance of both IJN token and locked IJN.
4. create a hook or use tanstack query to save the balance of the user's IJN token and locked IJN to state.
5. show balance - unstaked IJN to stake
6. show balance - staked IJN
7. StakeInput - onEnter - call `approve` function on the IJN token for the token amount entered in the input field
8. Balances - show the amount approved for staking. Read this value from the IJN token contract. call the `allowance` function on the IJN token contract. operator set to the staking contract address.
9. StakeInput - onEnter - if allowance is greater than amount entered in the input field, call `deposit` function on theStakingContract
10. show time until staked IJN is available to withdraw
11. show button - MAX - inputs the total balance of unstaked IJN
12. show a button to stake the IJN
