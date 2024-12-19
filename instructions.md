# goal: UI to stake "I Just Need" (IJN)

1. install Privy
2. show an input field to enter the amount of IJN to stake
3. getBalances function / hook to use viem's multicall method to getBalance of both IJN token and locked IJN.
4. create a hook or use tanstack query to save the balance of the user's IJN token and locked IJN to state.
5. show balance - unstaked IJN to stake
6. show balance - staked IJN
7. show a button to stake the IJN
8. StakingContract - onClick - call `deposit` function
9. show button - MAX - inputs the total balance of unstaked IJN
10. show time until staked IJN is available to withdraw
