import { FaUserCircle } from "react-icons/fa";
import { StyledHeader } from "./styles";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <StyledHeader>
      <h1>FinancesApp</h1>

      <Link to="/register">
        <FaUserCircle size="40" cursor="pointer" color="white" />
      </Link>
    </StyledHeader>
  );
};

export default Header;
