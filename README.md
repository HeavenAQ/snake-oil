# Introduction

This is a simple SPA (single page application) that allows users to play the board game, snake oil. The game is played with 4-10 players and is a party game. The game is played in rounds, where one player is the customer and the other players are salesmen. The customer draws a card with a role on it, and the salesmen must pitch a product to the customer that they think would be the best fit for the role. The customer then chooses the best pitch and the winning salesman gets a point. The game continues until each player has been the customer once. The player with the most points at the end of the game wins.

## How to modify this project to suit your needs?

- In the `src/App.tsx` file, there are a `audience` list and a `products` list. You can modify these lists to suit your needs. The `audience` list is a list of roles that the customer can draw. The `products` list is a list of products that the salesmen can pitch to the customer. You can add or remove items from these lists to suit your needs.`

```tsx
const audience = [
  "Nurse",
  "Millionaire",
  "Baker",
  "Devil",
  "Killer",
  "Dictator",
  "Dragon",
];
const products = [
  "Utensils",
  "Lantern",
  "Vortex",
  "Cactus",
  "Box",
  "Chair",
  "Honey",
  "Torch",
  "Bunny",
  "Zebra",
];
```

## How to run this project?

```bash
npm i
npm run dev
```
