
import styled from "styled-components";
import { AccountBox } from "./accountBox";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Signup_Login() {
  return (
    <AppContainer>
      <AccountBox />
    </AppContainer>
  );
}

export default Signup_Login;