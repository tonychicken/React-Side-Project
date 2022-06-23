
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import {
  Landing_06,
  Register_06,
  Error_06,
  ProtectedRoute_06,
  TestFetchUseCors_06,
  TestFetchUseProxy_06,
} from './pages';

import {
  AddJob_06,
  AllJobs_06,
  Profile_06,
  Stats_06,
  SharedLayout_06,
} from './pages/dashboard';
function App_06() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute_06>
              <SharedLayout_06 />
            </ProtectedRoute_06>
          }
        >
          <Route index element={<Stats_06 />} />
          <Route path='profile' element={<Profile_06 />} />
          <Route path='add-job' element={<AddJob_06 />} />
          <Route path='all-jobs' element={<AllJobs_06 />} />
        </Route>

        
        <Route path='/landing' element={<Landing_06 />} />
        <Route path='/register' element={<Register_06 />} />
        <Route path='/testcors' element={<TestFetchUseCors_06 />} />
        <Route path='/testproxy' element={<TestFetchUseProxy_06 />} />
        <Route path='*' element={<Error_06 />} />
      </Routes>
      {/* <Landing_06 /> */}
    </BrowserRouter>
  );
}

export default App_06;
