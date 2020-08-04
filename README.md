# Notes

## Technologies Used

### CCXT

### React

### TypeScript

### Redux

Initially, you may see that I started off using my preferred global state management system, the Context API. However, given the instructions said to use Redux, I made the switch. While Redux can be a bit boilerplate heavy, it may be a better solution give how fast values are changing in this context. If the app were to grow in state management, a potential solution would be to give Recoil a try.

### Next.js

Used for SSR for performance, SEO, etc.

### Emotion

## Running

- Make sure you have the latest, stable version of node.
- To install, run `npm install` and to run, run 'npm run start'
- Please note that certain elements (i.e. scrollbar, button outlines) were kept in for accessibility reasons

## Potential Improvments / Things to note

- Use a Websocket to make reads more fluid. CCXT's pro version comes with this support

- Currently using level 2 for polling (i.e. const orderbook = await exchange.fetchOrderBook('BTC/USD')) for simplicity. Can use level 3 (const orderbook = await exchange.fetchOrderBook('BTC/USD', undefined, { 'level': 3 })) to pull in additional orders.
