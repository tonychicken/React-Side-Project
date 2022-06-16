import { useAppContext } from '../context/appContext_06';
import NavLinks from './NavLinks_06';
import Logo from '../components/Logo_06';
import Wrapper from '../assets/wrappers/BigSidebar_06';

const BigSidebar_06 = () => {
  const { showSidebar } = useAppContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container ' : 'sidebar-container show-sidebar'
        }
      >
        <div className='content'>
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar_06;
