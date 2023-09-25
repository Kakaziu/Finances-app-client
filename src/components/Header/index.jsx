import { FaUserCircle } from "react-icons/fa";
import { StyledHeader } from "./styles";

const Header = () => {
  return (
    <StyledHeader>
      <h1>FinancesApp</h1>

      <FaUserCircle size="40" cursor="pointer" />
    </StyledHeader>
  );
};

export default Header;
