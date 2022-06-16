import { Outlet, Link } from 'react-router-dom';
import Wrapper from '../../assets/wrappers/SharedLayout';

import { Navbar_06, BigSidebar_06, SmallSidebar_06 } from '../../components';

const SharedLayout_06 = () => {
  return (
    <Wrapper>
      <main className='dashboard'>
        <SmallSidebar_06 />
        <BigSidebar_06 />
        <div>
          <Navbar_06 />
          <div className='dashboard-page'>
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};
export default SharedLayout_06;

/*
const SharedLayout_06 = () => {
  return (
    <Wrapper>
      <nav>
        <Link to='add-job'>add job</Link>
        <Link to='all-jobs'>all jobs</Link>
      </nav>
      <Outlet />
    </Wrapper>
  );
};
*/
