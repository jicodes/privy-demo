import {PrivyProvider} from '@privy-io/react-auth';

const appId = import.meta.env.VITE_PRIVY_APP_ID || 'default_app_id';
export default function Providers({children}: {children: React.ReactNode}) {
  return (
    <PrivyProvider
      appId={appId}
      config={{
        // Customize Privy's appearance in your app
        appearance: {
          theme: 'light',
          accentColor: '#676FFF',
          logo: 'https://your-logo-url',
        },
        // Create embedded wallets for users who don't have a wallet
        embeddedWallets: {
          createOnLogin: 'users-without-wallets',
        },
      }}
    >
      {children}
    </PrivyProvider>
  );
}