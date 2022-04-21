
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import {Landing_06,Dashboard_06,Register_06, Error_06} from './pages';





function App_06() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Dashboard_06/>}  />
        <Route path="/landing" element={<Landing_06/>}  />
        <Route path="/register" element={<Register_06/>}  />
        <Route path="/*" element={<Error_06/>}  />
    </Routes>
    </BrowserRouter>
  );
}

export default App_06;
