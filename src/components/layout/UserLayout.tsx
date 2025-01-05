import { ReactNode } from 'react';
import HeaderComponent from '../HeaderComponent';
import FooterComponent from '../FooterComponent';


interface Props {
  children?: ReactNode
}

const UserLayout: React.FC = ({ children, ...props }: Props) => {
    return (
      <div {...props}>
        <HeaderComponent />
        <main>{children}</main>
        <FooterComponent />
      </div>
    );
  };
  
  export default UserLayout;