import { HeaderS, ContainerHeader, LinkNav } from "./style";
import logout from "../../assets/images/logout.svg"
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate()

  function logoutButton() {
    localStorage.removeItem("token")
    localStorage.removeItem("id")
    navigate("/")
  }


  return (
    <HeaderS>
      <ContainerHeader>
        <h1>BurguerShop</h1>
        <nav>
          <ul>
            <li><LinkNav to="/home" activeclassname="active">Home</LinkNav></li>
            <li><LinkNav to="/history" activeclassname="nav-link">History</LinkNav></li>
          </ul>
          <img src={logout} alt="logout" onClick={logoutButton} />
        </nav>
      </ContainerHeader>
    </HeaderS>
  );
}
