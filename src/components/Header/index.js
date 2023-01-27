import { HeaderContainer } from "./style";
import logout from "../../assets/images/logout.svg"
import { useNavigate } from "react-router-dom";



export default function Header() {
  const navigate = useNavigate()

  function logoutButton(){
      localStorage.removeItem("token")
      localStorage.removeItem("id")
      navigate("/")
  }


  return (
    <HeaderContainer>
      <h1>BurguerShop</h1>
      <img src={logout} alt="logout" onClick={logoutButton}/>
    </HeaderContainer>
  );
}
