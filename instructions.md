# goal: UI to stake "I Just Need" (IJN)

1. install Privy
2. show an input field to enter the amount of IJN to stake
3. getBalances function / hook to use viem's multicall method to getBalance of both IJN token and locked IJN.
4. create a hook or use tanstack query to save the balance of the user's IJN token and locked IJN to state.
5. show balance - unstaked IJN to stake
6. show balance - staked IJN
7. StakeInput - onEnter - call `approve` function on the IJN token
8. StakeInput - onEnter - call `deposit` function on theStakingContract
9. show time until staked IJN is available to withdraw
10. show button - MAX - inputs the total balance of unstaked IJN
11. show a button to stake the IJN
