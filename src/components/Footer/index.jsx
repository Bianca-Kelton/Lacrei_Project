import { Container } from "./styles";
import LogoFooter from "../../assests/img/Footer.png";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <Container>
      <div className="container">
        <figure>
          <img src={LogoFooter} alt="" />
          <p>
            A plataforma de inclusão social e jurídica LGBTQIA+.
          </p>
        </figure>

        <div>
          <span>
            <AiOutlineMail size={18} />
            <p>contato@portallacrei.com.br</p>
          </span>

          <p>Copyright © 2022. Todos os direitos reservados. Lacrei.</p>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
