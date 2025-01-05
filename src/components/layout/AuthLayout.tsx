import React from 'react';
import { ReactNode } from 'react';

interface Props {
    children?: ReactNode
  }

const AuthLayout: React.FC = ({ children, ...props }: Props) => {
  return (
    <div {...props}>
      <main>{children}</main>
    </div>
  );
};

export default AuthLayout;