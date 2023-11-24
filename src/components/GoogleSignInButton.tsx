import { FC, ReactNode } from 'react';
import { Button } from './ui/button';

interface AuthButtonProps {
  provider: string;
  children: ReactNode;
}

const AuthButton: FC<AuthButtonProps> = ({ provider, children }) => {
  const loginWithProvider = () => console.log(`Login with ${provider}`);

  return (
    <Button onClick={loginWithProvider} className='w-full'>
      {children}
    </Button>
  );
};

export default AuthButton;
