# Simple privy wallet integration demo with React and TypeScript

1. Init the project
```bash
npm create vite@latest
```
Choose React + TypeScript

2. Install dependencies

Enter the project directory and type:
```bash
npm install
```

3. Install the latest version of the Privy React SDK
```bash
npm install @privy-io/react-auth@latest
```

4.  Add Privy as Provider in your App
https://docs.privy.io/guide/react/quickstart

5.  Use Provider to wrap your app

```tsx
import { PrivyProvider } from '@privy-io/react-auth';
<PrivyProvider>
  <App />
</PrivyProvider>
```

6. Use the `usePrivy` hook to access the Privy SDK
```tsx
import { usePrivy } from '@privy-io/react-auth';
const { login, user } = usePrivy();
```