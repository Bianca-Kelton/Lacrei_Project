import { Container } from "./styles";
import Logo from "../../assests/img/Logo.svg";
import { BsInfoCircle, BsQuestionCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <figure onClick={() => navigate("/")}>
        <img src={Logo} alt="" />
      </figure>

      <nav>
        <button>
          <BsInfoCircle size={21} />
          <p>Quem somos</p>
        </button>
        <button>
          <BsQuestionCircle size={21} />
          <p>Tem dúvidas? Fala conosco</p>
        </button>
      </nav>
    </Container>
  );
};

export default Header;
