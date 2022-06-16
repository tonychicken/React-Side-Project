import Wrapper from '../assets/wrappers/SmallSidebar_06';
import { FaTimes } from 'react-icons/fa';
import { useAppContext } from '../context/appContext_06';

import Logo_06 from './Logo_06';
import NavLinks_06 from './NavLinks_06';

const SmallSidebar_06 = () => {
  const { showSidebar, toggleSidebar } = useAppContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className='content'>
          <button type='button' className='close-btn' onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo_06 />
          </header>
          <NavLinks_06 toggleSidebar={toggleSidebar} />
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar_06;
