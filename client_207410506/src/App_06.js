import Landing_06 from './pages/Landing_06';
import styled from 'styled-components';

const Button = styled.button`
  background: red;
  color: White;
  font-size: irem;
`;
const Button2 = styled.button`
  background: blue;
  color: White;
  font-size: irem;
`;

function App_06() {
  return (
    <div>
      <Button>Click me</Button>
      <Button2>Click me</Button2>
      <Landing_06 />
    </div>
  );
}

export default App_06;
